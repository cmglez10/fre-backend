import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Federaciones } from './federaciones.model';

@Table({ tableName: 'torneos', timestamps: false })
export class Torneos extends Model<Torneos> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column({ field: 'id_tor' })
  idTor: number;

  @Column({ field: 'nombre_corto' })
  nombreCorto: string;

  @Column({ field: 'nombre_largo' })
  nombreLargo: string;

  @ForeignKey(() => Federaciones)
  @Column({ field: 'id_fed' })
  idFed: number;

  @Column({ field: 'referencia' })
  referencia: string;

  @Column({ field: 'creador' })
  creador: number;

  @Column({ field: 'fecha_creacion' })
  fechaCreacion: Date;

  @Column({ field: 'comentario' })
  comentario: string;

  @BelongsTo(() => Federaciones)
  federacion: Federaciones;
}

// create a sequelize-typescript model for this table
