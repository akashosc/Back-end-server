const express=require('express');

const router=express.Router();
const homeController=require('../controllers/home_controllers');
const postthedet=require('../controllers/post_controller');
console.log('router is lodded');
router.get('/',homeController.home);
router.get('/user',homeController.profile);
router.post('/',postthedet.addtask);

// any farther routs can acces from hear
// it would be router.use('/routerName',require('./routerFile'));

module.exports=router;