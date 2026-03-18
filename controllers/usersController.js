
export const  addNewUser=(req,res)=>{
    const user={id:users.length+1,...req.body}

    users.push({id:uuidv4(),...req.body});

res.json(users)
}
export const getAllUsers=(req,res)=>{  
res.json(users)
}
export const getUser=(req,res)=>{ 
const {id}=req.params; 
const user=users.find((u)=>u.id==id)
res.json(user)
}
export const updatPartInUser=(req,res)=>{ 
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