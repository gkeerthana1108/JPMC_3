const mongoose=require('mongoose')
const StudentSchema=mongoose.Schema({
    _id:{
        type:Number,
        required:true
    },
    name:String,
    phone:Number,
    email:String
})
const StudentModel =mongoose.model("student",StudentSchema)

module.exports=StudentModel