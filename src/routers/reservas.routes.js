import { Router } from 'express';
import { crearReservaController, obtenerReservasController, obtenerReservaPorIdController, actualizarReservaController, eliminarReservaController } from '../controllers/reservas.controller.js';

const router = Router();

router.post('/', crearReservaController);
router.get('/', obtenerReservasController);
router.get('/:id', obtenerReservaPorIdController);
router.put('/:id', actualizarReservaController);
router.delete('/:id', eliminarReservaController);

export default router;
