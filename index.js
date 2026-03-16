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
    id:1,  
    name:"Hesham",
    Email:"heshamAbdulaziz88@gmail.com"
},
   {
    id:2, 
    name:"Ali",
    Email:"Ali8@gmail.com"
},
   {
    id:3, 
    name:"jack",
    Email:"jack123@gmail.com"
}
]
// add user
//endpoint:http://localhost:5000/Add
app.post("/Add",(req,res)=>{
    const user={id:users.length+1,...req.body}

    users.push({id:users.length+1,...req.body});

res.json(users)
}) 

// endpoint :get all users
http://localhost:5000/
app.get("/",(req,res)=>{  
res.json(users)
}) 
// endpoint :return one user
//http://localhost:5000/id=1,2,3,4
app.get("/:id",(req,res)=>{ 
const {id}=req.params; 
const user=users.find((u)=>{
    return u.id==id})
res.json(user)
}) 

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{

    console.log(`server runing in port ${process.env.PORT}`);
    
})