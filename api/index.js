import express from "express"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"
const app=express()


import authRoutes from "./routes/auth.js"
import usersRoutes from "./routes/users.js"
import roomRoutes from "./routes/rooms.js"
import hotelRoutes from "./routes/hotels.js"
const connect=async()=>{
    try{
        await mongoose.connect("mongodb://localhost:27017/Bookings");
        console.log("Connected to mongoDB")
    }
    catch(error){
    throw error;
    }
}

// app.get("/",(req,res)=>{
//     res.send("Hello World");
// })


//middlewares
app.use(cookieParser());
app.use(express.json());

app.use("/api/auth",authRoutes);
app.use("/api/users",usersRoutes);
app.use("/api/hotels",hotelRoutes);
app.use("/api/rooms",roomRoutes);

app.use((err,req,res,next)=>{
    const errorStatus=err.status ||500;
    const errorMessage =err.message || "Something went wrong"
return res.status(500).json({
    success:false,
    status:errorStatus,
    message:errorMessage,
 stack:err.stack
})
})
app.listen(8800,()=>{
    connect();
    console.log("Server running........")
})