import { Table, Column, Model, ForeignKey, PrimaryKey } from 'sequelize-typescript';
import { Col } from './col.model';

@Table({
  tableName: 'col_num',
  underscored: true
})
export default class ColNum extends Model<ColNum> {
  @PrimaryKey
  @ForeignKey(() => Col)
  @Column
  id: number;

  @Column
  hex: string;

  @Column
  descripcion: string;
}
