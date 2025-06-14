import { Request, Response } from 'express';
import { transactions } from '../db/mockDB';
import { Transaction } from '../models/Transaction';
import { v4 as uuidv4 } from 'uuid';


export const getTransactions = (_req: Request, res: Response): void => {
  const activeTxs = transactions.filter(tx => !tx.deleted);
  res.json(activeTxs);
};