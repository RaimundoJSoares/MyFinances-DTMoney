import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";

interface TransactionsProps {
  id: string;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionsContextProps {
  transactions: TransactionsProps[];
  fetchTransactions : (query?:string) => Promise<void>
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext(
  {} as TransactionsContextProps
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([]);

  async function fetchTransactions( query?: string ) { //recebe uma query de busca
   const response = await api.get('transactions', {
      params: {
        q: query,
      }
   })

    setTransactions(response.data)
 }

         useEffect(() => {
            fetchTransactions()
        },
         [])

  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
