
import express from "express"
 import { v4 as uuidv4 } from "uuid";
const router=express.Router();
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

router.get("/user",(req,res)=>{  
res.json(users)
}) 

router.post("/user/Add",(req,res)=>{
    const user={id:users.length+1,...req.body}

    users.push({id:uuidv4(),...req.body});

res.json(users)
}) 

router.get("/user/:id",(req,res)=>{ 
const {id}=req.params; 
const user=users.find((u)=>u.id==id)
res.json(user)
}) 

router.delete("/user/:id",(req,res)=>{ 
const {id}=req.params; 
const user=users.filter((u)=>u.id!==id)
res.json(user)
}) 

router.patch("/user/:id",(req,res)=>{ 
    const{name,Email}=req.body;
const {id}=req.params; 
const user=users.find((u)=>u.id==id)
// here uesr can update name or email
if(name){user.name=name} 
if(Email){user.Email=Email}

res.json(user)
}) 
router.put("/user/:id",(req,res)=>{ 
    const{name,Email}=req.body;
const {id}=req.params; 
const user=users.find((u)=>u.id==id)
if(name&&Email){user.name=name,user.Email=Email} 

res.json(user)
}) 
export default router;
