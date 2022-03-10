-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: mirrorlens
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.22-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `brands`
--

DROP TABLE IF EXISTS `brands`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `brands` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `brand` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `brands`
--

LOCK TABLES `brands` WRITE;
/*!40000 ALTER TABLE `brands` DISABLE KEYS */;
INSERT INTO `brands` VALUES (1,'OAKLEY'),(2,'RAY BAN'),(3,'VULK'),(4,'NYOL'),(5,'REEF'),(6,'RALPH'),(7,'RUSTY'),(8,'MOHS'),(9,'PROTOTYPE'),(10,'DETROIT');
/*!40000 ALTER TABLE `brands` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `gender`
--

DROP TABLE IF EXISTS `gender`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `gender` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `gender`
--

LOCK TABLES `gender` WRITE;
/*!40000 ALTER TABLE `gender` DISABLE KEYS */;
INSERT INTO `gender` VALUES (1,'Hombre'),(2,'Mujer'),(3,'Unisex');
/*!40000 ALTER TABLE `gender` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `image_products`
--

DROP TABLE IF EXISTS `image_products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `image_products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `image1` varchar(255) NOT NULL,
  `image2` varchar(255) DEFAULT NULL,
  `image3` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `image_products`
--

LOCK TABLES `image_products` WRITE;
/*!40000 ALTER TABLE `image_products` DISABLE KEYS */;
INSERT INTO `image_products` VALUES (1,'/images/productsimage/OAKLEY_9102_01_800x.jpg','/images/productsimage/OAKLEY_9102_01_2_800x.jpg','/images/productsimage/Medidas-Final_44b4698e-f740-45d5-b0ec-725ce4d9c426_800x.jpg'),(2,'/images/productsimage/RAY_BAN_2447_52_901_800x.jpg','/images/productsimage/RAY_BAN_2447_52_901_2_160x.jpg','/images/productsimage/RAY_BAN_2447_52_901_3_1800x1132.jpg'),(3,'/images/productsimage/VULKYESTERMBLKREVOROSE_800x.jpg','/images/productsimage/VULKYESTERMBLKREVOROSE_2_1800x1132.jpg','/images/productsimage/VULKYESTERMBLKREVOROSE_3_1800x1132.jpg'),(4,'/images/productsimage/NYOL190403S_800x.jpg','/images/productsimage/NYOL190403S_2_1800x1132.jpg','/images/productsimage/NYOL190403S_3_1800x1132.jpg'),(5,'/images/productsimage/REEF22402_800x.jpg','/images/productsimage/REEF22402_2_1800x1132.jpg','/images/productsimage/REEF22402_3_1800x1132.jpg'),(6,'/images/productsimage/VULKGEESSDEMI-B10POL_800x.jpg','/images/productsimage/VULKGEESSDEMI-B10POL_2_1800x1132.jpg','/images/productsimage/VULKGEESSDEMI-B10POL_3_1800x1132.jpg'),(7,'/images/productsimage/0RA5160__510_13_000A_1413x889.jpg','/images/productsimage/0RA5160__510_13_030A_1560x981.jpg','/images/productsimage/0RA5160__510_13_090A_1433x902.jpg'),(8,'/images/productsimage/RUSTY_MANIC_SBLK_REVO_BLUE_1800x1132.jpg','/images/productsimage/RUSTY_MANIC_SBLK_REVO_BLUE_2_1800x1132.jpg','/images/productsimage/Medidas-Final_44b4698e-f740-45d5-b0ec-725ce4d9c426_800x.jpg'),(10,'/images/productsimage/user-1646776177302.jpg','/images/productsimage/user-1646776177308.jpg','/images/productsimage/user-1646776177311.jpg'),(11,'/images/productsimage/user-1646776413342.jpg','/images/productsimage/user-1646776413345.jpg','/images/productsimage/user-1646776413349.jpg'),(12,'/images/productsimage/user-1646776564466.jpg','/images/productsimage/user-1646776564468.jpg','/images/productsimage/user-1646776564470.jpg'),(13,'/images/productsimage/user-1646776754139.jpg','/images/productsimage/user-1646776754141.jpg','/images/productsimage/user-1646776754143.jpg'),(14,'/images/productsimage/user-1646777066613.jpg','/images/productsimage/user-1646777066613.jpg','/images/productsimage/user-1646777066615.jpg');
/*!40000 ALTER TABLE `image_products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `price` decimal(10,0) NOT NULL,
  `description` longtext NOT NULL,
  `border_color` varchar(255) DEFAULT NULL,
  `glass_color` varchar(255) DEFAULT NULL,
  `model` varchar(255) NOT NULL,
  `image_id` int(10) unsigned DEFAULT NULL,
  `brand_id` int(10) unsigned DEFAULT NULL,
  `gender_id` int(10) unsigned DEFAULT NULL,
  `type_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `image_fk_idx` (`image_id`),
  KEY `brand_fk_idx` (`brand_id`),
  KEY `gender_fk_idx` (`gender_id`),
  KEY `type_fk_idx` (`type_id`),
  CONSTRAINT `brand_fk` FOREIGN KEY (`brand_id`) REFERENCES `brands` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `gender_fk` FOREIGN KEY (`gender_id`) REFERENCES `gender` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `image_fk` FOREIGN KEY (`image_id`) REFERENCES `image_products` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `type_fk` FOREIGN KEY (`type_id`) REFERENCES `type` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'OAKLEY HOLBROOK 01',12530,'Material: Plastico, Medidas: 55-18-137, Aro Completo, Peso: 27 gramos','Negro','Gris','HOLBROOK ',1,1,3,1),(2,'RAY BAN ROUND 901',18860,'Material: Plastico, Medidas: 49-21-145, Aro Completo, Peso: 30 gramos','Negro','G15','ROUND 901',2,2,3,1),(3,'VULK YESTER MBLK REVO ROSE',7310,'Material: TR90, Medidas: 53-19-140, Tipo: Aro Completo, Peso: 28 gramos','Negro mate','Espejado Rosa','MBLK REVO ROSE',3,3,3,1),(4,'NYOL 1904 03 SPOL',5500,'Material: Metal, Medidas: 50-17-145, Tipo: Aro Completo, Peso: 28 gramos','Negro mate','Gris polarizadas','NYOL',4,4,3,1),(5,'REEF 224 02',9110,'Material: TR90 y Metal, Medidas: 54-17-134, Tipo: Aro Completo, Peso: 28 gramos','Gris mate','Gris polarizadas','224 02',5,5,3,1),(6,'VULK GEES SDEMI B10 POL',6990,'Material: TR90, Medidas: 58-16-125, Tipo: Aro Completo, Peso: 28 gramos','Tortoise','Marron','GEES SDEMI B10 POL',6,3,3,1),(7,'RALPH 5160 510 13',12650,'Material: Plastico, Medidas: 57-17-135, Tipo: Aro Completo, Peso: 30 gramos','Tortoise','Marron','5160 510 13',7,6,2,1),(8,'RUSTY MANIC SBLK R.BLUE',6630,'Material: Plastico, Medidas: 50-14-140, Tipo: Aro Completo, Peso: 28 gramos','Negro','Espejado Azul','MANIC SBLK R.BLUE',8,7,3,1),(10,'Mohs Worldwide ',10425,'Material: Acetato, Medidas: 50-17-135, Aro Completo, Peso: 27 gramos','Negro','Polarizado','Worldwide',10,8,3,1),(11,'Prototype EWAN/C5',7550,'Material: Metal, Estilo: Aviador Cuadrado, Aro Completo, Peso: 30 gramos','Cobre','Marrón','EWAN/C5',11,9,1,1),(12,'Prototype DAVID/05POL',11325,'Material: Plastico y Metal, Estilo: Cuadrado, Aro Completo, Peso: 30 gramos','Carey translucido','Verde oscuro','DAVID/05POL',12,9,3,1),(13,'Detroit OUSADA/415',5050,'Material: Acetato, Estilo: Cat eye, Aro Completo, Peso: 30 gramos','Negro con detalles transparentes','Verde oscuro degrades','OUSADA/415',13,10,2,1),(14,'Detroit DIAMANTE/117',5050,'Material: Acetato, Estilo: Cat eye, Aro Completo, Peso: 27 gramos','Negro y patillas transparentes','Verde oscuro','DIAMANTE/117',14,10,2,1);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `transactions`
--

DROP TABLE IF EXISTS `transactions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `transactions` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned DEFAULT NULL,
  `product_id` int(10) unsigned DEFAULT NULL,
  `amount` decimal(10,0) DEFAULT NULL,
  `total_price` decimal(10,0) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_user_id_idx` (`user_id`),
  KEY `fk_product_id_idx` (`product_id`),
  CONSTRAINT `fk_product_transaction` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `fk_user_transaction` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `transactions`
--

LOCK TABLES `transactions` WRITE;
/*!40000 ALTER TABLE `transactions` DISABLE KEYS */;
/*!40000 ALTER TABLE `transactions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type`
--

DROP TABLE IF EXISTS `type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `type` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type`
--

LOCK TABLES `type` WRITE;
/*!40000 ALTER TABLE `type` DISABLE KEYS */;
INSERT INTO `type` VALUES (1,'Lentes de Sol'),(2,'Armazones de Receta');
/*!40000 ALTER TABLE `type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_shop`
--

DROP TABLE IF EXISTS `user_shop`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user_shop` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) unsigned DEFAULT NULL,
  `product_id` int(10) unsigned DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `fk_user_id_idx` (`user_id`),
  KEY `fk_product_id_idx` (`product_id`),
  CONSTRAINT `fk_product_id` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`),
  CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_shop`
--

LOCK TABLES `user_shop` WRITE;
/*!40000 ALTER TABLE `user_shop` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_shop` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `repassword` varchar(255) NOT NULL,
  `direction` varchar(255) NOT NULL,
  `photo_user` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=51 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'Gerard Tilte','gtilte0@netvibes.com','bYLzEOyiF','NiSTF3','3 Waywood Circle','https://robohash.org/molestiasofficiaatque.png?size=50x50&set=set1'),(2,'Woody','woody@woody.com','$2a$10$stm3lhg02vnRm8QrC6hb0ewrlEhv/qL00T9lhEPeoQjQN7zGag9/i','$2a$10$LEbavf5JRMVQR6bNo9A4O.3PZNOfJ9h/xSIAYYhQmhDfWG/Yx6kyK','woody 123','/images/productsimage/user-1645194965559.jpg'),(3,'Pedro','pepe@pepe.com','$2a$10$unFUxXJXOoyA93SLoOzYlObfk7MR.K6Xpr1SMruPjN2TnUhewPKD2','$2a$10$Vhy5gEAf7J19JXuj2/tqdOnEWivvOc6mR9KtWf216HXolo8XnY2XC','pepe 123','/images/productsimage/user-1645730294472.jpg'),(4,'Dolores Knoton','dknoton3@hibu.com','qNhrUA','yZydCAARVBC4','965 Armistice Point','https://robohash.org/expeditadoloremassumenda.png?size=50x50&set=set1'),(5,'Alexis Rew','arew4@squarespace.com','lKFzQdf','Wml6keyY','7829 Leroy Point','https://robohash.org/abnequeat.png?size=50x50&set=set1'),(6,'Merill Ferrettini','mferrettini5@yandex.ru','hAnPNZMa71gb','X9KBqnrmHg6g','810 Vermont Plaza','https://robohash.org/utautreprehenderit.png?size=50x50&set=set1'),(7,'Paul Partleton','ppartleton6@chronoengine.com','ZuQNRNDgE','U5ooELY0KY','7952 Hayes Way','https://robohash.org/providentquoipsum.png?size=50x50&set=set1'),(8,'Tate Gyles','tgyles7@w3.org','0upyGSsyW','1IYwHppyekkZ','882 Pleasure Road','https://robohash.org/quismolestiaefacilis.png?size=50x50&set=set1'),(9,'Roanna Leatt','rleatt8@reference.com','5PEl4Ugvu','yTO3fxc1A6R','69409 Prairie Rose Park','https://robohash.org/eiusinofficiis.png?size=50x50&set=set1'),(10,'Enrika Kulver','ekulver9@webnode.com','eEraEEa0','MT01L4g','09299 Russell Terrace','https://robohash.org/adconsequunturreprehenderit.png?size=50x50&set=set1'),(11,'Flori Drife','fdrifea@wufoo.com','E9mnbS34Pj','qQCvGl2ih','8934 Goodland Parkway','https://robohash.org/estidvoluptas.png?size=50x50&set=set1'),(12,'Gussie Swaile','gswaileb@list-manage.com','gsXpZsr49Yy','2uXqxINE','85 Surrey Center','https://robohash.org/etasperioreseos.png?size=50x50&set=set1'),(13,'Reginauld Othen','rothenc@about.me','dMJ0HsyuGbo8','2LSZ6S2GsJ','20848 Morning Parkway','https://robohash.org/evenietconsequaturerror.png?size=50x50&set=set1'),(14,'Evonne Provest','eprovestd@alexa.com','JgFTYY','URg4Du4','0 Claremont Plaza','https://robohash.org/utnequequi.png?size=50x50&set=set1'),(15,'Adel Crutchfield','acrutchfielde@yelp.com','ZExNe5o','3fUD4PJqWt','08111 Clarendon Pass','https://robohash.org/vitaecorporisquo.png?size=50x50&set=set1'),(16,'Jeanne Pietrusiak','jpietrusiakf@pbs.org','maMm1a','WNanHIBxx','6 Fremont Place','https://robohash.org/laudantiummolestiaequi.png?size=50x50&set=set1'),(17,'Carree Casbon','ccasbong@ow.ly','ADVwhgZoj','Ea226KhIHO','03167 Green Place','https://robohash.org/voluptatemreprehenderitsed.png?size=50x50&set=set1'),(18,'Silas Leggatt','sleggatth@jigsy.com','m387dTG6a','l381WX2ae08','6374 Farwell Crossing','https://robohash.org/hicvoluptatemeligendi.png?size=50x50&set=set1'),(19,'Arron Brotherick','abrothericki@newyorker.com','SVabGVOm','ta5vu9V0oB','066 Ridgeway Junction','https://robohash.org/advoluptasut.png?size=50x50&set=set1'),(20,'Walker Lording','wlordingj@usatoday.com','dEfGXk9oqu5','w3Bo3hSm','85 Commercial Crossing','https://robohash.org/sitautrepudiandae.png?size=50x50&set=set1'),(21,'Ariel Yeomans','ayeomansk@shareasale.com','0YUzPt','B2YkNQwQh43','411 Springview Crossing','https://robohash.org/utetex.png?size=50x50&set=set1'),(22,'Johnette Winfred','jwinfredl@yahoo.com','DfKEe7Npv','b6JnTpWmQZDs','62 5th Street','https://robohash.org/consequaturomniseos.png?size=50x50&set=set1'),(23,'Benedicta Brinkman','bbrinkmanm@clickbank.net','J6kiQkom','Wz9uSqt','5239 Emmet Court','https://robohash.org/nonlaboriosamaut.png?size=50x50&set=set1'),(24,'Garrick Kubelka','gkubelkan@mediafire.com','qAmBYMttLV','XJn553WaYI','507 Lillian Pass','https://robohash.org/utquisquamut.png?size=50x50&set=set1'),(25,'Bartholemy Gavriel','bgavrielo@shutterfly.com','zCBZwxJA4AQ3','CKjRIAFfGNB6','2 Northridge Avenue','https://robohash.org/nequerecusandaeconsequatur.png?size=50x50&set=set1'),(26,'Paolo Frizell','pfrizellp@xrea.com','S6VNN23GUJZ','zyY2NHqz','586 Cottonwood Junction','https://robohash.org/corruptisuntalias.png?size=50x50&set=set1'),(27,'Shirlee Wimmer','swimmerq@imdb.com','VObqCG5CtImv','JVlCe8','54 Basil Plaza','https://robohash.org/estnamconsectetur.png?size=50x50&set=set1'),(28,'Lazarus Vase','lvaser@slideshare.net','EgkXXYELSZ2','sLYkMI','8975 Meadow Valley Parkway','https://robohash.org/nonpossimusperferendis.png?size=50x50&set=set1'),(29,'Leslie Halms','lhalmss@purevolume.com','Ps8opmSmlg0M','61vORyP','00 Milwaukee Lane','https://robohash.org/consequaturtemporequidem.png?size=50x50&set=set1'),(30,'Guillema Quinsee','gquinseet@privacy.gov.au','NpBMib6fm','77iTGQ','6 Butternut Pass','https://robohash.org/recusandaepossimusbeatae.png?size=50x50&set=set1'),(31,'Dallas Kusick','dkusicku@scientificamerican.com','EGju8lfSdg','NMUnxjo','68 Fordem Parkway','https://robohash.org/autquiarem.png?size=50x50&set=set1'),(32,'Siward Everex','severexv@photobucket.com','yt3zd6v','f2K6yYK','6528 Nelson Street','https://robohash.org/nihilomnisquae.png?size=50x50&set=set1'),(33,'Jo ann Kidgell','jannw@unesco.org','v8stMK5up','wk1emxIssYd','37906 Nova Parkway','https://robohash.org/harumdelectusoccaecati.png?size=50x50&set=set1'),(34,'Bartolemo Forrest','bforrestx@bravesites.com','vXkGlUSdnM7s','3JNBFQtXMoU','447 Vahlen Way','https://robohash.org/remrerumfugiat.png?size=50x50&set=set1'),(35,'Abigail Christian','achristiany@hhs.gov','izZbtlKy','mdvtpXQbrt','656 Grayhawk Drive','https://robohash.org/accusantiumsedpariatur.png?size=50x50&set=set1'),(36,'Errol Boyde','eboydez@washington.edu','mf9QypipvV','MDrgUV','0 Parkside Street','https://robohash.org/voluptatemmollitiaipsa.png?size=50x50&set=set1'),(37,'Nissie Truss','ntruss10@51.la','2Jvqqqh','ch8ZtJ','56 Myrtle Parkway','https://robohash.org/doloreseniminventore.png?size=50x50&set=set1'),(38,'Brody Logsdail','blogsdail11@1688.com','lDjyH21D7','dqH1OWeH','0476 Haas Street','https://robohash.org/etsedmaiores.png?size=50x50&set=set1'),(39,'Federica Gonsalvo','fgonsalvo12@google.com.au','LuNBWNtA2sJ','CUY4ThS','0497 Scoville Lane','https://robohash.org/repellendusomnisfugiat.png?size=50x50&set=set1'),(40,'Louella Mc Mechan','lmc13@skyrock.com','Cqx0QsXwp','3HKYDUB','3 Messerschmidt Pass','https://robohash.org/etreiciendisrepudiandae.png?size=50x50&set=set1'),(41,'Nanni Handsheart','nhandsheart14@cbc.ca','H7Ll5r1','hiGbyEtU','7 New Castle Avenue','https://robohash.org/rationeadipisciut.png?size=50x50&set=set1'),(42,'Kamilah Kleinerman','kkleinerman15@i2i.jp','TdN25YRvUVp7','o7aKlFBDOqj','76 Shoshone Court','https://robohash.org/excepturiquaeeveniet.png?size=50x50&set=set1'),(43,'Sibylla Durtnel','sdurtnel16@sourceforge.net','gbnlfN','uaRt1ngB9','1516 Hanover Pass','https://robohash.org/aliquidteneturrepellat.png?size=50x50&set=set1'),(44,'Paton Chatell','pchatell17@miibeian.gov.cn','PYL77YSQybH','RRxfnNnsV','093 Raven Court','https://robohash.org/eaeaofficiis.png?size=50x50&set=set1'),(45,'Mathe Kobierzycki','mkobierzycki18@chronoengine.com','gqVmebpcY','ylUQdDpbVTjF','141 Ridgeview Street','https://robohash.org/autemfugiatdolorem.png?size=50x50&set=set1'),(46,'Sterling Pendrigh','spendrigh19@disqus.com','qsj5vCWxg','8DcI5Q','71 Marcy Place','https://robohash.org/delectusaccusantiumnon.png?size=50x50&set=set1'),(47,'Merrielle Deavin','mdeavin1a@dedecms.com','8Scd73Yj8','qYryJ2Pt','2889 Doe Crossing Drive','https://robohash.org/etodionisi.png?size=50x50&set=set1'),(48,'Sheffy Croney','scroney1b@pcworld.com','aJDq88m6WA7','XnpGLoA7','609 Haas Plaza','https://robohash.org/autemnecessitatibuscommodi.png?size=50x50&set=set1'),(49,'Frederik Debow','fdebow1c@springer.com','SchS7L1','Mjm0k5bLsBiG','84953 Arkansas Plaza','https://robohash.org/quiaetid.png?size=50x50&set=set1'),(50,'Engelbert Finnick','efinnick1d@shareasale.com','9He39OCu','CJz6KJfrn','2968 Forest Run Court','https://robohash.org/isteliberoarchitecto.png?size=50x50&set=set1');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'mirrorlens'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-03-09  6:43:58
