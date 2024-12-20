-- Crear y usar la bbdd
CREATE DATABASE skateStore;

USE skateStore;

-- Crear tablas y relaciones
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

-- Insertar datos en las tablas creadas
INSERT INTO skates (brand, model)
VALUES
("luigino", "velocidad"),
("rollerblade", "agresivo"),
("powerslide", "slalom");

INSERT INTO wheels (brand, size)
VALUES
("luigino", 110),
("luigino", 125),
("rollerblade", 80),
("powerslide", 72);

INSERT INTO guides (brand, size, fk_skate)
VALUES
("fr", 125, 1),
("rollerblade", 110, 1),
("rollerblade", 80, 2),
("wur", 80, 3);

INSERT INTO guides_has_wheels (fk_guide, fk_wheel)
VALUES
(1,1),
(1,2),
(1,3),
(1,4),
(2,1),
(2,3),
(2,4),
(3,3),
(3,4),
(4,3),
(4,4);