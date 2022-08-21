import { createContext, ReactNode, useEffect, useState } from 'react'
import { api } from '../lib/axios'

interface TransactionsProps {
  id: string
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface createTransactionInput {
  description: string
  price: number
  category: string
  type: 'income' | 'outcome'
}
interface TransactionsContextProps {
  transactions: TransactionsProps[]
  fetchTransactions: (query?: string) => Promise<void>
  createTransactions: (data: createTransactionInput) => Promise<void>
}

interface TransactionsProviderProps {
  children: ReactNode
}

export const TransactionsContext = createContext({} as TransactionsContextProps)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<TransactionsProps[]>([])

  async function fetchTransactions(query?: string) {
    // recebe uma query de busca
    const response = await api.get('transactions', {
      params: {
        q: query,
      },
    })

    setTransactions(response.data)
  }
  async function createTransactions(data: createTransactionInput) {
    const { description, price, category, type } = data

    const response = await api.post('transactions', {
      description,
      price,
      category,
      type,
      createdAt: new Date(),
    })

    setTransactions((state) => [response.data, ...state])
  }

  useEffect(() => {
    fetchTransactions()
  }, [])

  return (
    <TransactionsContext.Provider
      value={{
        transactions,
        fetchTransactions,
        createTransactions,
      }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
