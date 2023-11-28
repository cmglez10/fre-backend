import { Federaciones } from '../models/federaciones.model';

export class FederacionesController {
  async getAll(ctx) {
    const federaciones = await Federaciones.findAll();
    ctx.body = federaciones;
  }
}
