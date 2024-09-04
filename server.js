const express=require('express')
const mongoose=require('mongoose')
const port=process.env.port || 3000;
const app=express()
const route=require('./routes/route')
const cors=require('cors')
const dotenv=require('dotenv')
dotenv.config()
app.use(express.json());
app.use(cors({
  origin:"https://appstore-app.netlify.app/"
}));

try{
  mongoose.connect(process.env.CONNECTION_STRING).then(()=>{
    console.log("MongoDB is connected Successfully");
    
  })
}
catch(error){
  console.log(error);
}

app.use('/task',route)

app.listen(port,()=>{
  console.log(`Server is running on http://localhost:${port}/`);
})
