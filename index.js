 import express from "express";
 import usersRouter from "./routes/users.js"
import dotenv from "dotenv" 
dotenv.config()
const app=express();
app.use(express.json()) 
// when endpoint /user go to users router

app.use("/user",usersRouter) 




const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{

    console.log(`server runing in port ${process.env.PORT}`);
    
})