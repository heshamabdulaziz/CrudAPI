 import { v4 as uuidv4 } from "uuid";

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


export const  addNewUser=(req,res)=>{
//req.body return form date coming from client 
 //req.headers return  date coming from client from header


    try {
          const user={id:users.length+1,...req.body}
          users.push({id:uuidv4(),...req.body});
         res.status(200).json(users)
        
    } catch (error) {
        res.status(400).json(error)
        
    }// catch
  
}
export const getAllUsers=(req,res)=>{  

res.json(users)
}
export const getUser=(req,res)=>{ 
const {id}=req.params; 
const user=users.find((u)=>u.id==id)
res.json(user)
}
export const  updatPartInUser=(req,res)=>{ 
    const{name,Email}=req.body;
const {id}=req.params; 
const user=users.find((u)=>u.id==id)
// here uesr can update name or email
if(name){user.name=name} 
if(Email){user.Email=Email}

res.json(user)
}
export const updateUser=(req,res)=>{ 
    const{name,Email}=req.body;
const {id}=req.params; 
const user=users.find((u)=>u.id==id)
if(name&&Email){user.name=name,user.Email=Email} 

res.json(user)
}
export const deleteUser=(req,res)=>{ 
const {id}=req.params; 
const user=users.filter((u)=>u.id!==id)
res.json(user)
}