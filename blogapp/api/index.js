const express = require('express')
const app =express();
const dotenv= require('dotenv')
const mongoose= require('mongoose')
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

app.listen('5000',()=>{
    console.log("running")
})