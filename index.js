const express = require('express');
const app = express();
app.get('/',(req,res)=>{
  res.sendFile(__dirname + '/index.html');
});
app.get('/index',(req,res)=>{
  res.sendFile(__dirname + '/index.html');
});
app.listen(3052);
console.log("Listening to port 3052");
