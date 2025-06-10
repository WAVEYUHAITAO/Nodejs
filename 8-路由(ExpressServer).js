import express from "express";
// const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  // res.send("欢迎来到首页！");
  res.send("<h1>欢迎来到首页！</h1>");
});

app.get("/about", (req, res) => {
  res.send("关于我们");
});

app.get("/api/products", (req, res) => {
  const products = [
    { id: 1, name: "产品1" },
    { id: 2, name: "产品2" },
  ];
  res.json(products);
});

app.use((req, res, next) => {
  res.status(404).send("404 Not Found");
});

app.listen(port, () => {
  console.log(`服务器运行在 http://localhost:${port}/`);
});
