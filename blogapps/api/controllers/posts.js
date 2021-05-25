import User from '../models/user.js';
import bcrypt from 'bcrypt';
import Post from '../models/post.js'

export const createPost= async (req, res)=>{
    const newPost = new Post(req.body);
    try {
        const savedPost = await newPost.save();
        res.status(200).json(savedPost)
        
    } catch (error) {
        res.status(500).json(error)
        
    }  

}
export const updatePost= async (req, res)=>{
    try {
        const post = await Post.findById(req.params.id);
        
        if (post.username === req.body.username) {
            
          try {
            const updatedPost = await Post.findByIdAndUpdate(
              req.params.id,
              {
                $set: req.body,
              },
              { new: true }
            );
            res.status(200).json(updatedPost);
          } catch (err) {
            res.status(500).json(err);
          }
        } else {
          res.status(401).json("You can update only your post!");
        }
      } catch (err) {
        res.status(500).json(err);
    }
}

export const deletePost  =async(req, res)=>{
    try {
        const post = await Post.findById(req.params.id);
        
        if (post.username === req.body.username) {
            
          try {
            await post.delete();
            
            res.status(200).json("post has been deleted");
          } catch (err) {
            res.status(500).json(err);
          }
        } else {
          res.status(401).json("You can update only your post!");
        }
      } catch (err) {
        res.status(500).json(err);
    }
}
export const getPost=async(req, res)=>{
    try {
        const post= await Post.findById(req.params.id)

        res.status(200).json(post)
        
    } catch (error) {
        res.status(500).json(error)
        
    }
}