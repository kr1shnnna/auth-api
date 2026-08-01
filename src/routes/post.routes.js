const express=require('express');
const jwt=require('jsonwebtoken');
const userModel=require('../models/user.model');

const router=express.Router();

router.post('/create',async(req,res)=>{
    // console.log(req.body);
    // console.log (req.cookies);

    // res.send({
    //     message:'Post created successfully',
    // })

    const token=req.cookies.token; // get the token from the cookie

   


    if(!token){
        res.status(401).json({
            meessage:'Unauthorized'
        })
    }

    try{
           const decoded= jwt.verify(token,process.env.JWT_SECRET)
        //    console.log(decoded); // decoded will contain the payload of the token, which includes the user ID

            const user=await userModel.findOne({
                _id:decoded.id

            })
            console.log(user);

    }
    catch(err){
        return res.status(401).json({
            message:'toke is invalid'
        })
    }
    
     res.send({
        message:'Post created successfully'
    })


})

module.exports=router;