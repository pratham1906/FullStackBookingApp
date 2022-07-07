import express from "express"

const router=express.Router();
import { createError } from "../utils/error.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/verifyToken.js";
import { deleteUser, getuser, getUsers, updateUser } from "../controllers/user.js";
import User from "../models/User.js";


// router.get("/checkauth",verifyToken,(req,res,next)=>{
//     res.send("Hello user,You are logged in ")
// })

// router.get("/checkuser/:id",verifyUser,(req,res,next)=>{
//     res.send("Hello user ,You are logged in and you can delete your account");
// })

// router.get("/checkadmin/:id",verifyAdmin,(req,res,next)=>{
//     res.send("Hello user ,You are logged in and you can delete all accounts");
// })
//UPDATE
router.put("/:id",verifyUser,updateUser)
//DELETE
router.delete("/:id",verifyUser,deleteUser)
//GET
router.get("/:id",verifyUser,getuser)


//GET ALL

router.get("/",verifyAdmin,getUsers)

export default router;