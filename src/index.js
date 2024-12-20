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

// --------------------------------------------------------------------------------------------------------------------------------

// Añadir un nuevo patín

server.post("/api/skate", async (req, res) => {
  const connection = await getDBConnection();
  const skateData = req.body;

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

// not found error
server.get("*", (req, res) => {
  const notFoundFileRelativePath = "../public/404-not-found.html";
  const notFoundFileAbsolutePath = path.join(
    __dirname,
    notFoundFileRelativePath
  );
  res.status(404).sendFile(notFoundFileAbsolutePath);
});
