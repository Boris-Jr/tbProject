<<<<<<< HEAD
import express from "express";
import cors from "cors";
import db from "./db/db.js";
import dotenv from "dotenv";
import role from "./routes/role.js";
import user from "./routes/user.js";
import board from "./routes/board.js";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/role", role);
app.use("/api/user", user);
app.use("/api/board", board);

app.listen(process.env.PORT, () =>
  console.log("Backend server running on port: " + process.env.PORT)
);

db.dbConnection(); 
=======
// importamos la librería necesaria
import express from "express"; // Servidor
import cors from "cors"; // Establece las reglas de conexión con todo lo que llegue al back
import db from "./db/db.js"; // Conexión
import dotenv from "dotenv"; // Reconozca variables de entorno
dotenv.config(); // Al ejecutar el servidor, dotenv ejecutará todas sus funciones (.env)
import role from "../backend/routes/role.js";

const app = express();

// Reglas
app.use(express.json()); // Especificamos que nuestro servidor express se va a comunicar unicamente con JSON
app.use(cors());
app.use("/api/role", role); // Se le pasa la URL para agregar rol

// Ejecutar servidor express
app.listen(process.env.PORT, () =>
  console.log("Backend server running on port: " + process.env.PORT)
); // Le pasamos el puerto por el cual se está ejecutando y lo mostramos por consola.

// Conexión de base de datos
db.bdConnection(); // Ejecutamos la conexión a la base de datos.
>>>>>>> b9e88176a87b08a384bf716a96f20af055ef8c85
