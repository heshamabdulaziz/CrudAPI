//npm init -y to initail packae.json 
//  old way to write node js 
//const express=require("express");
 // the modern write using import and to 
 // to use second way we have to add in json package  "type":"module"

 import express from "express";
import dotenv from "dotenv" // to save secuti enverment variabls like securt key or db info,...etc
dotenv.config()// middlewar of help us to accesst  .env file
const app=express();
app.use(express.json()) // middlewar  lik bodyparser.json

const users=[
    {
    name:"Hesham",
    Email:"heshamAbdulaziz88@gmail.com"
},
   {
    name:"Ali",
    Email:"Ali8@gmail.com"
},
   {
    name:"jack",
    Email:"jack123@gmail.com"
}
]
// add user
//endpoint:http://localhost:5000/Add
app.post("/Add",(req,res)=>{
    const user=req.body
    users.push(req.body);

res.json(users)
}) 
// rout get all users
app.get("/",(req,res)=>{  
res.json(users)
}) // use to add data

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{

    console.log(`server runing in port ${process.env.PORT}`);
    
})