const router = require("express").Router();
const burger = require("./models/burger");

router.get("/",(req, res) => {
    res.render("index");
});

router.post("/api/burger", (req, res) => {
    burger.create(req.body.name, false)
});

router.get("/api/burger", (req, res) => {
    res.json(burger.all());
    console.log(burger.all());
});

module.exports = router;
