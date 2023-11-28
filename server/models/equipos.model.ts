import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import ENombres from './e_nombres.model';

@Table({
  tableName: 'equipos',
  timestamps: false,
  underscored: true
})
export class Equipos extends Model<Equipos> {
  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  })
  id: number;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
    field: 'id_equ'
  })
  idEqu: number;

  @Column({
    type: DataType.STRING(255),
    allowNull: true
  })
  referencia: string | null;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: true
  })
  alta: number | null;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 9999
  })
  baja: number;

  @Column({
    type: DataType.TEXT,
    allowNull: true
  })
  comentario: string | null;

  @Column({
    type: DataType.DATE,
    allowNull: false,
    defaultValue: DataType.NOW,
    field: 'fecha'
  })
  fecha: Date;

  @Column({
    type: DataType.STRING(255),
    allowNull: true
  })
  twitter: string | null;

  @Column({
    type: DataType.STRING(255),
    allowNull: true
  })
  web: string | null;

  @Column({
    type: DataType.STRING(255),
    allowNull: true
  })
  instagram: string | null;

  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    field: 'creador'
  })
  creador: number;

  @Column({
    type: DataType.DATE,
    allowNull: true,
    defaultValue: DataType.NOW,
    field: 'fecha_creacion'
  })
  fechaCreacion: Date | null;

  @HasMany(() => ENombres)
  nombres: ENombres[];
}
