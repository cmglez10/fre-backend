import { Clasificaciones } from '../models/clasificaciones.model';

export class ClasificacionesController {
  async getAll(ctx) {
    const clasificaciones = await Clasificaciones.findAll();
    ctx.body = clasificaciones;
  }

  async getById(ctx) {
    const clasificacion = await Clasificaciones.findAll({
      where: {
        idCom: ctx.params.id
      }
    });
    ctx.body = clasificacion;
  }
}
