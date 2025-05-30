import "reflect-metadata";
import express from "express";
import cors from "cors";
import env from "./config/env";
import sequelize from "./config/sequelize";
import UserRoutes from "./routes/UserRoutes";
import ClientRoutes from "./routes/ClientRoutes";
import ProjectRoutes from "./routes/ProjectRoutes";
import { setupSwagger } from "./config/swagger";

const PORT = env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

setupSwagger(app);

app.use("/api/user", UserRoutes);
app.use("/api/clients", ClientRoutes);
app.use("/api/projects", ProjectRoutes);

app.get("/api/healthCheck", async (_req, res) => {
  try {
    res.json({ status: "ok", db: "connected" });
  } catch (error) {
    res.status(500).json({ status: "error", db: "disconnected" });
  }
});

sequelize
  .sync()
  .then(() => {
    app.listen(PORT, async () => {
      console.log(`Servidor rodando`);
    });
  })
  .catch((error) => console.error("Erro ao conectar ao banco:", error));
