import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';
import pingRoutes from './routes/pingRoutes.js';
import helmet from 'helmet';

const app = express();

app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      fontSrc: ["'self'", 'data:', 'http://localhost:3000'],
    },
  })
);

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/login');
app.use('/ping', pingRoutes);

export default app;
