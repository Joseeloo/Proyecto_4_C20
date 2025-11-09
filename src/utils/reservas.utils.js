import fs from 'fs/promises';
import path from 'path';
import { env } from '../config/env.config.js';

const { reservasPath } = env.paths;

const asegurarRuta = async () => {
  const carpeta = path.dirname(reservasPath);
  await fs.mkdir(carpeta, { recursive: true });
};

export const leerReservas = async () => {
  try {
    await asegurarRuta();
    const data = await fs.readFile(reservasPath, 'utf-8');
    if (!data) return [];
    return JSON.parse(data);
  } catch (error) {
    if (error.code === 'ENOENT') return [];
    console.error('Error al leer reservas:', error);
    throw new Error('Error al leer reservas');
  }
};

export const escribirReservas = async (reservas) => {
  try {
    await asegurarRuta();
    const dataJson = JSON.stringify(reservas, null, 2);
    await fs.writeFile(reservasPath, dataJson, 'utf-8');
  } catch (error) {
    console.error('Error al escribir reservas:', error);
    throw new Error('Error al escribir reservas');
  }
};
