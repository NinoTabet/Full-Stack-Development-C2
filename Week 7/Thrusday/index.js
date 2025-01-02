const express = require('express');
const app = express();
const cors = require("cors");

app.use(express.json());
app.use(cors());

app.get("/search", async (req, res) => {

    try {
    const number = req.query.number;

    const people = [
        {
            name: "Alice Johnson",
            age: 28,
            city: "New York",
            occupation: "Software Engineer"
        },
        {
            name: "Michael Smith",
            age: 35,
            city: "San Francisco",
            occupation: "Product Manager"
        },
        {
            name: "Emily Davis",
            age: 22,
            city: "Los Angeles",
            occupation: "Graphic Designer"
        },
        {
            name: "John Brown",
            age: 40,
            city: "Chicago",
            occupation: "Sales Executive"
        },
        {
            name: "Jessica Wilson",
            age: 30,
            city: "Miami",
            occupation: "Digital Marketer"
        },
        {
            name: "Daniel Taylor",
            age: 27,
            city: "Seattle",
            occupation: "Data Scientist"
        },
        {
            name: "Sophia Martinez",
            age: 24,
            city: "Austin",
            occupation: "Content Writer"
        }
    ];

    if(number != 5){
        res.status(400).json('Number is incorrect');
    }else{
        res.status(200).json(people);
    }

    } catch (err) {
        console.error(err);
        res.status(500).json('Internal Server Error');
    }

});

app.get("/create", async (req, res) => {

    try {
    const name = req.body;

    if(name != 'Alice Johnson'){
        res.status(400).json('Name is incorrect');
    }else{
        res.status(200).json('Name received successfully!');
    }

    } catch (err) {
        console.error(err);
        res.status(500).json('Internal Server Error');
    }

});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});ç