const mysql = require("mysql");
const inquirer = require("inquirer");
var connection;
let createConnection = () =>{
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: "password",
        database: "bamazon"
    });
}
let displayItems = () => {
    createConnection();
    connection.connect((err) => {if (err) throw err});

    connection.query("SELECT * FROM products;",(err,res)=>{
        if (err) throw err;

        for (var i = 0; i < res.length; i++){
            console.log(
            `Product: ${res[i].product_name}
Price: ${res[i].price}
Stock Quantity: ${res[i].stock_quantity}
Product ID: ${res[i].item_id}`);
        }
        makePurchase();
    });
    connection.end();
}
let makePurchase = () => {
    inquirer.prompt([
        {
            name: "purchaseID",
            type: "input",
            message: "Enter the ID of the product you would like to purchase: ",
            validate: (value) => {
                if (isNaN(value)) 
                    return false;
                return true;
            }
        },
        {
            name: "quantity",
            type: "input",
            message: "Please enter the quantity that you would like to purchase: ",
            validate: (value) => {
                if (isNaN(value)) 
                    return false;
                return true;
            }
        }
    ]).then((answer) => {
        createConnection();
        connection.connect((err) => {if (err) throw err})
        answer.purchaseID = parseInt(answer.purchaseID);
        answer.quantity = parseInt(answer.quantity);
        connection.query("SELECT * FROM products WHERE item_id="+answer.purchaseID,(err,res)=>{
            if (err) throw err;

            if (res.length === 0){
                console.log("That item is not in the listing.")
            }else{
                if (answer.quantity <= res[0].stock_quantity){
                    newQ = res[0].stock_quantity - answer.quantity;
                    console.log(`Total cost was: ${res[0].price * answer.quantity}`);
                    connection.query("UPDATE products SET stock_quantity="+newQ+" WHERE item_id="+answer.purchaseID,
                    ()=>{connection.end()});
                }else{
                    console.log("Insufficient quantity!");
                    connection.end();
                }
            }
        });
    });
}

displayItems();