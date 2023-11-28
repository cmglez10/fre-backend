import * as Koa from 'koa';
import { router } from './routes';
const database = require('./models');
import * as BodyParser from 'koa-bodyparser';

const app = new Koa();
let db;

app.use(BodyParser());
app.use(router.routes());

app.listen(3000);
console.log('Server running');

(async function initService() {
  try {
    console.log('Lets start...');

    db = await database.init(false);
  } catch (error) {
    console.error(error.message, error.stack);
  }
})();
