import { Torneos } from '../models/torneos.model';

export class TorneosController {
  async getAll(ctx) {
    const torneos = await Torneos.findAll();
    ctx.body = torneos;
  }
}
