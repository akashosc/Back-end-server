const mongoose=require('mongoose');

const todoScema=({
    task:String,
    crtegory:String,
    duedate:String,
});

const Todotask=mongoose.model('Todotask',todoScema);

module.exports=Todotask;