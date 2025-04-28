CREATE TABLE plates (
  id INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
  plate VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  image VARCHAR(1) NOT NULL
);

INSERT INTO plates (plate, description, image) VALUES
('Hello World Burger', 'Un cheeseburger classique (pain, steak, fromage, salade, sauce).', '🍔'),
('404 Not Found Fries', 'Des frites maison avec une sauce mystère (choisie aléatoirement par le backend !).', '🍟'),
('JSON Nuggets', 'Nuggets de poulet avec 3 sauces au choix (ketchup, mayo, barbecue).', '🍗'),
('Git Pull Tacos', 'Un taco simple avec poulet, salade, fromage et sauce.', '🌮'),
('Front-end Salad', 'Une salade légère avec tomates, feta et vinaigrette maison.', '🥗'),
('Back-End Brownie', 'Un brownie moelleux au chocolat.', '🍫'),
('Full Stack Menu', 'Un combo burger, frites et boisson.', '🥗');