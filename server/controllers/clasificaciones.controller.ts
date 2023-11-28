import { Clasificaciones } from '../models/clasificaciones.model';

export class ClasificacionesController {
  async getAll(ctx) {
    const clasificaciones = await Clasificaciones.findAll();
    ctx.body = clasificaciones;
  }
}
