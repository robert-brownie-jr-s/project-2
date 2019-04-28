DROP DATABASE IF EXISTS betty_db;
CREATE DATABASE betty_db;

USE betty_db;

CREATE TABLE accountInfo (
  id INT NOT NULL AUTO_INCREMENT,
  idCode VARCHAR(20) NOT NULL,
  coins INT NOT NULL,
  balance DECIMAL(10,2) NOT NULL,
  PRIMARY KEY (id)
);



INSERT INTO accountInfo (coins)
VALUES (0);

-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("chocolate", 3.10, 120);

-- INSERT INTO products (flavor, price, quantity)
-- VALUES ("strawberry", 3.25, 75);
