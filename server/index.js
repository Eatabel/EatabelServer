const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Eatbel Server');
});

app.listen(port, () => {
  console.log(`Eatabel Server listening at http://localhost:${port}`)
});