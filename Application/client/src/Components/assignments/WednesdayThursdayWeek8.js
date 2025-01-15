/*

    Build a frontend based on the following back end and database
    Your frontend should have 3 pages that link to 3 different urls ('/getPage' ,'/postPage', '/deletePage')
    Use bootstrap for styling
    Hint: use react router to create your different urls

    Notes: Please ask me if you have ANY questions! We don't have a lot of time for this assignment so please ask 
            if you get stuck at all!


    const express = require("express");
    const cors = require('cors');
    const app = express();
    const pool = require("./db");

    app.use(cors());
    app.use(express.json());

    // search endpoint to query database for requested book title
    app.get("/search", async (req, res) => {

    // pulls book title from request
    const bookTitle = req.query.title;

    try {

        // searches databse for all books with a similar title to the request
        const searchResults = await pool.query(
            "SELECT * FROM books WHERE title ILIKE ($1)",
            [`%${bookTitle}%`]
        );
        
        // if the book isn't found, this returns 404
        if (searchResults.rows.length === 0) {
        return res.status(404).json({message: 'Book not found'});
        }

        // return json of search results
        res.json(searchResults.rows);

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
    });

    // create endpoint to create a new book in the database
    app.post("/create", async (req, res) => {
    
    const { title, author } = req.body;

    try {

        // returns 400 response if the title or author is missing from request body
        if (!title || !author) {
        return res.status(400).json({ message: 'Title and author are required' });
        }

        // checks if book with specified title and author already exists
        const existingBook = await pool.query(
        "SELECT * FROM books WHERE title ILIKE $1 AND author ILIKE $2",
        [title, author]
        );

        // if book exists, responds with 404 status
        if (existingBook.rows.length > 0) {
        return res.status(400).json({ message: 'Book already exists' });
        }

        // inserts the new book into the database
        await pool.query(
        "INSERT INTO books (title, author) VALUES ($1, $2) RETURNING *",
        [title, author]
        );

        // respond 200 status
        res.status(200).json({ message: 'Book created successfully' });

    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
    });

    // delete endpoint to delete a book from the database
    app.delete("/delete", async (req, res) => {
    const { title, author } = req.body;

    // check if title and author are provided
    if (!title || !author) {
        return res.status(400).json({ message: 'Title and author are required' });
    }

    try {

        // deletes the book from the database
        const result = await pool.query(
        "DELETE FROM books WHERE title ILIKE $1 AND author ILIKE $2 RETURNING *",
        [title, author]
        );

        // checks if any rows were affected
        if (result.rowCount === 0) {
        return res.status(404).json({ message: 'Book not found' });
        }

        // respond 200 status
        res.status(200).json({ message: 'Book deleted successfully' });
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ message: 'Internal Server Error' });
    }
    });

    const PORT = 3000;
    app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    });

    
*/

// database queries
/*

    CREATE TABLE books (
    book_id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL
    );

    INSERT INTO books (title, author) VALUES
    ('To Kill a Mockingbird', 'Harper Lee'),
    ('1984', 'George Orwell'),
    ('The Great Gatsby', 'F. Scott Fitzgerald'),
    ('The Catcher in the Rye', 'J.D. Salinger'),
    ('Pride and Prejudice', 'Jane Austen'),
    ('The Lord of the Rings', 'J.R.R. Tolkien'),
    ('The Hobbit', 'J.R.R. Tolkien'),
    ('War and Peace', 'Leo Tolstoy'),
    ('The Odyssey', 'Homer'),
    ('Moby Dick', 'Herman Melville'),
    ('Brave New World', 'Aldous Huxley'),
    ('The Road', 'Cormac McCarthy'),
    ('The Shining', 'Stephen King'),
    ('Catch-22', 'Joseph Heller'),
    ('Slaughterhouse-Five', 'Kurt Vonnegut'),
    ('The Bell Jar', 'Sylvia Plath'),
    ('Beloved', 'Toni Morrison'),
    ('The Old Man and the Sea', 'Ernest Hemingway'),
    ('Fahrenheit 451', 'Ray Bradbury');

*/