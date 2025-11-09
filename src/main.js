import express from 'express';
import { env } from './config/env.config.js';
import reservasRouter from './routers/reservas.routes.js';
import swaggerUi from 'swagger-ui-express';
import { swaggerDocs } from './docs/swaggerDocs.js';

const app = express();
const { port } = env;

app.use(express.json());

app.use('/api/reservas', reservasRouter);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.get('/', (req, res) => {
  res.json({ message: 'API de Reservas Hoteleras funcionando.' });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
