require('dotenv').config(); // -------- !!!
const express = require('express');
const app = express();
const pool = require('./db'); // -------- !!!

app.use(express.json());

app.get("/Search", async (req, res) => {
    try {
        console.log('yes')
        const {movieName} = req.query;

        console.log('before query')
        const searchMovies = await pool.query(
            'SELECT * FROM movies WHERE movie_title = $1',
            [movieName]
        );
        console.log(searchMovies);

        if(searchMovies.rows.length == 0){
            return res.status(404).json("Movie not found");
        }

        res.status(200).json(searchMovies);

    } catch (err) {
        return res.status(500).json({message: 'Internal Server Error'})
    }
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})