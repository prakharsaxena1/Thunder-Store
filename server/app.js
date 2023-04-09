const express = require("express");
require("./db/connection");
const cookieParser = require('cookie-parser');
const passport = require("passport");
const cors = require("cors");

const app = express();

// Middlewares
app.use(cors({
    origin: 'http://127.0.0.1:3000', // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify the allowed HTTP methods
    credentials: true // Pass credentials (only for HTTP methods that need them)
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
require('./auth/passport')(passport);
app.use(passport.initialize());
// Routes
app.use(require('./routes'));

// Invalid request handler
app.use('*', (req, res) => {
    res.json({
        message: `INVALID REQUEST AT: ${req.originalUrl}`
    })
})

module.exports = app;