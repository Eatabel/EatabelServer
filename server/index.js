const express = require('express');
const app = express();
const port = 3000;

const controllers = require('./controllers');

app.get('/', (req, res) => {
  res.send('Eatbel Server');
});

app.listen(port, () => {
  console.log(`Eatabel Server listening at http://localhost:${port}`)
});

app.get('/searchUPC/:upc', controllers.upcLookup);
app.get('/search/:query', controllers.search);
