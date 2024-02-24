import  express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config()

mongoose.connect(process.env.DB_URL).then(()=>{
    console.log('Mongo connected');
}).catch((err)=>{
    console.log(err);
})

const app = express();

app.listen(8000, ()=>{
    console.log('Server running...');
})