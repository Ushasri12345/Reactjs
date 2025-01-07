const express=require("express")
const users=require("./users.json")
const app=express();
const PORT=5567;
app.get("/users",(req,res)=>{
    return res.json(users);
})
app.get("/users/:id",(req,res)=>{
    const id=Number(req.params.id);
    const user=users.find((user)=>user.id===id)
    return res.json(user);

})
app.listen(PORT,()=>{
    console.log(`My Server is running on ${PORT} number`)
})