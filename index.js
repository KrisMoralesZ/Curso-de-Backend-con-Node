const express = require('express');
const routerApi = require('./routes');
const { logErrors, errorHandler } = require('./middlewares/error,handler')

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello this is my express server');
});

routerApi(app);

app.use(logErrors);
app.use(errorHandler);

app.listen(port, () => {
})
