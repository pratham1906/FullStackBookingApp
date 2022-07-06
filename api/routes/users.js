import express from "express"

const router=express.Router();
import { createError } from "../utils/error.js";
import { verifyToken } from "../utils/verifyToken.js";
import { deleteUser, getuser, getUsers, updateUser } from "../controllers/user.js";
import User from "../models/User.js";


router.get("/checkauth",verifyToken,(req,res,next)=>{
    res.send("Hello user,You are logged in ")
})
//UPDATE
router.put("/:id",updateUser)
//DELETE
router.delete("/:id",deleteUser)
//GET
router.get("/:id",getuser)


//GET ALL

router.get("/",getUsers)

export default router;