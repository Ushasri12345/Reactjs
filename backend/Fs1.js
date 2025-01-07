const fs=require('fs');
console.log("This is my 1st console statement");//1 console

fs.readFile('one.txt','utf-8',(err,result));
console.log(result);//2 console

console.log("this is my 3rd console statement");//3 rd console