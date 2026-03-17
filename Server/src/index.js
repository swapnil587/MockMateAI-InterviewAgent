import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/index.js"
dotenv.config()

const app=express()
const PORT=process.env.PORT || 1010

app.get("/", (req,res)=>{
    res.send("server is created ")
})

app.listen(PORT, ()=>{
    console.log(`server is running at port ${PORT}`)
    connectDB()

})