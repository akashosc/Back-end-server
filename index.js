const express= require('express');
const app=express();
const port =8000;
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('assets'));
const db = require('./config/mongoose');
// use Express router 
app.use('/',require('./routes'));

// set up the viewengin
app.set('view engine','ejs');
app.set('views','./views');

// set up the viewengin

app.listen(port,function(err){
    if(err){
        console.log(`Error on running server ${port}`);
    }
    console.log(`Server is now reday for use ${port}`);
})