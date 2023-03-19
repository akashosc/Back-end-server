const express= require('express');
const app=express();
const port =8000;


app.listen(port,function(err){
    if(err){
        console.log(`Error on running server ${port}`);
    }
    console.log(`Server is now reday for use ${port}`);
})