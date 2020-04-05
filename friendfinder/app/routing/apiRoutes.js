const Router = require("express").Router;
const apiRoutes = new Router;
var friends = require("../data/friends")

apiRoutes.post("/friends",(req, res) => {
    console.log(req.body);
    var difference;
    var match;
    for (var i = 0; i < friends.length; i++){
        var differenceTemp = 
        Math.abs(parseInt(friends[i].pinapple) - parseInt(req.body.pinapple)) +
        Math.abs(parseInt(friends[i].videogames) - parseInt(req.body.videogames)) +
        Math.abs(parseInt(friends[i].alcohol) - parseInt(req.body.alcohol)) +
        Math.abs(parseInt(friends[i].music) - parseInt(req.body.music)) +
        Math.abs(parseInt(friends[i].church) - parseInt(req.body.church)) +
        Math.abs(parseInt(friends[i].dog) - parseInt(req.body.dog)) +
        Math.abs(parseInt(friends[i].sports) - parseInt(req.body.sports)) +
        Math.abs(parseInt(friends[i].coding) - parseInt(req.body.coding)) +
        Math.abs(parseInt(friends[i].extrovert) - parseInt(req.body.extrovert)) +
        Math.abs(parseInt(friends[i].netflix) - parseInt(req.body.netflix))
        if (i==0){
            differenceTemp = difference;
            match = friends[i]
        }else if(differenceTemp < difference){
            difference = differenceTemp;
            match = friends[i]
        }
    }
    friends.push(req.body);
    res.json(match);
});

module.exports = apiRoutes;