import { Competiciones } from '../models/competiciones.model';

export class CompeticionesController {
  async getAll(ctx) {
    const competiciones = await Competiciones.findAll();
    ctx.body = competiciones;
  }
}
