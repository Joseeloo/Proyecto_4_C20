import { crearReservaService, obtenerTodasReservasService, obtenerReservaPorIdService, actualizarReservaService, eliminarReservaService } from '../services/reservas.service.js';

export const crearReservaController = async (req, res) => {
  try {
    const data = req.body;
    const reserva = await crearReservaService(data);

    res.status(201).json({
      message: 'Reserva creada con éxito.',
      statusCode: 201,
      data: reserva,
    });
  } catch (error) {
    res.status(400).json({
      message: error.message || 'No se pudo crear la reserva.',
      statusCode: 400,
    });
  }
};

export const obtenerReservasController = async (req, res) => {
    try {
        const filtros = req.query;
        const reservas = await obtenerTodasReservasService(filtros);
        res.status(200).json({
        message: 'Reservas obtenidas con éxito.',
        statusCode: 200,
        data: reservas,
        });
    } catch (error) {
        res.status(500).json({
        message: 'Error al obtener las reservas.',
        statusCode: 500,
        });
    }
};

export const obtenerReservaPorIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const reserva = await obtenerReservaPorIdService(id);
        if (!reserva) {
        return res.status(404).json({
            message: 'Reserva no encontrada.',
            statusCode: 404,
        });
        }
        res.status(200).json({
        message: 'Reserva obtenida con éxito.',
        statusCode: 200,
        data: reserva,
        });
    } catch (error) {
        res.status(500).json({
        message: 'Error al obtener la reserva.',
        statusCode: 500,
        });
    }
};

export const actualizarReservaController = async (req, res) => {
    try {
        const { id } = req.params;
        const data = req.body;
        const reservaActualizada = await actualizarReservaService(id, data);
        if (!reservaActualizada) {
        return res.status(404).json({
            message: 'Reserva no encontrada.',
            statusCode: 404,
        });
        }
        res.status(200).json({
        message: 'Reserva actualizada con éxito.',
        statusCode: 200,
        data: reservaActualizada,
        });
    } catch (error) {
        res.status(500).json({
        message: 'Error al actualizar la reserva.',
        statusCode: 500,
        });
    }
};

export const eliminarReservaController = async (req, res) => {
    try {
        const { id } = req.params;
        const eliminada = await eliminarReservaService(id);
        if (!eliminada) {
        return res.status(404).json({
            message: 'Reserva no encontrada.',
            statusCode: 404,
        });
        }
        res.status(200).json({
        message: 'Reserva eliminada con éxito.',
        statusCode: 200,
        });
    } catch (error) {
        res.status(500).json({
        message: 'Error al eliminar la reserva.',
        statusCode: 500,
        });
    }
};
