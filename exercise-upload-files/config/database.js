const mongoose = require("mongoose")

const mongooseConfigs = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
}

mongoose
    .connect('mongodb://localhost/usersExerciseDB', mongooseConfigs)
    .then(() => console.info("> primo, se ha conectau a mongoDB"))
    .catch((error) => {
        console.error("> no se ha conectado a mongoDB, haber estudiau", error.message);
        process.exit(0);
    });