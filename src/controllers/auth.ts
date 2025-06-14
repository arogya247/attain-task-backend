import { Request, Response } from 'express';
import { users } from '../db/mockUsers';

export const login = (req: Request, res: Response): void => {
  const { email, password } = req.body;

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (!user) {
    res.status(401).json({ error: 'Invalid credentials' });
    return;
  }

  res.status(200).json({
    message: 'Login successful',
    userId: user.id,
    token: `mock-token-${user.id}`,
  });
};
