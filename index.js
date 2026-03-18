 import express from "express";
 import usersRouter from "./routes/users.js"
import dotenv from "dotenv" 
dotenv.config()
const app=express();
app.use(express.json()) // 
app.use("/",usersRouter)




const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{

    console.log(`server runing in port ${process.env.PORT}`);
    
})