var http= require("http")
var fs= require("fs")
var url=require("url")
http.createServer((req,res)=>{

if(req.url!="/favicon.ico"){
console.log(req.url);
var q = url.parse(req.url,true);


    fs.appendFile("helloo.txt",JSON.stringify(q.query) + "\n",(err)=>
{
    if(err)
    {
        console.log(err)
    }
    else{
        console.log(data)
    }
})



}

 res.end();
}).listen(8080)
    console.log("server is running")
