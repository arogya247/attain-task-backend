import express from 'express';
import transactionRoutes from './routes/transactions';

const app = express();
const PORT = 3000;

app.use(express.json());

// transaction routes
app.use('/transactions', transactionRoutes);

app.listen(PORT, () => {
  console.log(`Server is running`);
});