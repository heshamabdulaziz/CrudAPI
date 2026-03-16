//npm init -y to initail packae.json 
//  old way to write node js 
//const express=require("express");
 // the modern write using import and to 
 // to use second way we have to add in json package  "type":"module"

 import express from "express";
import dotenv from "dotenv" // to save secuti enverment variabls like securt key or db info,...etc
dotenv.config()// middlewar of help us to accesst  .env file
const app=express();


// here were write all crud operations ( GET,POST,PUT ,PATCH)

// create sever
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{

    console.log(`server runing in port ${process.env.PORT}`);
    
})