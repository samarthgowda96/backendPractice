import mongoose from 'mongoose';
//Defining the book schema
const BookSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    description:{
        type:String,
    },
    publisher: {
        type: String
      },
    published_date: {
        type: Date
    },
    updated_date: {
        type: Date,
        default: Date.now
      }
});
const Book= mongoose.model('Book',BookSchema)

export default Book;