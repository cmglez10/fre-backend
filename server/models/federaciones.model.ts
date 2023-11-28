import { Table, Column, Model } from 'sequelize-typescript';

@Table({ tableName: 'federaciones', timestamps: false })
export class Federaciones extends Model {
  @Column
  id_fed: number;

  @Column
  fundacion: number;

  @Column
  disolucion: number;

  @Column
  codigo: string;

  @Column
  nombre_corto: string;

  @Column
  nombre_largo: string;

  @Column
  web: string;

  @Column
  direccion: string;

  @Column
  telefono: string;

  @Column
  creador: number;

  @Column
  fecha_creacion: Date;

  @Column
  comentario: string;
}
