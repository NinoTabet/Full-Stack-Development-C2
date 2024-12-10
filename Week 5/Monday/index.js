const express = require('express');
const app = express();

app.use(express.json());

// get endpoint
app.get("/Get", async (req, res) => {
    try {
        const {name, age} = req.query;

        const newName = `${name} is no longer your name and you are no longer ${age} years old. Your new name is Joey`

        return res.status(200).json(newName)

    } catch (err) {
        console.error(err);
        return res.status(500).json({message: 'Internal Server Error'});
    }
})

// get endpoint
app.post("/Post", async (req, res) => {
    try {
       // const {movieName} = req.query; - get/delete request 
       const {movieName} = req.body;

    } catch (err) {
        console.error(err);
        res.status(500).json({message: 'Internal Server Error'});
    }

})

// get endpoint
app.delete("/Delete", async (req, res) => {
    try {
        const {movieName} = req.query;

        
    } catch (err) {
        console.error(err);
        res.status(500).json({message: 'Internal Server Error'});
    }

})

// get endpoint
app.put("/Put", async (req, res) => {
    try {
        const {movieName} = req.body;

    } catch (err) {
        console.error(err);
        res.status(500).json({message: 'Internal Server Error'});
    }

})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})