const express = require('express');

const mycalculator=require('./calculate');
const app=express();
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.get('/',(req,res)=>{
    res.send("wlc");
})

app.post('/',(req,res)=>{
    var x=req.body.x;
    var y=req.body.y;    
    var z=req.body.z;
  
    res.send("welcome "+x+" your email is "+y+" & contact no is "+z+".");
})
app.listen(4000,()=>console.log("running"))
