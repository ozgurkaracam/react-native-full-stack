const router=require('express').Router()
const authMiddleware=require('../middlewares/authMiddleware')
const {addPost} = require("../controllers/linkController");

router.post('/',authMiddleware,addPost);

module.exports=router