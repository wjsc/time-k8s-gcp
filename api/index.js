const express = require('express');
const app = express();
 
app.get('/time', (req, res) => {
  res.send({
    time: new Date().toISOString()
  });
})
 
app.listen(3000, ()=> console.log('App listening!'));