import cors from 'cors';
import express, { json } from 'express';
import 'express-async-errors';
import { errorHandlerMiddleware } from './middlewares/errorHandlerMiddleware';
import itemRouter from './routes/itemRouter';

const app = express();
app.use(json());
app.use(cors());
app.use(itemRouter);
app.use(errorHandlerMiddleware);

export default app;
