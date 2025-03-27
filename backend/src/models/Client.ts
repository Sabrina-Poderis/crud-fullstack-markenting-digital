import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({ tableName: "client", timestamps: true, paranoid: true })
export class Client extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id!: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name!: string;

  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  email!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  phone!: string;

  @Column({ type: DataType.STRING, allowNull: false })
  company!: string;

  @Column({ type: DataType.DATE, allowNull: true })
  deletedAt!: string;
}