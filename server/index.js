import  express  from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRoutes from "./routes/user.route.js"
import authRoutes from "./routes/auth.route.js"

const app = express();
app.use(express.json());

dotenv.config()

mongoose.connect(process.env.DB_URL).then(()=>{
    console.log('Mongo connected');
}).catch((err)=>{
    console.log(err);
})


app.listen(8000, ()=>{
    console.log('Server running...');
})

app.use("/api/user", userRoutes)
app.use("/api/auth", authRoutes)