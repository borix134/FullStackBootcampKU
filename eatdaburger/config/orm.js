const con = require("./connection")

const orm = {
    selectAll: () => {
        con.query("SELECT * FROM burgers;", (err, res) => {
            if (err)
                throw err;
        });
    },
    insertOne: (burger_name, devoured) => {
        if (err) throw err;
        con.query(`INSERT INTO burgers (burger_name, devoured) VALUES (${burger_name}, ${devoured});`, (err, res) => {
            if (err)
                throw err;
            data = res;
        });
    },
    updateOne: (id, devoured) => {
        if (err) throw err;
        con.query(`UPDATE burger SET devoured ${devoured};`, (err, res) => {
            if (err)
                throw err;
        });
    }
}

module.exports = orm;
