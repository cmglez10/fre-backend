import { Table, Column, Model, ForeignKey, PrimaryKey } from 'sequelize-typescript';
import { Col } from './col.model';

@Table({
  tableName: 'col_pre',
  underscored: true
})
export default class ColPre extends Model<ColPre> {
  @PrimaryKey
  @ForeignKey(() => Col)
  @Column
  id: number;

  @Column
  hex: string;

  @Column
  descripcion: string;
}
