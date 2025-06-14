import express from 'express';
import {
  createTransaction,
  deleteTransaction,
  getTransactions,
  updateTransaction,
} from '../controllers/transactions';

const router = express.Router();

router.get('/', getTransactions);
router.post('/', createTransaction);
router.put('/:id', updateTransaction);
router.delete('/:id', deleteTransaction);


export default router;