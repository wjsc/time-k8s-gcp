var express = require('express')
var app = express()
 
app.get('/time', (req, res) => {
  res.send({
    time: new Date().toISOString()
  });
})
 
app.listen(3000, ()=> console.log('App listening!'));