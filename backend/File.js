const fs=require('fs')
fs.readFile('one.html','utf-8',(err,data)=>{
    if(err){
        console.log(err)
    }
    console.log(data)
})