import { Table, Column, Model, ForeignKey, BelongsTo, DataType } from 'sequelize-typescript';
import { Equipos } from './equipos.model';

@Table({ tableName: 'e_nombres', underscored: true, timestamps: false })
export default class ENombres extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  ultimo: string;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: true,
    defaultValue: 1000
  })
  inicio: number | null;

  @Column({
    type: DataType.INTEGER.UNSIGNED,
    allowNull: false,
    defaultValue: 9999
  })
  fin: number;

  @ForeignKey(() => Equipos)
  @Column({ field: 'id_equ' })
  idEquipo: number;

  @BelongsTo(() => Equipos)
  equipo: Equipos;

  @Column
  nombre_corto: string;

  @Column
  nombre_largo: string;

  @Column({ field: 'comentario', allowNull: true, type: DataType.TEXT })
  comentario: string | null;

  @Column({
    allowNull: false,
    defaultValue: new Date()
  })
  fecha: Date;

  @Column({ field: 'colaborador' })
  colaborador: number;
}
