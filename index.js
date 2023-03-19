const express = require("express");
const app = express();
const mongoose = require('mongoose');
const Route = require('./routes/Server.route');
app.use(express.json());
app.use('/api',Route);

mongoose.connect('mongodb://127.0.0.1:27017/Final').then(()=>{
  console.log('connect to db');
}).catch(()=>{
  console.log('connect failed');
})


app.get('/*', (req, res)=>{
  res.send('ERROR 404: Not Found');
})
app.post('/*', (req, res)=>{
  res.send('ERROR 404: Not Found');
})


app.listen(3000, () => {
  console.log("App is running at 3000");
});
