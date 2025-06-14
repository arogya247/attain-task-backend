export type Transaction = {
    id: string;
    userId: string;
    payee: string;
    amount: number;
    category: string;  // eg. food, medicines, travel etc
    date: string;
    deleted?: boolean; // for soft-delete
  };
  