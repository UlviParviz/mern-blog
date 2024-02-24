import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utils/error.js";

export const signup = async (req, res, next) => {
    
    const {username, email, password} = req.body;

    if(!username || !password || !email || username === '' || password === '' || email === '') {
        next(errorHandler(400, 'All fields are required'))
    }

    
    const hashedPassword = await bcryptjs.hashSync(password, 10)

    const newUser =  new User({username,email,password: hashedPassword})

    try {
        await newUser.save();

        res.json({message: 'Signup successful'})
    } catch (error) {
        next(error)
    }

}