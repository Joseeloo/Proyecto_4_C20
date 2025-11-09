import { v4 as uuidv4 } from 'uuid';
import { Reserva } from '../models/Reservas.model.js';
import { leerReservas, escribirReservas } from '../utils/reservas.utils.js';
import { isWithinRange } from '../utils/date.utils.js';
export const crearReservaService = async (data) => {
  const {
    hotel,
    fecha_inicio,
    fecha_fin,
    tipo_habitacion,
    num_huespedes,
    estado,
    nombre_cliente,
    email_cliente,
  } = data;
  if (!hotel || !fecha_inicio || !fecha_fin || !tipo_habitacion || !num_huespedes) {
    throw new Error('Faltan datos obligatorios para crear la reserva.');
  }
  const id = uuidv4();
  const reserva = new Reserva({
    id,
    hotel,
    fecha_inicio,
    fecha_fin,
    tipo_habitacion,
    num_huespedes,
    estado: estado || 'pendiente_pago',
    nombre_cliente,
    email_cliente,
  });
  const reservas = await leerReservas();
  reservas.push(reserva.toJSON());
  await escribirReservas(reservas);
  return reserva.toJSON();
};

export const obtenerTodasReservasService = async (filtros = {}) => {
  const reservas = await leerReservas();
  const {
    hotel,
    fecha_inicio,
    fecha_fin,
    tipo_habitacion,
    estado,
    num_huespedes,
  } = filtros;

  const filtradas = reservas.filter((r) => {
    if (hotel && r.hotel.toLowerCase() !== hotel.toLowerCase()) return false;
    if (tipo_habitacion && r.tipo_habitacion.toLowerCase() !== tipo_habitacion.toLowerCase())
      return false;
    if (estado && r.estado.toLowerCase() !== estado.toLowerCase()) return false;
    if (num_huespedes && Number(r.num_huespedes) < Number(num_huespedes)) {
      return false;
    }
    if (fecha_inicio && fecha_fin) {
      if (!isWithinRange(r.fecha_inicio, fecha_inicio, fecha_fin)) return false;
    }
    return true;
  });
  return filtradas;
};

export const obtenerReservaPorIdService = async (id) => {
  const reservas = await leerReservas();
  return reservas.find((r) => r.id === id) || null;
};

export const actualizarReservaService = async (id, data) => {
  const reservas = await leerReservas();
  const index = reservas.findIndex((r) => r.id === id);
  if (index === -1) return null;
  const reservaActual = reservas[index];
  const reservaActualizada = {
    ...reservaActual,
    ...data,
    num_huespedes:
      data.num_huespedes !== undefined
        ? Number(data.num_huespedes)
        : reservaActual.num_huespedes,
  };
  reservas[index] = reservaActualizada;
  await escribirReservas(reservas);
  return reservaActualizada;
};

export const eliminarReservaService = async (id) => {
  const reservas = await leerReservas();
  const index = reservas.findIndex((r) => r.id === id);
  if (index === -1) return false;
  reservas.splice(index, 1);
  await escribirReservas(reservas);
  return true;
};
