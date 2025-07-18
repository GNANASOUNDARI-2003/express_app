const express=require('express');
const app=express();
app.use((req,res,next)=>{
    console.log('time:',Date.now());
    next();
});
app.get('/',(req,res)=>{
    res.send('response vanthuchi!!');
});
app.listen(2000,()=>console.log('port hearing'))
