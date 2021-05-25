import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import register from './api/routes/auth.js';
import cors from 'cors';

import bodyParser from 'body-Parser';
const app = express();

dotenv.config();

mongoose.connect(process.env.MONGOURL,{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useCreateIndex:true,
}).then(()=>{
    console.log("connected to mongo")
}).catch((e)=>{
    console.log(e)
})

app.use(cors())
app.use(express.json())
app.use(bodyParser.json({limit:"30mb",extended:true}))
app.use(bodyParser.urlencoded({limit:"30mb",extended:true}))
app.use('/auth',register)
app.listen(5000, ()=>{
    console.log("listening on port 5000")
})