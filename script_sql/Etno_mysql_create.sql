CREATE TABLE `Users` (
	`ID` INT NOT NULL AUTO_INCREMENT,
	`login` varchar(255) NOT NULL,
	`first_name` varchar(255) NOT NULL,
	`last_name` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`is_admin` BOOLEAN NOT NULL DEFAULT false,
	`created_at` DATETIME NOT NULL,
	`updated_at` DATETIME NOT NULL,
	PRIMARY KEY (`ID`)
);

CREATE TABLE `Birds` (
	`ID` INT NOT NULL AUTO_INCREMENT,
	`public_name` varchar(255) NOT NULL,
	`scientific_name` varchar(255),
	`family` varchar(255),
	`size` varchar(255),
	`weigth` INT,
	`description` TEXT,
	`main_picture_url` varchar(255) NOT NULL,
	`created_at` DATETIME NOT NULL,
	`updated_at` DATETIME NOT NULL,
	PRIMARY KEY (`ID`)
);

CREATE TABLE `BirdsPictures` (
	`ID` INT NOT NULL AUTO_INCREMENT,
	`url` varchar(255) NOT NULL,
	`bird_id` INT NOT NULL,
	`created_at` DATETIME NOT NULL,
	`updated_at` DATETIME NOT NULL,
	PRIMARY KEY (`ID`)
);

CREATE TABLE `Meeting` (
	`ID` INT NOT NULL AUTO_INCREMENT,
	`user_id` INT NOT NULL,
	`bird_id` INT NOT NULL,
	`date` DATETIME,
	`place` varchar(255),
	`weather` varchar(255),
	`quantity` varchar(255),
	`created_at` DATETIME NOT NULL,
	`updated_at` DATETIME NOT NULL,
	PRIMARY KEY (`ID`)
);

ALTER TABLE `BirdsPictures` ADD CONSTRAINT `BirdsPictures_fk0` FOREIGN KEY (`bird_id`) REFERENCES `Birds`(`ID`);
ALTER TABLE `Meeting` ADD CONSTRAINT `Meeting_fk0` FOREIGN KEY (`user_id`) REFERENCES `Users`(`ID`);
ALTER TABLE `Meeting` ADD CONSTRAINT `Meeting_fk1` FOREIGN KEY (`bird_id`) REFERENCES `Birds`(`ID`);





