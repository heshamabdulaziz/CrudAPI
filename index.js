//npm init -y to initail packae.json 
//  old way to write node js 
//const express=require("express");
 // the modern write using import and to 
 // to use second way we have to add in json package  "type":"module"

 import express from "express";
 import { v4 as uuidv4 } from "uuid";
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


// endpoint :get all users
//http://localhost:5000/
app.get("/user",(req,res)=>{  
res.json(users)
}) 
// add user
//endpoint:http://localhost:5000/user/Add
app.post("/user/Add",(req,res)=>{
    const user={id:users.length+1,...req.body}

    users.push({id:uuidv4(),...req.body});

res.json(users)
}) 

// endpoint :return one user
//http://localhost:5000/user/id=1,2,3,4
// get one user
app.get("/user/:id",(req,res)=>{ 
const {id}=req.params; 
const user=users.find((u)=>u.id==id)
res.json(user)
}) 
// endpoint :delete  user
//http://localhost:5000/user/id=1,2,3,4
// delete user
app.delete("/user/:id",(req,res)=>{ 
const {id}=req.params; 
const user=users.filter((u)=>u.id!==id)
res.json(user)
}) 
//
// endpoint : update user 
//http://localhost:5000/user/id=1,2,3,4
// patch use whenwe update part of object
// Patch method
app.patch("/user/:id",(req,res)=>{ 
    const{name,Email}=req.body;
const {id}=req.params; 
const user=users.find((u)=>u.id==id)
// here uesr can update name or email
if(name){user.name=name} 
if(Email){user.Email=Email}

res.json(user)
}) 
app.put("/user/:id",(req,res)=>{ 
    const{name,Email}=req.body;
const {id}=req.params; 
const user=users.find((u)=>u.id==id)
// here update all properties of object ( update name and email)
// PUT method
//http://localhost:5000/user/id=1,2,3,4
// Patch method
if(name&&Email){user.name=name,user.Email=Email} 

res.json(user)
}) 


const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{

    console.log(`server runing in port ${process.env.PORT}`);
    
})