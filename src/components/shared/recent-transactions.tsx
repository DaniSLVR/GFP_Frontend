"use client"

import { useState } from "react"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const transactions = [
  {
    id: "1",
    payee: "Spotify",
    amount: -9.99,
    date: "2023-06-01",
    category: "Entertainment",
  },
  {
    id: "2",
    payee: "Grocery Store",
    amount: -65.47,
    date: "2023-06-02",
    category: "Food",
  },
  {
    id: "3",
    payee: "Gas Station",
    amount: -40.00,
    date: "2023-06-03",
    category: "Transport",
  },
  {
    id: "4",
    payee: "Salary",
    amount: 3000.00,
    date: "2023-06-05",
    category: "Income",
  },
  {
    id: "5",
    payee: "Amazon",
    amount: -120.99,
    date: "2023-06-07",
    category: "Shopping",
  },
]

export function RecentTransactions() {
  const [searchTerm, setSearchTerm] = useState("")
  const [sortColumn, setSortColumn] = useState("date")
  const [sortDirection, setSortDirection] = useState("desc")

  const filteredTransactions = transactions.filter(
    (transaction) =>
      transaction.payee.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const sortedTransactions = [...filteredTransactions].sort((a, b) => {
    if (a[sortColumn] < b[sortColumn]) return sortDirection === "asc" ? -1 : 1
    if (a[sortColumn] > b[sortColumn]) return sortDirection === "asc" ? 1 : -1
    return 0
  })

  const handleSort = (column) => {
    if (column === sortColumn) {
      setSortDirection(sortDirection === "asc" ? "desc" : "asc")
    } else {
      setSortColumn(column)
      setSortDirection("asc")
    }
  }

  return (
    <div>
      <div className="flex items-center py-4">
        <Input
          placeholder="Search transactions..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="max-w-sm"
        />
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">
              <Button variant="ghost" onClick={() => handleSort("date")}>
                Date
                {sortColumn === "date" && (sortDirection === "asc" ? " ↑" : " ↓")}
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" onClick={() => handleSort("payee")}>
                Payee
                {sortColumn === "payee" && (sortDirection === "asc" ? " ↑" : " ↓")}
              </Button>
            </TableHead>
            <TableHead>
              <Button variant="ghost" onClick={() => handleSort("category")}>
                Category
                {sortColumn === "category" && (sortDirection === "asc" ? " ↑" : " ↓")}
              </Button>
            </TableHead>
            <TableHead className="text-right">
              <Button variant="ghost" onClick={() => handleSort("amount")}>
                Amount
                {sortColumn === "amount" && (sortDirection === "asc" ? " ↑" : " ↓")}
              </Button>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedTransactions.map((transaction) => (
            <TableRow key={transaction.id}>
              <TableCell className="font-medium">{transaction.date}</TableCell>
              <TableCell>{transaction.payee}</TableCell>
              <TableCell>{transaction.category}</TableCell>
              <TableCell className={`text-right ${transaction.amount < 0 ? 'text-red-500' : 'text-green-500'}`}>
                ${Math.abs(transaction.amount).toFixed(2)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

