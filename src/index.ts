import express from 'express';
import cors from 'cors';
import transactionRoutes from './routes/transactions';
import authRoutes from './routes/auth'

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(cors());

// transaction routes
app.use('/transactions', transactionRoutes);

// login routes
app.use('/', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running`);
});