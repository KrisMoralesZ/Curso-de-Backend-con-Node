const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello this is my express server');
})

app.listen(port, () => {
  console.log('Mi primer server');
})
