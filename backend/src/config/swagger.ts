import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";
import env from "./env";

const url = `${env.VITE_API_URL}`

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Fullstack Marketing Digital API",
      version: "1.0.16",
      description: "Sistema backend para gerenciar usuários e projetos de clientes de marketing digital via API REST.",
      contact: {
        name: "Sabrina Poderis",
        email: "sabrina.poderis@gmail.com",
      },
    },
    servers: [
      {
        url,
        description: "Servidor de Desenvolvimento",
      },
    ],
  },
  apis: ["./src/routes/*.ts"],
};

const swaggerSpec = swaggerJSDoc(options);

export const setupSwagger = (app: Express) => {
  app.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log(`📜 Swagger disponível em ${url}/docs`);
};
