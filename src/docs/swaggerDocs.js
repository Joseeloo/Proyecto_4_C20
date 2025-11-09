// src/docs/swaggerDocs.js
import { env } from '../config/env.config.js';

const serverUrl = process.env.SERVER_URL || `http://localhost:${env.port}`;

export const swaggerDocs = {
  openapi: '3.0.0',
  info: {
    title: 'API de Reservas Hoteleras - Proyecto 4 - DWFS',
    version: '1.0.0',
    description: 'API para la gestión de reservas de hotel: CRUD y filtros.',
  },
  servers: [
    {
      url: serverUrl,
      description: 'Servidor actual',
    },
  ],
  components: {
    schemas: {
      Reserva: {
        type: 'object',
        properties: {
          id: {
            type: 'string',
            description: 'ID único de la reserva',
          },
          hotel: {
            type: 'string',
            description: 'Nombre del hotel',
          },
          fecha_inicio: {
            type: 'string',
            format: 'date',
            description: 'Fecha de inicio (YYYY-MM-DD)',
          },
          fecha_fin: {
            type: 'string',
            format: 'date',
            description: 'Fecha de término (YYYY-MM-DD)',
          },
          tipo_habitacion: {
            type: 'string',
            description: 'Tipo de habitación (simple, doble, suite, familiar, etc.)',
          },
          num_huespedes: {
            type: 'integer',
            description: 'Número de huéspedes',
          },
          estado: {
            type: 'string',
            description: 'Estado de la reserva (pendiente_pago, confirmada, cancelada)',
          },
          nombre_cliente: {
            type: 'string',
            description: 'Nombre del cliente',
          },
          email_cliente: {
            type: 'string',
            format: 'email',
            description: 'Correo del cliente',
          },
        },
        required: [
          'hotel',
          'fecha_inicio',
          'fecha_fin',
          'tipo_habitacion',
          'num_huespedes',
        ],
      },
    },
  },
  paths: {
    '/api/reservas': {
      post: {
        summary: 'Crear una nueva reserva',
        tags: ['Reservas'],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Reserva',
              },
            },
          },
        },
        responses: {
          201: {
            description: 'Reserva creada con éxito',
          },
          400: {
            description: 'Error en los datos enviados',
          },
        },
      },
      get: {
        summary: 'Obtener lista de reservas (con filtros opcionales)',
        tags: ['Reservas'],
        parameters: [
          {
            in: 'query',
            name: 'hotel',
            schema: { type: 'string' },
            description: 'Filtrar por nombre de hotel',
          },
          {
            in: 'query',
            name: 'fecha_inicio',
            schema: { type: 'string', format: 'date' },
            description: 'Fecha de inicio del rango',
          },
          {
            in: 'query',
            name: 'fecha_fin',
            schema: { type: 'string', format: 'date' },
            description: 'Fecha de fin del rango',
          },
          {
            in: 'query',
            name: 'tipo_habitacion',
            schema: { type: 'string' },
            description: 'Filtrar por tipo de habitación',
          },
          {
            in: 'query',
            name: 'estado',
            schema: { type: 'string' },
            description: 'Filtrar por estado de la reserva',
          },
          {
            in: 'query',
            name: 'num_huespedes',
            schema: { type: 'integer' },
            description: 'Filtrar por mínimo de huéspedes',
          },
        ],
        responses: {
          200: {
            description: 'Lista de reservas obtenida con éxito',
          },
          500: {
            description: 'Error interno del servidor',
          },
        },
      },
    },
    '/api/reservas/{id}': {
      get: {
        summary: 'Obtener una reserva por ID',
        tags: ['Reservas'],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            description: 'ID de la reserva',
          },
        ],
        responses: {
          200: {
            description: 'Reserva encontrada',
          },
          404: {
            description: 'Reserva no encontrada',
          },
        },
      },
      put: {
        summary: 'Actualizar una reserva por ID',
        tags: ['Reservas'],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            description: 'ID de la reserva',
          },
        ],
        requestBody: {
          required: true,
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Reserva',
              },
            },
          },
        },
        responses: {
          200: {
            description: 'Reserva actualizada con éxito',
          },
          404: {
            description: 'Reserva no encontrada',
          },
        },
      },
      delete: {
        summary: 'Eliminar una reserva por ID',
        tags: ['Reservas'],
        parameters: [
          {
            in: 'path',
            name: 'id',
            required: true,
            schema: { type: 'string' },
            description: 'ID de la reserva',
          },
        ],
        responses: {
          200: {
            description: 'Reserva eliminada con éxito',
          },
          404: {
            description: 'Reserva no encontrada',
          },
        },
      },
    },
  },
};
