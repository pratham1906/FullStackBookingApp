import User from "../models/User.js"

//update user
export const updateUser=async (req,res,next)=>{
    try{
        const updatedUser=await User.findByIdAndUpdate(req.params.id,{$set:req.body},{new :true});
        res.status(200).json(updatedUser);
     }
     catch(err){
         res.status(500).json(err);
     }
}


//delete hotel
export const deleteUser=async (req,res,next)=>{
    try{
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json("Hotel has been Deleted");
     }
     catch(err){
         res.status(500).json(err);
     }
}


//get hotel
export const getuser=async (req,res,next)=>{
    try{
        const user=await User.findById(req.params.id);
        res.status(200).json(user);
     }
     catch(err){
         res.status(500).json(err);
     }
}

//get all hotels
export const getUsers=async (req,res,next)=>{
    try{
        const users=await User.find();
        res.status(200).json(users);
     }
     catch(err){
        next(err);
     }
}