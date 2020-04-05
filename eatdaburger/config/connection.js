var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "ec2-3-231-46-238.compute-1.amazonaws.com  ",
  port: 5432,
  user: "xreukoeclwyndt",
  password: "3fb772ab103afdd607b23389a7f5549e60819b01686368648156771fb3e6b75f",
  database: "d78s4m0l2akqcd"
});

connection.connect((err) => {
  if (err) throw err;
});

module.exports = connection;
