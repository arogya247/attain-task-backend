import { Request, Response } from 'express';
import { transactions } from '../db/mockDB';
import { Transaction } from '../models/Transaction';
import { v4 as uuidv4 } from 'uuid';


export const createTransaction = (req: Request, res: Response): void => {

  const { userId, payee, amount, category, date } = req.body;

  if (!userId || !payee || !amount || !category || !date) {
    res.status(400).json({ error: 'Missing required fields' });
    return
  }

  const newTx: Transaction = {
    id: uuidv4(),
    userId,
    payee,
    amount,
    category,
    date,
    deleted: false,
  };

  transactions.push(newTx);
  res.status(201).json(newTx);
};

export const getTransactions = (_req: Request, res: Response): void => {
  const activeTxs = transactions.filter(tx => !tx.deleted);
  res.json(activeTxs);
};

export const updateTransaction = (req: Request, res: Response): void => {
  const { id } = req.params;
  const tx = transactions.find(tx => tx.id === id && !tx.deleted);

  if (!tx) {
    res.status(404).json({ error: 'Transaction not found' });
    return;
  }

  const { payee, amount, category, date } = req.body;

  if (payee !== undefined) tx.payee = payee;
  if (amount !== undefined) tx.amount = amount;
  if (category !== undefined) tx.category = category;
  if (date !== undefined) tx.date = date;

  res.json(tx);
};

export const deleteTransaction = (req: Request, res: Response): void => {
  const { id } = req.params;
  const tx = transactions.find(tx => tx.id === id && !tx.deleted);

  if (!tx) {
    res.status(404).json({ error: 'Transaction not found' });
    return;
  }

  tx.deleted = true;
  res.status(204).send(); // No content
};