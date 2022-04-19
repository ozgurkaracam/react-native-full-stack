
const express = require("express");

const router = express.Router();
const User=require('../models/user')
const authMiddleware=require('../middlewares/authMiddleware')

// controllers
const {
  signup,
  signin,
  forgotPassword,
  resetPassword,
} = require("../controllers/auth");

router.get("/", (req, res) => {
  return res.json({
    data: "hello world from kaloraat auth API",
  });
});
router.post("/signup", signup);
router.post("/signin", signin);
router.get('/me',authMiddleware,async (req,res)=>{
  const user=await User.findById(req.id).select('-password')
  res.json(user)
})
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

module.exports = router;
