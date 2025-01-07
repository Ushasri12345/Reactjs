const fs=require('fs')
const content="Adding data externally";
fs.writeFile('one2.txt',content,(err)=>{
    if(err){
        console.log(err)
    }
    console.log("File updated successfully")
})