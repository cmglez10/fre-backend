import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Categorias } from './categorias.model';
import { Torneos } from './torneos.model';

@Table({
  tableName: 'competiciones',
  timestamps: true,
  createdAt: 'fecha_creacion',
  updatedAt: 'fecha_act'
})
export class Competiciones extends Model<Competiciones> {
  @Column({
    primaryKey: true,
    autoIncrement: true,
    allowNull: false
  })
  id: number;

  @Column({
    allowNull: false,
    unique: true
  })
  id_com: number;

  @Column({
    allowNull: false
  })
  temporada: string;

  @Column({
    allowNull: false,
    defaultValue: 0
  })
  temporada_ini: number;

  @Column({
    allowNull: false
  })
  nivel: number;

  @Column({
    allowNull: true
  })
  grupo: string;

  @Column({
    allowNull: true
  })
  subgrupo: string;

  @Column({
    allowNull: true
  })
  ambito: string;

  @Column({
    allowNull: false,
    defaultValue: ''
  })
  fase: string;

  @Column({
    allowNull: true
  })
  eliminatoria: number;

  @Column({
    allowNull: false,
    defaultValue: ''
  })
  vinculo: string;

  @Column({
    allowNull: true
  })
  importar: string;

  @Column({
    allowNull: true
  })
  importar_directos: string;

  @Column({
    allowNull: false,
    defaultValue: 0
  })
  estado: number;

  @Column({
    allowNull: true
  })
  fecha_estado: Date;

  @ForeignKey(() => Categorias)
  @Column({
    allowNull: false
  })
  id_cat: number;

  @BelongsTo(() => Categorias)
  categoria: Categorias;

  @ForeignKey(() => Torneos)
  @Column({
    allowNull: false,
    defaultValue: 0
  })
  id_tor: number;

  @BelongsTo(() => Torneos)
  torneo: Torneos;

  @Column({
    allowNull: true
  })
  referencia: string;

  @Column({
    allowNull: true
  })
  resultados: string;

  @Column({
    allowNull: true
  })
  clasificacion: string;

  @Column({
    allowNull: false,
    defaultValue: 0
  })
  participantes: number;

  @Column({
    allowNull: true
  })
  twitter_id: string;

  @Column({
    allowNull: false,
    defaultValue: 0
  })
  col_fijo: number;

  @Column({
    allowNull: true
  })
  cla_verificada: Date;

  @Column({
    allowNull: false,
    defaultValue: 0
  })
  usu_verificada: number;

  @Column({
    allowNull: false,
    defaultValue: 0
  })
  sin_reciprocidad: number;

  @Column({
    allowNull: false,
    defaultValue: 0
  })
  por_coeficiente: number;

  @Column({
    allowNull: true
  })
  cla_historica: number;

  @Column({
    allowNull: true,
    type: 'text'
  })
  comentario: string;

  @Column({
    allowNull: true
  })
  usuario_creacion: number;

  @Column({
    allowNull: false
  })
  usuario: number;

  @Column({
    allowNull: false,
    defaultValue: new Date()
  })
  fecha_creacion: Date;

  @Column({
    allowNull: false,
    defaultValue: new Date()
  })
  fecha: Date;

  @Column({
    allowNull: false,
    defaultValue: '0000-00-00 00:00:00'
  })
  fecha_act: Date;

  @Column({
    allowNull: false,
    defaultValue: 0
  })
  usu_actualizada: number;

  @Column({
    allowNull: true
  })
  usu_crea_cla: number;

  @Column({
    allowNull: true
  })
  fecha_crea_cla: Date;

  @Column({
    allowNull: true
  })
  usu_crea_cal: number;

  @Column({
    allowNull: true
  })
  fecha_crea_cal: Date;

  @Column({
    allowNull: false,
    defaultValue: 0
  })
  suspendidos: number;
}
