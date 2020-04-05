const express = require('express');
const app = express();
var PORT = process.env.PORT || 8080;
const Router = require("express").Router;
const apiRoutes = require("./app/routing/apiRoutes");
const htmlRoutes = require("./app/routing/htmlRoutes.js");
const routes = new Router;

routes.use("/api",apiRoutes);
routes.use("/",htmlRoutes);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.listen(PORT, () => console.log(`Listening on port ${PORT}`))