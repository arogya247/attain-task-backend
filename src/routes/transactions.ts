import express from 'express';
import {
  createTransaction,
  getTransactions,
  updateTransaction,
} from '../controllers/transactions';

const router = express.Router();

router.get('/', getTransactions);
router.post('/', createTransaction);
router.put('/:id', updateTransaction);


export default router;