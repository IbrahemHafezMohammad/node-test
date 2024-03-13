const express = require("express");

const bodyParser = require("body-parser");
const http = require('http');
const routes = require('./example-routes');

const rootDir = require('./util/path');

const path = require('path');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.set('view engine', 'pug');
app.set('views', 'views');// this is the default (no need for this line)

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

app.listen(3000);
// const server = http.createServer(routes.handler);

// server.listen(3000);
