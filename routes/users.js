
import express from "express"
import { addNewUser, deleteUser, getAllUsers, getUser, updateUser, updatPartInUser} from "../controllers/usersController.js";
const router=express.Router();


// this users rout 
 //router.get(routes,(req,res)=>{  }= bussnass logic or controller)

router.get("/",getAllUsers) 

router.post("/Add",addNewUser) 

router.get("/:id",getUser) 

router.delete("/:id",deleteUser) 

router.patch("/:id",updatPartInUser) 
router.put("/:id",updateUser) 
export default router;
