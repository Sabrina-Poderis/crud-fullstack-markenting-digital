import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./config/database"; // Se estiver usando Knex
import env from "./config/env";
dotenv.config();

const PORT = env.PORT
const app = express();

app.use(cors());
app.use(express.json());

app.get("/healthCheck", async (req, res) => {
  try {
    res.json({ status: "ok", db: "connected" });
  } catch (error) {
    res.status(500).json({ status: "error", db: "disconnected" });
  }
});

app.listen(PORT, async () => {
  console.log(`Servidor rodando na porta ${PORT}`);

});
