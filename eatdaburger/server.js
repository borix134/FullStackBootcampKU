var express = require("express");
var PORT = process.env.PORT || 8000;
var app = express();
const router = require("./router");
var handlebars = require("express-handlebars");

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", handlebars({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(router);

app.listen(PORT, function() {
  console.log("Listening on port:%s", PORT);
});
