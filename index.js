import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";
import mongoose from "mongoose";
import "dotenv/config";
import routes from "./src/routes/index.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1", routes);


const server = http.createServer(app);
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('Connected to MongoDB');
    // Additional code after successful connection
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

// Access other environment variables
const port = process.env.PORT;
const tokenSecretKey = process.env.TOKEN_SECRET_KEY;
const tmdbBaseUrl = process.env.TMDB_BASE_URL;
const tmdbKey = process.env.TMDB_KEY;
//test