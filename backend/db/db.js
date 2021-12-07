<<<<<<< HEAD
// importar libreria
// const mongoose = require("mongoose");
import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.DB_CONNECTION, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connection with MongoDB: OK");
  } catch (e) {
    console.log("Error connecting to MongoDB: \n" + e);
  }
};


export default { dbConnection };
=======
// Importar librería
import mongoose from "mongoose";

const bdConnection = async () => { //async para espécificar que es una función asincrona 
    try {
        // Se realiza la conexión a la base de datos y se le pasa la URL anteriormente escrita en el archivo .env
        // process -> acceder a archivos ocultos como .env en este caso.
        // useNewUrlParser -> para evitar que la url de conexión aparezca en consola.
        // useUnifiedTopology -> para que el texto que muestra la consola no muestre tanto log y texto basura.
        await mongoose.connect(process.env.DB_CONNECTION, { // await -> promesa
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connection whith MongoDB: Successful");
    } catch (e) {
        console.log("Connection whith MongoDB: Error \n" + e);
    }
};
// Exportamos la función
export default { bdConnection };
>>>>>>> b9e88176a87b08a384bf716a96f20af055ef8c85
