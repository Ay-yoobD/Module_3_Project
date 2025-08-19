CREATE DATABASE IF NOT EXISTS fashion_store;

USE fashion_store;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    surname VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);



-- products table (home page for now, will use the same table for shop)
CREATE TABLE IF NOT EXISTS products (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    price DECIMAL(10, 2) NOT NULL,
    image VARCHAR(255),
    category VARCHAR(100),
    is_featured BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Updating products with new coloumns:
ALTER TABLE `fashion_store`.`products` 
ADD COLUMN `gender` VARCHAR(6) NULL AFTER `created_at`,
ADD COLUMN `style` VARCHAR(50) NULL AFTER `gender`;





-- products table (5 per category)

INSERT INTO products (title, description, price, image, category, is_featured)
VALUES 
-- Tops
('Classic Denim Jacket', 'Stylish blue denim jacket with modern fit.', 899.99, '/assets/logo.png', 'Tops', TRUE),
('Streetwear Hoodie', 'Comfy and trendy hoodie for daily wear.', 499.99, '/assets/logo.png', 'Tops', TRUE),
('Cropped Tank Top', 'Minimalist white tank for layering.', 299.99, '/assets/logo.png', 'Tops', FALSE),
('Oversized Flannel Shirt', 'Casual flannel shirt for that cozy look.', 699.99, '/assets/logo.png', 'Tops', TRUE),
('Graphic Tee', 'Bold printed tee for streetwear lovers.', 399.99, '/assets/logo.png', 'Tops', FALSE),

-- Bottoms
('Cargo Pants', 'Utility-style pants with multiple pockets.', 799.99, '/assets/logo.png', 'Bottoms', TRUE),
('Distressed Jeans', 'Ripped jeans with a modern fit.', 699.99, '/assets/logo.png', 'Bottoms', FALSE),
('High-Waisted Skirt', 'Chic skirt for elevated casual wear.', 599.99, '/assets/logo.png', 'Bottoms', FALSE),
('Joggers', 'Athleisure joggers for style and comfort.', 499.99, '/assets/logo.png', 'Bottoms', TRUE),
('Leather Trousers', 'Edgy faux leather pants.', 1099.99, '/assets/logo.png', 'Bottoms', FALSE),

-- Sneakers
('Retro Sneakers', 'Classic sneakers reimagined with retro vibes.', 1199.99, '/assets/logo.png', 'Sneakers', TRUE),
('Chunky Sneakers', 'Bold street-style shoes with comfort.', 1399.99, '/assets/logo.png', 'Sneakers', TRUE),
('Running Shoes', 'Lightweight and breathable runners.', 999.99, '/assets/logo.png', 'Sneakers', FALSE),
('Canvas High-Tops', 'Classic canvas kicks that go with anything.', 799.99, '/assets/logo.png', 'Sneakers', FALSE),
('Slip-On Trainers', 'Easy-wear slip-ons for daily errands.', 749.99, '/assets/logo.png', 'Sneakers', FALSE),

-- Accessories
('Rolex Watch', 'Go bling-bling with your ching-ching', 10199.99, '/assets/logo.png', 'Accessories', FALSE),
('Leather Belt', 'High-quality belt to complete the fit.', 399.99, '/assets/logo.png', 'Accessories', FALSE),
('Chain Necklace', 'Iced out chain with subtle shine.', 1299.99, '/assets/logo.png', 'Accessories', TRUE),
('Bucket Hat', 'Retro-style hat for sunny days.', 349.99, '/assets/logo.png', 'Accessories', FALSE),
('Crossbody Bag', 'Minimal sling bag for on-the-go.', 699.99, '/assets/logo.png', 'Accessories', TRUE);

-- update image urls

-- Update Tops category images
UPDATE products SET image = 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' WHERE id = 1; -- Denim Jacket
UPDATE products SET image = 'https://images.unsplash.com/photo-1620799140408-edc6dcb6d633?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' WHERE id = 2; -- Hoodie
UPDATE products SET image = 'https://images.unsplash.com/photo-1576566588028-4147f3842f27?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' WHERE id = 3; -- Tank Top
UPDATE products SET image = 'https://images.unsplash.com/photo-1527719327859-c6ce80353573?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' WHERE id = 4; -- Flannel Shirt
UPDATE products SET image = 'https://images.unsplash.com/photo-1529374255404-311a2a4f1fd9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' WHERE id = 5; -- Graphic Tee

-- Update Bottoms category images
UPDATE products SET image = 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' WHERE id = 6; -- Cargo Pants
UPDATE products SET image = 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' WHERE id = 7; -- Distressed Jeans
UPDATE products SET image = 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' WHERE id = 8; -- High-Waisted Skirt
UPDATE products SET image = 'https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' WHERE id = 9; -- Joggers
UPDATE products SET image = 'https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' WHERE id = 10; -- Leather Trousers

-- Update Sneakers category images
UPDATE products SET image = 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' WHERE id = 11; -- Retro Sneakers
UPDATE products SET image = 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' WHERE id = 12; -- Chunky Sneakers
UPDATE products SET image = 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' WHERE id = 13; -- Running Shoes
UPDATE products SET image = 'https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' WHERE id = 14; -- Canvas High-Tops
UPDATE products SET image = 'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' WHERE id = 15; -- Slip-On Trainers

-- Update Accessories category images
UPDATE products SET image = 'https://images.unsplash.com/photo-1523170335258-f5ed11844a49?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' WHERE id = 16; -- Rolex Watch
UPDATE products SET image = 'https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' WHERE id = 17; -- Leather Belt
UPDATE products SET image = 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' WHERE id = 18; -- Chain Necklace
UPDATE products SET image = 'https://images.unsplash.com/photo-1534215754734-18e55d13e346?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' WHERE id = 19; -- Bucket Hat
UPDATE products SET image = 'https://images.unsplash.com/photo-1590874103328-eac38a683ce7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80' WHERE id = 20; -- Crossbody Bag

-- Updating New Product catergories:
UPDATE `fashion_store`.`products` SET `gender` = 'Female', `style` = 'Sporty' WHERE (`id` = '13');
UPDATE `fashion_store`.`products` SET `gender` = 'Male', `style` = 'Casual' WHERE (`id` = '14');
UPDATE `fashion_store`.`products` SET `gender` = 'Female', `style` = 'Casual' WHERE (`id` = '15');
UPDATE `fashion_store`.`products` SET `gender` = 'Female', `style` = 'Sporty' WHERE (`id` = '9');
UPDATE `fashion_store`.`products` SET `gender` = 'Female', `style` = 'Casual' WHERE (`id` = '1');
UPDATE `fashion_store`.`products` SET `gender` = 'Male', `style` = 'Casual' WHERE (`id` = '2');
UPDATE `fashion_store`.`products` SET `gender` = 'Male', `style` = 'Casual' WHERE (`id` = '3');
UPDATE `fashion_store`.`products` SET `gender` = 'Male', `style` = 'Casual' WHERE (`id` = '4');
UPDATE `fashion_store`.`products` SET `gender` = 'Male', `style` = 'Casual' WHERE (`id` = '5');
UPDATE `fashion_store`.`products` SET `gender` = 'Female', `style` = 'Casual' WHERE (`id` = '6');
UPDATE `fashion_store`.`products` SET `gender` = 'Female', `style` = 'Casual' WHERE (`id` = '7');
UPDATE `fashion_store`.`products` SET `gender` = 'Female', `style` = 'Casual' WHERE (`id` = '8');
UPDATE `fashion_store`.`products` SET `gender` = 'Female', `style` = 'Formal-Casual' WHERE (`id` = '10');
UPDATE `fashion_store`.`products` SET `gender` = 'Male', `style` = 'Casual' WHERE (`id` = '11');
UPDATE `fashion_store`.`products` SET `gender` = 'Male', `style` = 'Casual' WHERE (`id` = '12');
UPDATE `fashion_store`.`products` SET `gender` = 'Male', `style` = 'Formal' WHERE (`id` = '16');
UPDATE `fashion_store`.`products` SET `gender` = 'Male', `style` = 'Formal-Casual' WHERE (`id` = '17');
UPDATE `fashion_store`.`products` SET `gender` = 'Male', `style` = 'Casual' WHERE (`id` = '18');
UPDATE `fashion_store`.`products` SET `gender` = 'Female', `style` = 'Casual' WHERE (`id` = '19');
UPDATE `fashion_store`.`products` SET `gender` = 'Female', `style` = 'Casual' WHERE (`id` = '20');

-- Altering coloumn Gender to Type

ALTER TABLE `fashion_store`.`products` 
CHANGE COLUMN `gender` `type` VARCHAR(6) NULL DEFAULT NULL ;
