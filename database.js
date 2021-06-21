const {Client} = require('pg');
require('dotenv').config();

const client = new Client({
    host: process.env.DATABASE_HOST,
    port: 5432,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    ssl: true
})

client.connect();

client.on("connect", ()=>{
    console.log("Database connected !");
})

client.on("end", ()=>{
    console.log("Database connection end !");
})

module.exports=client;