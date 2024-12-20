CREATE DATABASE skateStore;

USE skateStore;

CREATE TABLE skates (
	idSkate INT AUTO_INCREMENT PRIMARY KEY,
	brand VARCHAR(45) NOT NULL,
    model VARCHAR(45) NOT NULL
);

CREATE TABLE wheels (
	idWheel INT AUTO_INCREMENT PRIMARY KEY,
    brand VARCHAR(45) NOT NULL,
    size BOOL NOT NULL
);

CREATE TABLE guides (
	idGuide INT AUTO_INCREMENT PRIMARY KEY,
    brand VARCHAR(45) NOT NULL,
    size BOOL NOT NULL,
    fk_skate INT,
    FOREIGN KEY (fk_skate) REFERENCES skates(idSkate)
);


CREATE TABLE guides_has_wheels (
	fk_guide INT,
	FOREIGN KEY (fk_guide) REFERENCES guides(idGuide),
    fk_wheel INT,
    FOREIGN KEY (fk_wheel) REFERENCES wheels(idWheel),
	PRIMARY KEY (fk_guide, fk_wheel)
);