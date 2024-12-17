require('dotenv').config(); // -------- !!!
const express = require('express');
const app = express();
const pool = require('./db'); // -------- !!!

app.use(express.json());

// get request to search for movies
app.get("/Search", async (req, res) => {
    try {
        // collects movie name from request
        const {movieName} = req.query;

        // checks if movie name is undefined
        if (!movieName){
            return res.status(401).json({message:'Please be sure to input a movie name before you submit the form.'})
        }

        // searches db for provided movie name
        const searchMovies = await pool.query(
            'SELECT * FROM movies WHERE movie_title ILIKE $1',
            [`%${movieName}%`]
        );

        // checks if movie exists in db
        if(searchMovies.rowCount == 0){
            return res.status(404).json("Movie not found");
        }

        // responds with all relevant movies
        res.status(200).json(searchMovies.rows);

    } catch (err) {
        console.error(err);
        return res.status(500).json({message: 'Internal Server Error'})
    }
})

// creates movie in db
app.post("/Create", async (req, res) => {
    try {

        // collects movie title from request body
        const {movieTitle} = req.body;
        console.log(movieTitle)

        // checks if movie title is undefined
        if (!movieTitle){
            return res.status(401).json({message:'Please be sure to input a movie name before you submit the form.'})
        }

        // checks if movie exists in db
        const movieSearch = await pool.query(
            'SELECT * FROM movies WHERE movie_title ILIKE $1',
            [movieTitle]
        );

        console.log(movieSearch);

        // replies to use with 401 in case the movie already exists
        if(movieSearch.rowCount > 0){
            return res.status(401).json('Movie already exists in database.')            
        }

        // adds movie to db
        await pool.query(
            'INSERT INTO movies (movie_title) VALUES ($1)',
            [movieTitle]
        );

        // 200 - movie added successfully
        res.status(200).json({message:'Movie created successfully.'});

    } catch (err) {
        console.error(err)
        return res.status(500).json({message: 'Internal Server Error'})
    }
})

// removes movie from db
app.delete("/Remove", async (req, res) => {
    try {
        // collects movie title from request
        const {movieTitle} = req.query

        // checks if movieTitle is undefined
        if (!movieTitle){
            return res.status(401).json({message:'Please be sure to input a movie name before you submit the form.'})
        }

        
        // checks if movie exists in db
        const movieSearch = await pool.query(
            'SELECT * FROM movies WHERE movie_title ILIKE $1',
            [movieTitle]
        );

        // replies to use with 401 in case the movie does not exist
        if(movieSearch.rowCount == 0){
            return res.status(401).json('Movie doesn\'t exist in database. Please choose one that exists to be able to delete it.')            
        }

        // deletes movie from db
        await pool.query(
            'DELETE FROM movies WHERE movie_title ILIKE $1',
            [movieTitle]
        )

        // 200 - movie deleted successfully
        res.status(200).json({message: 'Movie deleted successfully.'});

    } catch (err) {
        console.error(err)
        return res.status(500).json({message: 'Internal Server Error'})
    }
})

// do this first thing tomorrow --- 
app.put("/Update", async (req, res) => {
    try {

        res.status(200).json();
    } catch (err) {
        return res.status(500).json({message: 'Internal Server Error'})
    }
})



const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})