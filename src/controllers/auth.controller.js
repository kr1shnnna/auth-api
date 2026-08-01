const userModel=require('../models/user.model');
const jwt=require('jsonwebtoken');

async function registerUser(req,res){

    

    const {username,email,password}=req.body;


     const isUserAlreadyExists=await userModel.findOne({
        email
    })

    if(isUserAlreadyExists){
        return res.status(409).json({
            message:'User already exists'
        })
    }
    


    const user=await userModel.create({ // register user
        username,
        email,
        password   
    })        // creating a new user instance using the userModel and the data 



    // jwt.sign() is used to create a new JSON web token for the user.
    const token=jwt.sign({
         id:user._id,
    },process.env.JWT_SECRET)   // create token

    res.cookie('token',token)  // stored the token in a cookie named 'token'

    res.status(201).json({
        message:'User registered successfully',
        user
  
    })

    

}

module.exports={registerUser};