//npm init -y to initail packae.json 
//  old way to write node js 
//const express=require("express");
 // the modern write using import and to 
 // to use second way we have to add in json package  "type":"module"

 import express from "express";

const app=express();

// create sever 


app.listen("5000",()=>{

    console.log("server runing in port 5000");
    
})