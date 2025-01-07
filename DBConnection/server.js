const express=require('express')
const mongoclient=require('mongoose')
const Dotenv=require('dotenv')
const app=express();
Dotenv.config();
const PORT=5577;

mongoclient.connect(process.env.MONGOURL).then(()=>{
    console.log("Database connected successfully")

}).catch((error)=>{
    console.log(error)
})
app.listen(PORT,()=>{
    console.log(`My server is running on ${PORT}number`)
})
