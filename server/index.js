import express from "express";
import "./db/connection.js";
import morgan from "morgan";
import cookieParser from 'cookie-parser';
import passport from "passport";
import cors from "cors";
import passportJS from './auth/passport.js';
import routes from './routes/index.js';

const app = express();

// Middlewares
app.use(cors({
    origin: 'http://localhost:3000', // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify the allowed HTTP methods
    credentials: true,// Pass credentials (only for HTTP methods that need them)
}));
// app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
passportJS(passport);
app.use(passport.initialize());

if (process.env.NODE_ENV !== 'production') {
    import("morgan").then(() => {
        app.use(morgan('tiny'));
    });
}

// Routes
app.use(routes);

if (process.env.NODE_ENV === "production") {
    // @ts-ignore
    app.use(express.static(path.resolve(__dirname, 'client', 'build')));
    app.get("/", (req, res) => {
        // @ts-ignore
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'), function (err) {
            if (err) {
                res.status(500).send(err)
            }
        });
    });
}


// Invalid request handler
app.use('*', (req, res) => {
    res.json({
        message: `INVALID REQUEST AT: ${req.originalUrl}`
    })
})

export default app;
