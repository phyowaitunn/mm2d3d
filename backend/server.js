
const express=require('express');
const app=express();

app.get('/api/set',(req,res)=>{

res.json({index:1345.67, twod:67});

});

app.listen(3000,()=>{

console.log("Monster server running");

});
