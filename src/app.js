const express= require('express');
const authRoutes=require('./routes/auth.routes');
const postRoutes=require('./routes/post.routes');
const cookieParser=require('cookie-parser');

const app=express();

app.use(express.json());   // to parse incoming JSON requests

app.use(cookieParser()); // to parse cookies from incoming requests 




// so if i want to the register route i have to go to /api/auth/register then only i can use the resgister route api 

app.use('/api/auth',authRoutes); // these are called prefix routes 

app.use('/api/post',postRoutes);







module.exports=app;