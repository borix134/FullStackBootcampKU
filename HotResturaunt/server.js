var express = require("express");
var path = require("path");

var waitingList = [];
var tables = [];

var app = express();

var PORT = process.env.PORT || 3000; // Be Heroku friendly

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "Main.html"));
});

app.get("/Main.html", function(req, res) {
    res.sendFile(path.join(__dirname, "Main.html"));
});

app.get("/viewTables.html", function(req, res) {
    res.sendFile(path.join(__dirname, "viewTables.html"));
});

app.get("/reservation.html", function(req, res) {
    res.sendFile(path.join(__dirname, "reservation.html"));
});
  
app.get("/waitingList", function(req, res) {
    res.json(waitingList);
});
  
app.get("/tables", function(req, res) {
    return res.json(tables);
});

app.post("/waitingList", function(req, res) {
    if (tables.length < 5){
        tables.push(req.body);
        res.send("You have been added to table " + String(tables.length));
    }else{
        var newWaiter = req.body;
        waitingList.push(newWaiter);
        res.send("You have been added to the waiting list!");
    }
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});