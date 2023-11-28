import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { config } from '../config';

// DB conection configuration
const DB_CONFIG: SequelizeOptions = {
  database: config.db.database,
  username: config.db.username,
  password: config.db.password,
  host: config.db.host,
  port: config.db.port,
  dialect: 'mariadb',
  pool: {
    max: 30,
    min: 0,
    idle: 200000,
    acquire: 2000000
  },
  dialectOptions: {
    options: {
      requestTimeout: 3000000
    }
  },
  logging: false,
  models: [__dirname + '/*.model.ts'],
  modelMatch: (filename, member) => {
    return filename.substring(0, filename.indexOf('.model')) === member.toLowerCase();
  }
};

/**
 * It Initialices DB and its models
 */
module.exports.init = async () => {
  const sequelize = new Sequelize(DB_CONFIG);
  await sequelize.sync();
  return sequelize;
};
