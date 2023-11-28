import { Table, Column, ForeignKey, Model, BelongsTo } from 'sequelize-typescript';
import { Federaciones } from './federaciones.model';

@Table({ tableName: 'categorias', timestamps: false })
export class Categorias extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  id_cat: number;

  @Column
  nombre_corto: string;

  @Column
  nombre_largo: string;

  @ForeignKey(() => Federaciones)
  @Column
  id_fed: number;

  @BelongsTo(() => Federaciones)
  federacion: Federaciones;

  @Column
  referencia: string;

  @Column
  creador: number;

  @Column
  fecha_creacion: Date;

  @Column
  comentario: string;
}
