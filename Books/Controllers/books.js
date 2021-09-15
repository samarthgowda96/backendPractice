import Books from '../Models/books.js'

//Getting all the Books Posts
export const getBooks = async(req,res)=>{
    try {
        const books = await Books.find()
        res.status(200).json(books);
        
    } catch (error) {
        res.status(500).json(error);
        
        
    }
}
// Creating new books
export const createBook = async(req,res)=>{
    const newbook = new Books(req.body);
    try {
        const savedBook = await newbook.save();
        res.status(200).json(savedBook);
    } catch (error) {
        res.status(500).json(error);
    }

}
// Deleting a book by ID
export const deleteBook = async (req, res)=>{
    const _id= req.params.id
    //console.log(_id)
    try {
        await Books.findByIdAndDelete(_id)
        res.status(200).json("Book Deleted")
    } catch (error) {
        res.status(500).json(error);
        
    }
}
// Update a book by ID
export const updateBook = async(req,res)=>{
    const _id= req.params.id
    try {
        const updatedBook = await Books.findByIdAndUpdate(_id,
            { 
                $set:req.body,
            },
            {new:true}
        )
        res.status(200).json(updatedBook);   
        console.log(updatedBook)
    } catch (error) {
        res.status(500).json(error);
        
    }
    
}