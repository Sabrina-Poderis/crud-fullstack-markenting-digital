import { Model, DataType } from 'sequelize-typescript';
import sequelize from '../config/sequelize';

class User extends Model {
  id!: number;
  name!: string;
  email!: string;
  password!: string;
}

User.init(
  {
    id: {
      type: DataType.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataType.STRING,
      allowNull: false,
    },
    email: {
      type: DataType.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataType.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: 'users',
  }
);

export { User };
