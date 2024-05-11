const { log } = require("console");
var http=require('http');
var url = require('url');
http.createServer((req,res)=>
{
    if (req.url!="favicon.ico") 
    {
     console.log(req.url);
     var q=url.parse(req.url,true);
     const num1 = parseInt(req.body.num1);
     const num2 = parseInt(req.body.num2);
 
     const sum = num1 + num2;
 
     res.write(q.query.sum);
    }
    res.end();
}
).listen(5000);
console.log("server is running on port 5000");