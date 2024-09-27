import express from "express";
import dotenv from "dotenv";
import { connectDB } from "./db/connectDB.js";
import authRoutes from "./routes/auth.route.js";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  connectDB();
  console.log("server is running on port :", PORT);
});
