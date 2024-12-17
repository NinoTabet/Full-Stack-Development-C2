/*
npm install express
npm install pg
npm install dotenv


--- copy and paste this into your db.js file ---

const { Pool } = require("pg");
let pool = new Pool({
  connectionString: process.env.DATABASE_URL
  ,ssl: {rejectUnauthorized: false},
});

module.exports = pool;



*/
