import "reflect-metadata";
import express from "express";
import cors from "cors";
import env from "./config/env";
import sequelize from "./config/sequelize";
import UserRoutes from "./routes/UserRoutes";
import ClientRoutes from "./routes/ClientRoutes";

const PORT = env.PORT;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/user", UserRoutes);
app.use("/clients", ClientRoutes);

app.get("/healthCheck", async (_req, res) => {
  try {
    res.json({ status: "ok", db: "connected" });
  } catch (error) {
    res.status(500).json({ status: "error", db: "disconnected" });
  }
});

sequelize
  .sync()
  .then(() => {
    console.log("Banco de dados sincronizado com sucesso!");
    app.listen(PORT, async () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch((error) => console.error("Erro ao conectar ao banco:", error));
