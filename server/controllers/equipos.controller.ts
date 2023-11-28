import { Context } from 'koa';
import { Equipos } from '../models/equipos.model';
import ENombres from '../models/e_nombres.model';
import { Op } from 'sequelize';

export class EquiposController {
  async getAll(ctx: Context) {
    const equipos = await Equipos.findAll({
      include: [ENombres]
    });
    ctx.body = equipos;
  }

  async getByIdYear(ctx: Context) {
    const equipo: Equipos = await Equipos.findOne({
      where: {
        id: ctx.params.id
      },
      include: [
        {
          model: ENombres,
          where: {
            inicio: {
              [Op.lte]: ctx.params.year
            },
            fin: {
              [Op.gte]: ctx.params.year
            }
          }
        }
      ]
    });
    ctx.body = equipo;
  }
}
