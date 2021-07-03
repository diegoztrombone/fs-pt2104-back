const mongoose = require("mongoose")

const mongooseConfigs = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}

mongoose
    .connect('mongodb://localhost/AstronomyDB', mongooseConfigs)
    .then(() => console.info("> Conexión a MongoDB satisfactoria"))
    .catch((error) => {
        console.error("> no se ha conectado a mongoDB, haber estudiau", error.message);
        process.exit(0);
    });