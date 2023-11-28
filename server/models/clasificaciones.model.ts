import { Table, Column, Model, ForeignKey, BelongsTo, DataType } from 'sequelize-typescript';
import { Competiciones } from './competiciones.model';
import { Equipos } from './equipos.model';
import ColPre from './col-pre.model';
import ColNum from './col-num.model';
import ColNom from './col-nom.model';
import { Exp } from './exp.model';

@Table({
  tableName: 'clasificaciones',
  timestamps: false
})
export class Clasificaciones extends Model<Clasificaciones> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => Competiciones)
  @Column({ field: 'id_com' })
  idCom: number;

  @BelongsTo(() => Competiciones)
  competicion: Competiciones;

  @Column({ field: 'referencia1', allowNull: true })
  referencia1: string | null;

  @ForeignKey(() => Equipos)
  @Column({ field: 'id_equ' })
  idEqu: number;

  @BelongsTo(() => Equipos)
  equipo: Equipos;

  @Column({ field: 'posicion', allowNull: true })
  posicion: number | null;

  @Column({ field: 'referencia2', allowNull: true })
  referencia2: string | null;

  @Column({ field: 'puntos', allowNull: true })
  puntos: number | null;

  @Column({ field: 'jugados', allowNull: true })
  jugados: number | null;

  @Column({ field: 'ganados', allowNull: true })
  ganados: number | null;

  @Column({ field: 'empatados', allowNull: true })
  empatados: number | null;

  @Column({ field: 'perdidos', allowNull: true })
  perdidos: number | null;

  @Column({ field: 'afavor', allowNull: true })
  afavor: number | null;

  @Column({ field: 'encontra', allowNull: true })
  encontra: number | null;

  @Column({ field: 'sancion', allowNull: true })
  sancion: number | null;

  @ForeignKey(() => ColPre)
  @Column({ field: 'id_col1', allowNull: true })
  idCol1: number | null;

  @BelongsTo(() => ColPre)
  colPre: ColPre;

  @ForeignKey(() => ColNum)
  @Column({ field: 'id_col2', allowNull: true })
  idCol2: number | null;

  @BelongsTo(() => ColNum)
  colNum: ColNum;

  @ForeignKey(() => ColNom)
  @Column({ field: 'id_col3', allowNull: true })
  idCol3: number | null;

  @BelongsTo(() => ColNom)
  colNom: ColNom;

  @ForeignKey(() => Exp)
  @Column({ field: 'id_exp', allowNull: true })
  idExp: number | null;

  @BelongsTo(() => Exp)
  exp: Exp;

  @Column({ field: 'comentario', allowNull: true, type: DataType.TEXT })
  comentario: string | null;

  @Column({ field: 'fecha_creacion', allowNull: true })
  fechaCreacion: Date | null;

  @Column({ field: 'usuario_creacion', allowNull: true })
  usuarioCreacion: number | null;
}
