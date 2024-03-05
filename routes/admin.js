const express = require("express");

const router = express.Router();
const path = require('path');

const rootDir = require('../util/path');

const product = [];

router.get("/add-product", (req, res, next) => {
    console.log("in add-product middleware");
    console.log("something ");
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  });
  
  router.post("/add-product", (req, res, next) => {
    product.push({title: req.body.title});
    res.redirect("/");
  });

exports.routes = router;
exports.product = product;

