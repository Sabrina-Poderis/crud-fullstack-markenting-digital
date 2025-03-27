import knex from "knex";
import env from "./env";

const db = knex({
  client: "pg",
  connection: {
    host: env.DB_HOST,
    user: env.DB_USER,
    password: env.DB_PASSWORD,
    database: env.DB_NAME,
    ssl: { rejectUnauthorized: false },
  },
  pool: { min: 2, max: 10 },
});

export default db;
