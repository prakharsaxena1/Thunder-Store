const mongoose = require("mongoose");
const DB = process.env.DATABASE;

mongoose.set('strictQuery', true); // To supress the warning
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connection success."))
    .catch((error) => console.log(error));

module.exports = mongoose.connection;