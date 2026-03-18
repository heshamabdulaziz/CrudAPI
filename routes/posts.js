
import express from "express"
 import { v4 as uuidv4 } from "uuid";
const router=express.Router();
const posts=[
    {
    id:1,  
    title:"title1",
    desc:"descraption1"
},
   {
    id:2, 
  title:"title2",
    desc:"descraption2"
},
   {
    id:3, 
    title:"title3",
    desc:"descraption3"
}
]

router.get("/",(req,res)=>{  
res.json(posts)
}) 

router.post("/Add",(req,res)=>{
    const post={id:users.length+1,...req.body}

    posts.push({id:uuidv4(),...req.body});

res.json(posts)
}) 

router.get("/:id",(req,res)=>{ 
const {id}=req.params; 
const post=posts.find((u)=>u.id==id)
res.json(post)
}) 

router.delete("/:id",(req,res)=>{ 
const {id}=req.params; 
const post=posts.filter((u)=>u.id!==id)
res.json(post)
}) 

router.patch("/:id",(req,res)=>{ 
    const{title,desc}=req.body;
const {id}=req.params; 
const post=posts.find((u)=>u.id==id)
// here uesr can update name or email
if(title){post,title=title} 
if(desc){post.desc=desc}

res.json(post)
}) 
router.put("/:id",(req,res)=>{ 
    const{title,desc}=req.body;
const {id}=req.params; 
const post=posts.find((u)=>u.id==id)
if(title&&desc){post.title=title,post.desc=desc} 

res.json(post)
}) 
export default router;
