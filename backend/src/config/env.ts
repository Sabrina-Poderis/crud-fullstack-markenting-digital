import dotenv from "dotenv";

dotenv.config();

const env = {
  PORT: process.env.BACKEND_PORT || 5000,
  DB_HOST: process.env.DB_HOST,
  DB_PORT: process.env.DB_PORT || 5432,
  DB_USER: process.env.DB_USER,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_NAME: process.env.DB_NAME,
  JWT_SECRET_KEY: process.env.JWT_SECRET_KEY || "",
};

export default env;
