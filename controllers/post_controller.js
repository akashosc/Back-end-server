const mongoose = require('mongoose');
const Todotask=require('../models/todotask');
const homeController=require('./home_controllers');

module.exports.addtask=async function(req,res){
    console.log(req.body);
    // return res.render('home');
   const contact = new Todotask({
    task:req.body.task,
    crtegory:req.body.crtegory,
    duedate:req.body.duedate,
    });
   
    const result = await contact.save();// Make sure to wrap this code in an async function
    console.log(contact);
    return homeController.home;
}