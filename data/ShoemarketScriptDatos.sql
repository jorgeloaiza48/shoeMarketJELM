-- --------------------------------------------------------
-- Host:                         cxmgkzhk95kfgbq4.cbetxkdyhwsb.us-east-1.rds.amazonaws.com
-- Versión del servidor:         10.4.24-MariaDB-log - Source distribution
-- SO del servidor:              Linux
-- HeidiSQL Versión:             12.0.0.6468
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Volcando estructura de base de datos para rnj9ky0w22h0cycz
CREATE DATABASE IF NOT EXISTS `rnj9ky0w22h0cycz` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci */;
USE `rnj9ky0w22h0cycz`;

-- Volcando estructura para tabla rnj9ky0w22h0cycz.categories
CREATE TABLE IF NOT EXISTS `categories` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla rnj9ky0w22h0cycz.categories: ~3 rows (aproximadamente)
INSERT INTO `categories` (`id`, `name`, `created_at`, `updated_at`) VALUES
	(1, 'Borcegos', NULL, NULL),
	(2, 'Bucaneras', NULL, NULL),
	(3, 'Guillerminas', NULL, NULL),
	(4, 'Botas', NULL, NULL),
	(5, 'Gift-Card', NULL, NULL),
	(6, 'Texanas', NULL, NULL);

-- Volcando estructura para tabla rnj9ky0w22h0cycz.orders
CREATE TABLE IF NOT EXISTS `orders` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `total` decimal(10,2) NOT NULL,
  `status` varchar(45) NOT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `payment_type_id` int(11) NOT NULL,
  `user_id` int(10) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_orders_paymentTypes1_idx` (`payment_type_id`),
  KEY `fk_orders_users1_idx` (`user_id`),
  CONSTRAINT `fk_orders_paymentTypes1` FOREIGN KEY (`payment_type_id`) REFERENCES `payment_types` (`id`),
  CONSTRAINT `fk_orders_users1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla rnj9ky0w22h0cycz.orders: ~1 rows (aproximadamente)
INSERT INTO `orders` (`id`, `total`, `status`, `updated_at`, `created_at`, `payment_type_id`, `user_id`) VALUES
	(2, 15000.00, 'Finalizado', NULL, NULL, 3, 4);

-- Volcando estructura para tabla rnj9ky0w22h0cycz.payment_types
CREATE TABLE IF NOT EXISTS `payment_types` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `payment_type` varchar(45) NOT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla rnj9ky0w22h0cycz.payment_types: ~4 rows (aproximadamente)
INSERT INTO `payment_types` (`id`, `payment_type`, `updated_at`, `created_at`) VALUES
	(1, 'Tarjeta de Credito', NULL, NULL),
	(2, 'Efectivo', NULL, NULL),
	(3, 'Tarjeta de Debito', NULL, NULL),
	(4, 'Mercado Pago', NULL, NULL),
	(5, 'Transferencia Bancaria', NULL, NULL);

-- Volcando estructura para tabla rnj9ky0w22h0cycz.products
CREATE TABLE IF NOT EXISTS `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `description` varchar(400) NOT NULL,
  `category_id` int(11) NOT NULL,
  `price` decimal(10,2) unsigned NOT NULL,
  `color` varchar(45) NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  `status` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_products_category1_idx` (`category_id`),
  CONSTRAINT `fk_products_category1` FOREIGN KEY (`category_id`) REFERENCES `categories` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla rnj9ky0w22h0cycz.products: ~2 rows (aproximadamente)
INSERT INTO `products` (`id`, `name`, `description`, `category_id`, `price`, `color`, `created_at`, `updated_at`, `image`, `status`) VALUES
	(1, 'Lara Negro', 'Borcego Lara Negro de cuero vacuno con una altura de base y de taco de 6 cm y una altura de caña de 13cm ', 1, 10490.00, 'Negro', NULL, '2022-07-12 15:35:47', 'img-1657639097804.jpeg', 'Enabled'),
	(2, 'Lara Blanco', 'Borcego Lara Blanco de cuero vacuno con una altura de base y de taco de 6 cm y una altura de caña de 13cm  ', 1, 10490.00, 'Blanco', '2022-07-12 13:27:22', '2022-07-12 15:35:36', 'img-1657632440350.jpeg', 'Enabled'),
	(4, 'London Negro', ' Borcego London Negro de cuero vacuno con una altura de base y de taco de 6 cm y una altura de caña de 20cm ', 1, 10990.00, 'Negro', '2022-07-12 15:29:52', '2022-07-12 15:30:26', 'img-1657639790746.jpeg', 'Enabled'),
	(5, 'Maddy Negro', 'Guillermina Maddy Negro de razo con una altura de base de 5,5cm y de taco de 13 cm ', 3, 13990.00, 'Negro', '2022-07-12 15:31:37', '2022-07-12 15:34:24', 'img-1657639895911.jpeg', 'Enabled'),
	(6, 'Maddy Rojo', 'Guillermina Maddy Rojo de razo con una altura de base de 5,5cm y de taco de 13 cm ', 3, 13990.00, 'Rojo', '2022-07-12 15:32:05', '2022-07-12 15:34:34', 'img-1657639924216.jpeg', 'Enabled'),
	(7, 'Maddy Crema', 'Guillermina Maddy Crema de razo con una altura de base de 5,5cm y de taco de 13 cm ', 3, 13990.00, 'Crema', '2022-07-12 15:32:32', '2022-07-12 15:34:42', 'img-1657639950607.jpeg', 'Enabled'),
	(8, 'Rianne Negro', 'Bucanera Rianne Negro de cuero vacuno con una altura de base de 5,5 cm y 13cm de taco y una altura de caña de 39cm ', 2, 18900.00, 'Negro', '2022-07-12 15:34:15', '2022-07-12 15:34:15', 'img-1657640053784.jpeg', 'Enabled'),
	(9, 'Sasha Negro', 'Bota Sasha Negro de cuero sintetico con 8 cm de taco y 40 cm de caña. ', 4, 12490.00, 'Negro', '2022-07-12 15:36:49', '2022-07-12 15:36:59', 'img-1657640207883.jpeg', 'Enabled'),
	(10, 'Sasha Rosa', '  Bota Sasha Rosa de cuero sintetico con 8 cm de taco y 40 cm de caña.  ', 4, 12490.00, 'Rosa', '2022-07-12 15:37:24', '2022-07-12 18:23:24', 'img-1657640243458.jpeg', 'Enabled'),
	(11, 'Sasha Crema', 'Bota Sasha Crema de cuero sintetico con 8 cm de taco y 40 cm de caña.', 4, 12490.00, 'Crema', '2022-07-12 15:38:01', '2022-07-12 15:38:01', 'img-1657640279740.jpeg', 'Enabled'),
	(12, 'Tiziana Negro', 'Bucanera Tiziana Negro de cuero vacuno con 5.5 cm de base, 13 cm de taco y 39 cm de altura de caña.', 2, 24990.00, 'Negro', '2022-07-12 15:39:10', '2022-07-12 15:39:10', 'img-1657640349088.jpeg', 'Enabled'),
	(13, 'Bella Negro', 'Bota Bella Negro de cuero Vacuno con 5,5 cm de base, 13 cm de taco y 25 cm de caña.', 4, 16990.00, 'Negro', '2022-07-12 16:37:26', '2022-07-12 16:37:26', 'img-1657643845106.jpeg', 'Enabled'),
	(14, 'Hard Negro', 'Borcego Hard Negro de cuero vacuno con una altura de base y de taco de 6 cm y una altura de caña de 50cm ', 4, 14990.00, 'Negro', '2022-07-12 16:38:31', '2022-07-12 16:38:31', 'img-1657643909657.jpeg', 'Enabled'),
	(15, 'Rock Negro', ' Borcego Rock Negro de cuero vacuno con una altura de base y de taco de 6 cm y una altura de caña de 15cm  ', 1, 1990.00, 'Negro', '2022-07-12 16:39:25', '2022-07-12 16:40:06', 'img-1657643963591.jpeg', 'Enabled'),
	(16, 'Rock Blanco', 'Borcego Rock Blanco de cuero vacuno con una altura de base y de taco de 6 cm y una altura de caña de 15cm  ', 1, 11990.00, 'Blanco', '2022-07-12 16:40:35', '2022-07-12 16:40:35', 'img-1657644033915.jpeg', 'Enabled'),
	(17, 'Hailey Negro', 'Texanas Hailey Negro de cuero vacuno con 6 cm de taco y 35 cm de caña', 6, 13990.00, 'Negro', '2022-07-12 16:41:30', '2022-07-12 16:41:30', 'img-1657644089106.jpeg', 'Enabled'),
	(18, 'Gift-Card 5000', 'Gift-Card válida para utilizar en cualquier producto de nuestra tienda.', 5, 5000.00, '', '2022-07-12 16:43:36', '2022-07-12 16:43:36', 'img-1657644215203.jpg', 'Enabled'),
	(19, 'Gift-Card 7000', 'Gift-Card válida para utilizar en cualquier producto de nuestra tienda.', 5, 7000.00, '', '2022-07-12 16:44:08', '2022-07-12 16:44:08', 'img-1657644246713.jpg', 'Enabled'),
	(20, 'Gift-Card 8000', 'Gift-Card válida para utilizar en cualquier producto de nuestra tienda.', 5, 8000.00, '', '2022-07-12 16:44:40', '2022-07-12 16:44:40', 'img-1657644278948.jpg', 'Enabled'),
	(21, 'Gift-Card 9000', 'Gift-Card válida para utilizar en cualquier producto de nuestra tienda.', 5, 9000.00, '', '2022-07-12 16:45:04', '2022-07-12 16:45:04', 'img-1657644303232.jpg', 'Enabled'),
	(22, 'Gift-Card 10000', 'Gift-Card válida para utilizar en cualquier producto de nuestra tienda.', 5, 10000.00, '', '2022-07-12 16:45:25', '2022-07-12 16:45:25', 'img-1657644324862.jpg', 'Enabled');

-- Volcando estructura para tabla rnj9ky0w22h0cycz.products_orders
CREATE TABLE IF NOT EXISTS `products_orders` (
  `product_id` int(11) NOT NULL,
  `order_id` int(11) NOT NULL,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_products_has_orders_orders1_idx` (`order_id`),
  KEY `fk_products_has_orders_products1_idx` (`product_id`),
  CONSTRAINT `fk_products_has_orders_orders` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `fk_products_has_orders_products` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla rnj9ky0w22h0cycz.products_orders: ~0 rows (aproximadamente)
INSERT INTO `products_orders` (`product_id`, `order_id`, `id`, `created_at`, `updated_at`) VALUES
	(5, 2, 3, NULL, NULL);

-- Volcando estructura para tabla rnj9ky0w22h0cycz.roles
CREATE TABLE IF NOT EXISTS `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla rnj9ky0w22h0cycz.roles: ~0 rows (aproximadamente)
INSERT INTO `roles` (`id`, `name`, `updated_at`, `created_at`) VALUES
	(1, 'Admin', NULL, NULL),
	(2, 'Cliente', NULL, NULL),
	(3, 'Vendedor', NULL, NULL);

-- Volcando estructura para tabla rnj9ky0w22h0cycz.users
CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `document` int(10) unsigned NOT NULL,
  `first_name` varchar(45) NOT NULL,
  `last_name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(100) NOT NULL,
  `date_of_birth` date NOT NULL,
  `image` varchar(45) NOT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `rol_id` int(11) NOT NULL,
  `adress` varchar(45) NOT NULL,
  `status` varchar(45) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_users_roles1_idx` (`rol_id`),
  CONSTRAINT `fk_users_roles1` FOREIGN KEY (`rol_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;

-- Volcando datos para la tabla rnj9ky0w22h0cycz.users: ~0 rows (aproximadamente)
INSERT INTO `users` (`id`, `document`, `first_name`, `last_name`, `email`, `password`, `date_of_birth`, `image`, `updated_at`, `created_at`, `rol_id`, `adress`, `status`) VALUES
	(3, 1234567, 'Joel nicolas', 'Marquez', 'joeecasa@gmail.com', '$2a$10$vwNMmo6xeATlcoY992r.CeutISYO6uelUkQyfEO0SbNDzMAjN0CaG', '1993-04-28', 'photoJoel nicolas-1657633189182.jpg', '2022-07-12 13:39:50', '2022-07-12 13:39:50', 1, 'la crujia 3790', 'Activo'),
	(4, 1234568, 'Jorge Loaiza', 'Archivaldo', 'jelm48@misena.edu.co', '$2a$10$DCZuFwhnojCD0xDBSYK6yua2peyrj2UBd9ceWhot.Y4TEy2rI3WgO', '2022-07-20', 'photo-1657653654261.jpg', '2022-07-12 19:20:54', '2022-07-12 15:08:52', 1, 'calle 100', 'Activo'),
	(5, 1234569, 'Armando Casas', 'De bareque y ladrillos', 'armando@gmail.com', '$2a$10$S.7Dc4ccsrgRZ7V64oIQGODT6MhIAhKi4474GKBWKLg0Mu3qWh6F6', '2022-07-14', 'photoArmando Casas-1657653741402.png', '2022-07-12 19:22:22', '2022-07-12 19:22:22', 2, 'calle 100', 'Activo'),
	(6, 123456, 'Ernesto El frailejon', 'Perez', 'ernesto.p@gmail.com', '$2a$10$mtaqQZm/KOu202wDY9jHb.29b5nB4kCiSbW3Dx9Duc1vcl7.6eKku', '2022-07-07', 'photo-1657669319017.jpg', '2022-07-12 23:41:59', '2022-07-12 19:27:34', 1, 'calle falsa 123', 'Activo'),
	(7, 123456711, 'Jorge Loaiza', 'Loaiza', 'jelm48@hotmail.com', '$2a$10$JD8ivmwM3EYIHV/TnWEQqOHkD0lKVR0HuGyFraLrZof6DpcBjw50O', '2022-07-09', 'photoJorge Loaiza-1657661821243.png', '2022-07-12 21:37:01', '2022-07-12 21:37:01', 2, 'calle 100', 'Activo'),
	(8, 123456735, 'Alan Brito', 'Entes malos', 'jelm48@gmail.com', '$2a$10$QPPyhmkmRzxd7.js89ad2ey6ZrgseAyz1RE6bhTiYrzYnfC3shsDu', '2022-07-28', 'photoAlan Brito-1657662721605.png', '2022-07-12 21:52:02', '2022-07-12 21:52:02', 2, 'Calle 8', 'Activo');

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
