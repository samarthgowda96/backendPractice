import express from 'express';
import {getBooks,createBook, deleteBook,updateBook} from '../Controllers/books.js'
const router= express.Router();
// Defining the routes for updating, creating, viewing, deleting books
router.get('/',getBooks);
router.post('/createBook',createBook);
router.delete('/deleteBook/:id',deleteBook)
router.put('/updateBook/:id',updateBook)


export  default router;