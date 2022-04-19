const mongoose=require('mongoose')

const Link=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    link:{},
    likes:[{type:Object,ref:'user'}],
    views:{
        type:Number,
        default:0
    },
    postedBy:{
        type:Object,
        ref:'user'
    }
})

module.exports=Link