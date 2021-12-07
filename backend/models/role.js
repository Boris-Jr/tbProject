import mongoose from "mongoose";

const roleSchema = new mongoose.Schema({
<<<<<<< HEAD
  name: String,
  description: String,
  registerDate: { type: Date, default: Date.now },
  dbStatus: Boolean,
});

const role = mongoose.model("roles", roleSchema);

export default role;
=======
    name: String,
    description: String,
    registerDate: { type: Date, default: Date.now }, // Se obtiene la fecha actual y se guarda
    dbStatus: Boolean,
});

const role = mongoose.model("roles", roleSchema); //  Guardar en mongo

export default role;
>>>>>>> b9e88176a87b08a384bf716a96f20af055ef8c85
