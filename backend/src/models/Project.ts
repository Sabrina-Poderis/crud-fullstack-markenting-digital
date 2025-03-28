import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from "sequelize-typescript";
import { Client } from "./Client";

@Table({ tableName: "project", timestamps: true, paranoid: true })
export class Project extends Model {
  @Column({ type: DataType.INTEGER, primaryKey: true, autoIncrement: true })
  id!: number;

  @Column({ type: DataType.STRING, allowNull: false })
  name!: string;

  @Column({ type: DataType.TEXT, allowNull: true })
  description!: string;

  @Column({ type: DataType.DOUBLE, allowNull: true })
  budget!: number;

  @Column({ type: DataType.DATE, allowNull: false })
  startDate!: Date;

  @Column({ type: DataType.DATE, allowNull: true })
  endDate!: Date;

  @Column({ type: DataType.DATE, allowNull: true })
  deletedAt!: Date;

  @ForeignKey(() => Client)
  @Column({ type: DataType.INTEGER, allowNull: false })
  clientId!: number;

  @BelongsTo(() => Client)
  client!: Client;
}
