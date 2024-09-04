const express = require('express');
const mongoose = require('mongoose');
const port = process.env.PORT || 3000;
const app = express();
const route = require('./routes/route');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();

app.use(express.json());
app.use(cors({
  origin: "https://appstore-app.netlify.app"
}));


mongoose.connect(process.env.CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("MongoDB is connected Successfully");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });


app.use('*', (req, res, next) => {
  if (req.get('User-Agent').includes("PostmanRuntime")) {
    return res.status(400).json({
      status: "Bad Request"
    });
  }
  next();
});


app.use('/task', route);


app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}/`);
});
