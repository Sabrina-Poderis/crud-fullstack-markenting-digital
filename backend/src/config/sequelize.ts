import { Dialect } from 'sequelize';
import { Sequelize } from 'sequelize-typescript';
import env from './env';

const databaseConfig = {
  username: env.DB_USER,
  password: env.DB_PASSWORD,
  database: env.DB_NAME,
  host: env.DB_HOST,
  dialect: 'postgres' as Dialect,
  logging: true,
  dialectOptions: {
    ssl: {
      require: true,

    },
    rejectUnauthorized: false,
  },
};

const sequelize = new Sequelize({
  ...databaseConfig,
  models: [__dirname + '/models'],
});

export default sequelize
