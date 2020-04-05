var axios = require("axios");
var cheerio = require("cheerio");
var express = require("express");
var exphbs = require("express-handlebars");
var Comment = require("./Comment");
var Article = require("./Article");
var mongoose = require("mongoose");

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";
mongoose.connect(MONGODB_URI);

var PORT = process.env.PORT || 8080;
var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get('/', async (req, res) => {
    axios.get("https://www.nytimes.com/").then((response) => {
        var $ = cheerio.load(response.data);
        $("article").each((i, element) => {
            var newArticle = {};
            var title = $(element).find("h2").text();
            if (title.replace(" ","").replace("\n","")===""){
                return 0;
            }
            var link = $(element).find("a").attr("href");
            var summary = $(element).find("p").text();
            if (summary.replace(" ","").replace("\n","")===""){
                summary = $(element).find("ul").text(); 
            }
            if (summary.replace(" ","").replace("\n","")===""){
                return 0;
            }
            Article.findOne({title: "asdf"},(err, data) => {
                if (err) throw err;
                if (data === null){
                    Article.create({Headline: title, Summary: summary, Url: "https://www.nytimes.com" + link})
                }
            })
        });
    });
    var hbsData;
    await Article.find({}, {},{sort: {'createdAt': -1}, limit: 15}, (err, data) => {
        if (err) throw err;
        hbsData = data;
    })
    res.render("index", {articles: hbsData});
});

app.get("/comment/:id", (req, res) => {
    var comments = [];
    Article.findOne({_id: req.params.id}, (err, data) => {
        console.log(data)
        for (var i = 0; i < data.Comments.length; i++){
            comments.push(data[i].ref);
        }
    })
    const postRoute = "/comment/"+req.params.id;
    res.render("comments",{comments: comments, postRoute: postRoute});
});

app.post("/comment/:id",(req, res) => {
    if (typeof req.body.username === 'string' && typeof req.body.text === 'string'){
        Comment.create({username: req.username, text: req.text}).then((newComment) => {
            Article.findOneAndUpdate({ _id: req.params.id }, {$push: {Comments: newComment._id}}, { new: true });
        }).catch((err) => {
            console.log(err);
        });
    }
    res.end();
});

app.get('*', (req, res) => {
    res.render("404");
});

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});