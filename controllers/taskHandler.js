const taskModel = require("../models/TaskData")
const express=require('express')
const app=express()
app.use(express.json())

exports.taskReadAll=async (req,res)=>{
  if(req.query){
    const queryObject={...req.query}
    var query=await taskModel.find(queryObject)
  }else{
    var query=await taskModel.find()
  }
  res.status(200).json(query)
}


exports.taskCreate=async (req,res)=>{
  try
  {
    const {name,ImgUrl,category}=req.body
    const updatedData=await taskModel.create({name,ImgUrl,category})
    res.status(200).json(updatedData)
  }
  catch(err){
    res.status(500).json({
      msg:"Internal Server Error"
    })
  }
}

exports.taskUpdate=async(req,res)=>{
  try{
    const id=req.params.id
   const updatedData=await taskModel.findByIdAndUpdate(id,req.body)
   res.status(200).json(updatedData)
  }
  catch(err){
    res.status(500).json({
      msg:"Internal Server Error"
    })
  }
}

exports.taskDelete=async(req,res)=>{
  try{
    const id=req.params.id
   const deletedData=await taskModel.findByIdAndDelete(id)
   res.status(204).json(deletedData)
  }
  catch(err){
    res.status(500).json({
      msg:"Internal Server Error"
    })
  }
}