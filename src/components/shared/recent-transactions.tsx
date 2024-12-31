import React from 'react'
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface Transaction {
  id: string
  amount: number
  date: string
  description: string
}

interface RecentTransactionsProps {
  limit?: number
}

const mockTransactions: Transaction[] = [
  { id: '1', amount: 100, date: '2023-04-01', description: 'Grocery shopping' },
  { id: '2', amount: 50, date: '2023-04-02', description: 'Gas station' },
  { id: '3', amount: 200, date: '2023-04-03', description: 'Online purchase' },
  { id: '4', amount: 75, date: '2023-04-04', description: 'Restaurant' },
  { id: '5', amount: 150, date: '2023-04-05', description: 'Utility bill' },
]

export function RecentTransactions({ limit = 5 }: RecentTransactionsProps) {
  const transactions = mockTransactions.slice(0, limit)

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Date</TableHead>
          <TableHead>Description</TableHead>
          <TableHead className="text-right">Amount</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {transactions.map((transaction) => (
          <TableRow key={transaction.id}>
            <TableCell>{transaction.date}</TableCell>
            <TableCell>{transaction.description}</TableCell>
            <TableCell className="text-right">${transaction.amount.toFixed(2)}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

