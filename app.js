var express=require('express');
const bodyParser= require('body-parser')
var app=express();
const fs=require('fs');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}));

app.post('/show',(req,res)=>{
   res.send(req.body);
   fs.appendFile('helloo.txt',JSON.stringify(req.body),(err)=>{
       if(err) throw err;
       console.log('data saved');
   });


});



app.listen(3000,function(){
    console.log('server started at 3000');
});