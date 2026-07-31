const express= require('express');
const authRoutes=require('./routes/auth.routes');

const app=express();

app.use(express.json());   // to parse incoming JSON requests




// so if i want to the register route i have to go to /api/auth/register then only i can use the resgister route api 

app.use('/api/auth',authRoutes);






module.exports=app;