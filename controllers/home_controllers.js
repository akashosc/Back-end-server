const Todotask=require('../models/todotask');
async function getItems(){

     const Items = await Todotask.find({});
     return Items;
   
   }
module.exports.home=function(req,res){
     getItems().then(function(todolist){
         return res.render('home',{
              list:todolist,
          })
       })
}
module.exports.profile=function(req,res){
     return res.end('<h1>this is profile</h1>');
}