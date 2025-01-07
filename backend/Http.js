const http=require('http');

const PORT=6677;

const myServer=http.createServer((request,response)=>{
    response.write("This is 1st response"+"\n");
    response.write("This is 2nd response"+"\n")
    response.write("This is 3rd response"+"\n")
    response.end();
})
myServer.listen(PORT,()=>{
    console.log(`My Server is running on PORT ${PORT}`);
})