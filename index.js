const express = require('express');
const app = express();
app.get('/',(req,res)=>{
  res.sendFile(__dirname + '/index.html');
});
app.get('/index',(req,res)=>{
  res.sendFile(__dirname + '/index.html');
});
app.listen(3016);
//console.log("Listening to port 3016 now");
