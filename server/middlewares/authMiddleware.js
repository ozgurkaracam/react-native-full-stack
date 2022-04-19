const jwt=require('jsonwebtoken')
const authMiddleware=async (req,res,next)=>{

    try{
        const token=req.headers.authorization.split(' ')[1]
        const payload= await jwt.verify(token,process.env.JWT_SECRET)
        const {_id,user}=payload
        req.id=_id,req.user=payload.user
        next()
    }
    catch (e){
        console.log(e.message)
    }
}
module.exports= authMiddleware