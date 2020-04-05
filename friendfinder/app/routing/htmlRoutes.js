const Router = require("express").Router;
const htmlRoutes = new Router;
const path = require('path');

htmlRoutes.get("/",(req, res) =>{
    res.sendFile(path.join(path.resolve(__dirname, '..') + "/public/home.html"));
});

htmlRoutes.get("/survey",(req, res) =>{
    res.sendFile(path.join(path.resolve(__dirname, '..') + "/public/survey.html"));
});

htmlRoutes.get("*",(req, res) =>{
    res.sendFile(path.join(path.resolve(__dirname, '..') + "/public/home.html"));
});

module.exports = htmlRoutes;