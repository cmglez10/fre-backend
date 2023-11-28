import { Categorias } from '../models/categorias.model';

export class CategoriasController {
  async getAll(ctx) {
    const categorias = await Categorias.findAll();
    ctx.body = categorias;
  }
}
