import User from '../models/user.js';

export const register = async(req,res)=>{
    try {
        const newUser= new User({
            username:req.body.username,
            password:req.body.password,
            email:req.body.email
        });
        const user = await newUser.save()
        res.status(200).json(user)
        
    } catch (error) {
        res.status(500).json(error)
        
    }

} 