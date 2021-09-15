import {connect} from './config.js';
import express from 'express';
import bodyParser from 'body-Parser';
import cors from 'cors';
import dotenv from 'dotenv';
import books from './Routes/books.js'


dotenv.config();

connect();
const app= express();
app.use(cors({ origin: true, credentials: true }));
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
//Home Route
app.get("/",(req,res) => {
    res.send("hello from books API")
})
//Common Route for book
app.use("/api/books",books);

//Server Listening 
app.listen(process.env.PORT,() => {
    console.log(`Listening on PORT : ${process.env.PORT}`)
})

