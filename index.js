 import express from "express";
 import usersRouter from "./routes/users.js"
 import postrRouter from "./routes/posts.js"
import dotenv from "dotenv" 
dotenv.config()
const app=express();
app.use(express.json()) 
// when endpoint /user go to users router

app.use("/user",usersRouter) 
app.use("/post",postrRouter) 




const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{

    console.log(`server runing in port ${process.env.PORT}`);
    
})