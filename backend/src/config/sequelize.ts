import { Dialect } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import env from './env';
import { User } from '../models/User';
import { Client } from '../models/Client';
import { Project } from '../models/Project';

const databaseConfig = {
  username: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  host: env.DB_HOST,
  dialect: 'postgres' as Dialect,
  logging: true,
  dialectOptions: {
    ssl: {
      require: false,

    },
    rejectUnauthorized: false,
  },
};

const sequelize = new Sequelize({
  ...databaseConfig,
  models: [User, Client, Project],
});

export default sequelize
