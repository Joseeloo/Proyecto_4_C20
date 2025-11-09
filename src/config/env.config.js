import dotenv from 'dotenv';
import path from 'path';
dotenv.config();

const rutaBase = process.cwd();
const reservasPath = process.env.RESERVAS_PATH
  ? path.resolve(rutaBase, process.env.RESERVAS_PATH)
  : path.resolve(rutaBase, 'src/data/reservas.json');

export const env = {
  port: process.env.PORT || 3000,
  paths: {
    reservasPath,
  },
};