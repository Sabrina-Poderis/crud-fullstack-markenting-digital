import 'reflect-metadata';
import express from "express";
import cors from "cors";
import env from "./config/env";
import sequelize from "./config/sequelize";
import UserRoutes from './routes/UserRoutes';

const PORT = env.PORT
const app = express();

app.use(cors());
app.use(express.json());
app.use('/user', UserRoutes);

app.get("/healthCheck", async (req, res) => {
  try {
    res.json({ status: "ok", db: "connected" });
  } catch (error) {
    res.status(500).json({ status: "error", db: "disconnected" });
  }
});

app.listen(PORT, async () => {
  console.log(`Servidor rodando na porta ${PORT}`);
  await sequelize.authenticate();
});
