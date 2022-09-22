const express = require( 'express');
const router = require('./router/index');
const app = express();
const port = 3000;

const loggingMiddleware = (req, res, next) => {
  console.log(req);
}

app.use(loggingMiddleware);
app.use(router);

app.listen(port);