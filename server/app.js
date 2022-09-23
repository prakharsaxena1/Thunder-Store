require("./db/connection");
const express = require("express");
const app = express();

// Middlewares
app.use(express.json());

// Routes
// app.use(require('./routes'));

// Invalid request handler
app.use('*', (req, res) => {
    res.json({
        message: `INVALID REQUEST AT: ${req.originalUrl}`
    })
});

module.exports = app;