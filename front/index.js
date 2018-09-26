const express = require('express');
const fetch = require('node-fetch');
const app = express();
 
app.get('/', async (req, res) => {
  res.send(prepareHTML(await getTime()));
})
 
const prepareHTML = time => {
  return `<div>${time}</div>`;
}
const getTime = () => fetch(process.env.API_ENDPOINT)
                      .then(res => res.status == 200 && res.json())
                      .then(obj => obj.time);

app.listen(3001, ()=> console.log('App listening!'));