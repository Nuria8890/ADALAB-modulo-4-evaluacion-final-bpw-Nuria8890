-- Query de prueba para añadir un nuevo patín
INSERT INTO skates (brand, model) VALUES("marca", "modelo");

-- Query de prueba para listar todos los patines con sus guías y ruedas
SELECT idGuide, guides.brand AS brandGuide, guides.size AS sizeGuide, idWheel, wheels.brand AS brandWheel, wheels.size AS sizeWheel FROM guides
INNER JOIN guides_has_wheels
	ON guides_has_wheels.fk_guide = guides.idGuide
INNER JOIN wheels
ON guides_has_wheels.fk_wheel = wheels.idWheel
WHERE fk_skate = 1;

-- Query de prueba para actualizar los datos de un patín
UPDATE skates SET brand = "marca 2", model = "modelo 2" WHERE idSkate = 5;

-- Query de prueba para eliminar un registro de un patín
DELETE FROM skates AND guides
WHERE guides.fk_skate = skates.idSkate AND idSkate = 1;











