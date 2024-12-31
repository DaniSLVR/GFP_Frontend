"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip, Legend } from "recharts"

const data = [
  { month: "Jan", income: 4000, expenses: 2400 },
  { month: "Feb", income: 3000, expenses: 1398 },
  { month: "Mar", income: 2000, expenses: 9800 },
  { month: "Apr", income: 2780, expenses: 3908 },
  { month: "May", income: 1890, expenses: 4800 },
  { month: "Jun", income: 2390, expenses: 3800 },
  { month: "Jul", income: 3490, expenses: 4300 },
]

export function IncomeVsExpenses() {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart data={data}>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="income" fill="#8884d8" name="Income" />
        <Bar dataKey="expenses" fill="#82ca9d" name="Expenses" />
      </BarChart>
    </ResponsiveContainer>
  )
}

