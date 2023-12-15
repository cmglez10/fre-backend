import * as KoaRouter from 'koa-router';
import { MainController } from './controllers/main.controller';
import { FederacionesController } from './controllers/federaciones.controller';
import { CategoriasController } from './controllers/categorias.controller';
import { ClasificacionesController } from './controllers/clasificaciones.controller';
import { CompeticionesController } from './controllers/competiciones.controller';
import { EquiposController } from './controllers/equipos.controller';
import { TorneosController } from './controllers/torneos.controller';

const mainController = new MainController();
const categoriasController = new CategoriasController();
const clasificacionesController = new ClasificacionesController();
const federacionesController = new FederacionesController();
const competicionesController = new CompeticionesController();
const equiposController = new EquiposController();
const torneosController = new TorneosController();

export const router = new KoaRouter();

router
  .get('/api/', mainController.health)
  .get('/api/federaciones', federacionesController.getAll)
  .get('/api/categorias', categoriasController.getAll)
  .get('/api/clasificaciones', clasificacionesController.getAll)
  .get('/api/clasificaciones/:id', clasificacionesController.getById)
  .get('/api/competiciones', competicionesController.getAll)
  .get('/api/equipos', equiposController.getAll)
  .get('/api/equipo/:id/:year', equiposController.getByIdYear)
  .get('/api/torneos', torneosController.getAll);
