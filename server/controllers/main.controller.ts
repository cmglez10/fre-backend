
export class MainController {
  async health(ctx) {
    ctx.body = { ok: 'Health check OK' };
  }

}
