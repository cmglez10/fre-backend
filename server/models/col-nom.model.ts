import { Table, Column, Model, ForeignKey, PrimaryKey } from 'sequelize-typescript';
import { Col } from './col.model';

@Table({
  tableName: 'col_nom',
  underscored: true
})
export default class ColNom extends Model<ColNom> {
  @PrimaryKey
  @ForeignKey(() => Col)
  @Column
  id: number;

  @Column
  hex: string;

  @Column
  descripcion: string;
}
