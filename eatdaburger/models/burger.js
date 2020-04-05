const orm = require("../config/orm.js");

const burger = {
    all: orm.selectAll,
    create: orm.insertOne,
    update: orm.updateOne
};

module.exports = burger;

