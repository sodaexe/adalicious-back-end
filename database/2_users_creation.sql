CREATE TABLE users (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  firstname VARCHAR(255) NOT NULL,
  created_at DATETIME NOT NULL DEFAULT(NOW()),
  updated_at DATETIME NULL
);

INSERT INTO users (firstname) VALUES
('Monica'),
('Phoebe'),
('Rachel');