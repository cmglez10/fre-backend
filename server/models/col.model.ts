import { Table, Column, Model } from 'sequelize-typescript';

@Table({
  tableName: 'col'
})
export class Col extends Model<Col> {
  @Column({ primaryKey: true, autoIncrement: true })
  id: number;

  @Column
  hex: string;

  @Column
  descripcion: string;
}
