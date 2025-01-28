require('dotenv').config();
const express = require("express");
const cors = require("cors");
const app = express();
const pool = require("./db");
const bcrypt = require('bcrypt');
const saltRounds = 12;
const jwt = require('jsonwebtoken');


app.use(cors());
app.use(express.json());


// middleware jwt auth
function verifyToken(req, res, next) {
 try {
   const token = req.headers['authorization'];

   // Check if the token is not present
   if (!token) {
     console.log('Unauthorized: Token not found');
     return res.status(401).json({ message: 'Unauthorized' });
   }


   // Verify the token
   jwt.verify(token.split(' ')[1], process.env.JWT_SECRET, (err, user) => {
     if (err) {
        console.log('Forbidden: Token verification failed');
        console.error(err);
        return res.status(403).json({ message: 'Forbidden' });
     }
 
     console.log('Token verified successfully:', user);
     req.user = user;
     next();
  });
 
 } catch (error) {
   console.error(error.message);
   res.status(500).json({ message: 'Internal Server Error' });
 }
}

app.get('/wtv', verifyToken, async(req, res) =>{
    try {
        const userId = req.user
    } catch (err) {
        console.error(err)
    }
})

// user signup api
app.post("/signup", async (req, res) => {
 const passwordRegex = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]).{8,}$/;
 const { email_address, password, username } = req.body;
 try {
   // checks if account with provided email exists
   const accountEmailCheck = await pool.query(
     "SELECT email FROM user_accounts WHERE email = LOWER($1)",
     [email_address]
   );


   // checks if account with provided username was provided already exists
   const accountUsernameCheck = await pool.query(
     "SELECT lower_username FROM user_accounts WHERE username = LOWER($1)",
     [username]
   );


   if (accountEmailCheck.rows.length > 0) {
     return res.status(400).send("Email is already in use. If you forgot your password please click the \"Forgot password\" button!");
   } else if (accountUsernameCheck.rows.length > 0) {
     return res.status(400).send("Username is already in use. Please choose another username.");
   } else {
     if (!passwordRegex.test(password)) {
       return res.status(400).send("password does not meet stated security requirements.");
     } else {
       const hashedPassword = await bcrypt.hash(password, saltRounds);
       await pool.query(
         "INSERT INTO user_accounts (email, username, lower_username, password) VALUES (LOWER($1), ($2), LOWER($3), $4)",
         [email_address, username, username, hashedPassword]
       );
       return res.status(200).send("Account created successfully");
     }
   }
 } catch (error) {
   console.error(error);
   res.status(500).send("Internal Server Error");
 }
});

// user login api
app.post("/login", async(req, res)=>{
 const { email_address, password } = req.body;
 try {
   // check to see if email exists in db
   // if it does, then the user_id is selected
   const user = await pool.query(
     "SELECT user_id, password FROM user_accounts WHERE email = LOWER($1)",
     [email_address]
   );


   if (user.rows.length === 0) {
     return res.status(404).json({ message: "There is no account associated with the provided email." });
   }


   const passwordMatch = await bcrypt.compare(password, user.rows[0].password);
   if (passwordMatch) {
     const token = jwt.sign({ userId: user.rows[0].user_id  }, process.env.JWT_SECRET, { expiresIn: '12h' });
     res.status(200).json({ message: "Log in successful.", token: token });
     return token;
   } else {
     res.status(401).json({ message: "Invalid password" });
   }
 } catch (error) {
   console.error(error.message);
   res.status(500).json({message:"Internal Server Error"});
 }
});

// server port logic
const port = process.env.PORT || 3000;
app.listen(port, () => {
   console.log(`Server has started on port ${port}`);
});