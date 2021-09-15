import {connect} from './config.js';
import express from 'express';
import bodyParser from 'body-Parser';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();


connect();
const app= express();
app.use(cors());
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))


app.listen(process.env.PORT,()=>{
    console.log(`Listening on PORT : ${process.env.PORT}`)
})

