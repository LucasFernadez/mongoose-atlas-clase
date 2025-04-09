const mongoose = require('mongoose');
require('dotenv').config();

const dbConnection = async () => {
    try {
        const uri = process.env.MONGO_URI;
        if (!uri) throw new Error("MONGO_URI no está definida en el archivo .env");
        
        await mongoose.connect(uri);
        console.log('Base de datos conectada correctamente');
    } catch (error) {
        console.error('Error real:', error.message);  // muestra el mensaje real
        console.error('Stack completo:', error);      // muestra el error entero
        throw new Error('Error al conectar con la base de datos');
    }
};

module.exports = {
    dbConnection,
};
