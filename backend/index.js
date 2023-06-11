// VARIABLES
import express from "express";
import { config } from "dotenv";
import cors from "cors";
import logger from "morgan";
import cookieParser from "cookie-parser";

import connectDB from "./db/_db.js";
import routes from "./routes/_route.js";

config();
const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.MONGO_URi;

console.log(uri)

// Connect to database
connectDB(uri);

// Middlewares
app.use(cors());
app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/v1", routes);

app.all("*", (req, res) => {
  res.status(404).json({ message: "Resource does not exist." });
});

// RUn server on port
app.listen(port, () => console.log(`Server running on port ${port}`));
