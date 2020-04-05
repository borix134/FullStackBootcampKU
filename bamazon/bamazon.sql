DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
    item_id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(22) NOT NULL,
    department_name VARCHAR(22) NOT NULL,
    price float NOT NULL,
    stock_quantity INT NOT NULL,
    PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ounce of Beef Jerky","Food",9.99,20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Angry Birds T-shirt","Clothing",14.99,3);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Case of Beer","Beverages",9.99,20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bag of coffee grounds","Beverages",8.99,10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("MacBook Pro","Trash",9999.99,5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("IdeaPad 320","Laptops",399.99,5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Frozen Pizza","Food",1.99,15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mtn Dew 12 pack","Beverages",9.99,100);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pair of slacks","clothing",19.99,20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Latitude 7480","Laptops",999.99,10);