const mongoose=require('mongoose')

const schema=new mongoose.Schema({
  name:String,
  category:String,
  ImgUrl:String
},{
  collection:"tasks"
})

const taskModel=mongoose.model("",schema)
module.exports=taskModel;