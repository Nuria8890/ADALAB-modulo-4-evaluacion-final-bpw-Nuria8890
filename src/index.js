// Importar los módulos de NPM que necesito
const express = require("express");
const cors = require("cors");
const path = require("path");
const mysql = require("mysql2/promise");

// Crear el servidor
const server = express();

// Configurar el servidor para que acepte peticiones
server.use(cors());
server.use(express.json({ limit: "25MB" }));

// Configurar el fichero para poder usar variables de entorno con la librería dotenv
require("dotenv").config();

// Configurar el servidor para poder usar el motor de plantillas
server.set("view engine", "ejs");

// Establecer y arrancar el puerto de conexión
const serverPort = process.env.PORT;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

// Configurar la conexion servidor - bbdd
async function getDBConnection() {
  const connection = await mysql.createConnection({
    host: "localhost",
    database: "skateStore",
    user: process.env.USER_DATABASE,
    password: process.env.PASSWORD_DATABASE,
  });
  await connection.connect();
  console.log(
    `Conexión establecida con la base de datos ${connection.threadId}`
  );
  return connection;
}

// Añadir un nuevo patín

server.post("/api/skate", async (req, res) => {
  const skateData = req.body;

  const requiredData = ["brand", "model"];

  for (const data of requiredData) {
    if (!(data in skateData) || skateData[data] === "") {
      return res.status(400).json({
        status: "error",
        message:
          "Asegúrate de que has introducido todos los datos (brand y model)",
      });
    }
  }

  const connection = await getDBConnection();
  const query = "INSERT INTO skates (brand, model) VALUES(?, ?);";

  const [result] = await connection.query(query, [
    skateData.brand,
    skateData.model,
  ]);

  connection.end();

  res.status(201).json({
    status: "success",
    id: result.insertId,
  });
});

// Listar todos los patines

server.get("/api/skates", async (req, res) => {
  const connection = await getDBConnection();
  const queryAllSkates = "SELECT * FROM skates;";

  const [resultAllSkates] = await connection.query(queryAllSkates);

  let message = [];

  for (const skate of resultAllSkates) {
    const querySkate = `
    SELECT idGuide,
            guides.brand AS brandGuide,
            guides.size AS sizeGuide,
            idWheel,
            wheels.brand AS brandWheel,
            wheels.size AS sizeWheel
    FROM guides
    INNER JOIN guides_has_wheels
	    ON guides_has_wheels.fk_guide = guides.idGuide
    INNER JOIN wheels
      ON guides_has_wheels.fk_wheel = wheels.idWheel
    WHERE fk_skate = ?;`;

    const [resultSkate] = await connection.query(querySkate, [skate.idSkate]);

    let skateWithGuidesAndWheels = skate;
    skateWithGuidesAndWheels["guidesAndWheels"] = resultSkate;
    message.push(skateWithGuidesAndWheels);
  }

  res.status(200).json({
    status: "success",
    message: message,
  });
});

// Actualizar los datos de un patín

server.put("/api/updateSkate/:idSkate", async (req, res) => {
  const idSkate = req.params.idSkate;
  const { brand, model } = req.body;

  const connection = await getDBConnection();
  const query = "UPDATE skates SET brand = ?, model = ? WHERE idSkate = ?;";

  const [result] = await connection.query(query, [brand, model, idSkate]);
  connection.end();

  res.status(200).json({
    status: "success",
    message: "Update skate",
  });
});

// Eliminar el registro de un patín

server.delete("/api/deleteSkate/:idSkate", async (req, res) => {
  const idSkate = req.params.idSkate;
  const connection = await getDBConnection();
  const query = "DELETE from skates WHERE idSkate = ?;";
  const [result] = await connection.query(query, [idSkate]);

  console.log(result);
  res.status(200).json({
    status: "success",
    message: "Delete skate",
  });
});

// Petición no encontrada
server.get("*", (req, res) => {
  const notFoundFileRelativePath = "../public/404-not-found.html";
  const notFoundFileAbsolutePath = path.join(
    __dirname,
    notFoundFileRelativePath
  );
  res.status(404).sendFile(notFoundFileAbsolutePath);
});
