import express from "express"
import dotenv from "dotenv"
import connectDB from "./db/index.js"
dotenv.config()
import cors from "cors"
import authRouter from "./routes/auth.route.js"
import cookieParser from "cookie-parser";


const app=express()

app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use(express.json())
app.use(cookieParser())

app.use("/api/auth", authRouter)

const PORT=process.env.PORT || 1010
app.listen(PORT, ()=>{
    console.log(`server is running at port ${PORT}`)
    connectDB()

})