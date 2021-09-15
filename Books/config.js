import mongoose from 'mongoose';
import dotenv from 'dotenv'

dotenv.config();

export const connect=()=>{
    mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true,
        
    }).then(()=>{
        console.log("connected to mongo")
    }).catch((e)=>{
        console.log(e)
    })
}


