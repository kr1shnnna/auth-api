const express=require('express');
const authController=require('../controllers/auth.controller');


const router=express.Router();

router.post('/register',authController.registerUser);



// router.get('/cookie',(req,res)=>{
//     console.log(req.cookies); 
//     res.json({
//         message:'Cookie received',
//         cookies:req.cookies
//     })
// })







module.exports=router;
