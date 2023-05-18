// IMPORTS
import './config/config.js';
import express from "express";
import morgan from "morgan";
import cookieParser from 'cookie-parser';
import passport from "passport";
import cors from "cors";
import passportJS from './auth/passport.js';
import routes from './routes/index.js';
import "./db/connection.js";

const app = express();

// Middlewares
app.use(cors({
  origin: ['https://thunder-store.vercel.app'], // Allow requests from this origin
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

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.resolve(__dirname, 'client', 'build')));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'), function (err) {
      if (err) {
        res.status(500).send(err)
      }
    });
  });
}

// Routes
app.use(routes);

// Invalid request handler
app.use('*', (req, res) => {
  res.json({ message: `INVALID REQUEST AT: ${req.originalUrl}` });
});

// Sets the port for the server to run at
const PORT = process.env.PORT || 8000;

// LISTENING TO PORT
app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});
