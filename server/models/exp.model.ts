import { Table, Column, Model, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Col } from './col.model';

@Table({ tableName: 'exp' })
export class Exp extends Model {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @ForeignKey(() => Col)
  @Column({ field: 'id_col' })
  idCol: number;

  @BelongsTo(() => Col)
  col: Col;

  @Column({ field: 'explicacion' })
  explicacion: string;
}
