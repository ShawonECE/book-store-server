import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { bookRoutes } from './app/modules/product/product.route';
import { orderRoutes } from './app/modules/order/order.route';

const app: Application = express();

//parsers
app.use(express.json());
app.use(cors());
app.use("/api/products", bookRoutes);
app.use("/api/orders", orderRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to the book shop!');
});

export default app; 