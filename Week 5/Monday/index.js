const express = require('express');
const app = express();

app.use(express.json());

let movies = [
    "The Shawshank Redemption",
    "The Godfather",
    "The Dark Knight",
    "Pulp Fiction",
    "Forrest Gump",
    "Inception",
    "The Matrix",
    "Fight Club",
    "The Lord of the Rings: The Return of the King",
    "The Empire Strikes Back"
  ];  

// get endpoint
app.get("/Search", async (req, res) => {
    try {
        const {movieName} = req.query;

        if (!movieName){
            return res.status(401).json('Please input a movie name.')
        }

        let search = []

        for (let i = 0; i < movies.length; i++){
            if(movies[i] === movieName){
                search.push(movies[i]);
            }
        }

        if (search.length === 0){
            return res.status(404).json('Movie not found.');
        }else{
            return res.status(200).json(search);
        }

    } catch (err) {
        console.error(err);
        return res.status(500).json({message: 'Internal Server Error'});
    }
})

// get endpoint
app.post("/AddMovie", async (req, res) => {
    try {
        const {newMovie} = req.body;
       
        if (!newMovie){
            return res.status(401).json('Please input a movie');
        }

        for(let i = 0; i<movies.length; i++){
            if(movies[i] === newMovie){
                return res.status(400).json('Movie already exists in array');
            }
        }

        movies.push(newMovie)

       return res.status(200).json(movies)
    } catch (err) {
        console.error(err);
        res.status(500).json({message: 'Internal Server Error'});
    }
})

app.delete("/DeleteMovie", async (req, res) => {
    try {
        const {movieName} = req.query;

        if (!movieName){
            return res.status(401).json('Please input a movie name.')
        }

        for (let i = 0; i < movies.length; i++){
            if(movies[i] === movieName){
                movies.splice(i,1);
            }
        }

        return res.status(200).json(movies);
    } catch (err) {
        console.error(err);
        res.status(500).json({message: 'Internal Server Error'});
    }
})

app.put('/EditMovie', async (req, res) => {
    try {
        const {newMovie, oldMovie} = req.body;
       
        if (!newMovie || !oldMovie){
            return res.status(401).json('Please input a movie name for both fields');
        }

        for(let i = 0; i<movies.length; i++){
            if(movies[i] === newMovie){
                // splice()
                // push()
                // shift()
                break;
            }
        }

       return res.status(200).json(movies)
    } catch (err) {
        console.error(err);
        res.status(500).json({message: 'Internal Server Error'});
    }
})

const PORT = 3000
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
