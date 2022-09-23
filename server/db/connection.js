const mongoose = require("mongoose");
const DB = process.env.DATABASE;


mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Connection success."))
    .catch((error) => console.log(error));

module.exports = mongoose.connection;