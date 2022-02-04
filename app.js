import express from "express";
import  mongoose  from "mongoose";
import 'dotenv/config'
import postRouter from './routes/posts.js'
import bodyParser from "body-parser";
import cors from "cors"

const app=express()

const PORT=5000

// these are our middlewares
// cors help other domains to acess our API and thus can make requests.
app.use(cors());
app.use(bodyParser.json());

app.use('/posts',postRouter)

app.get('/',(req,res)=>{
    res.send("Hello there from an API")
});

mongoose.connect(process.env.DB_CONNECT,()=>console.log("Connected to db"))

app.listen(PORT,()=>console.log("Server running"))