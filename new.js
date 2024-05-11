const { log } = require("console");
var http = require("http")
var url = require("url")
http.createServer((req,res)=>
{
    if(req.url!="/favicon.ico")
    {
    console.log(req.url);
    var q = url.parse(req.url,true);
    res.write(q.query.name);
    }
   
    res.end();
}).listen(4500);

console.log("server running on 4500");