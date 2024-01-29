// const http = require('http');

const express = require("express");

// const routes = require('./example-routes');

// console.log(routes.someText);

// const server = http.createServer(routes.handler);

const app = express();

app.use((req, res, next) => {
  console.log("in the middleware");
  next();
});

app.use((req, res, next) => {
  console.log("in another middleware");
  // res.statusCode = 200;
  // res.setHeader('Content-Type', 'application/json')
  res.send("<h1>Hello Bitch!</h1>");
});

// const server = http.createServer(app);

// server.listen(3000);

app.listen(3000);
