"use client"

import { Cell, Pie, PieChart, ResponsiveContainer, Legend, Tooltip } from "recharts"

const data = [
  { name: "Food", value: 400 },
  { name: "Transport", value: 300 },
  { name: "Entertainment", value: 200 },
  { name: "Utilities", value: 100 },
  { name: "Shopping", value: 150 },
]

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8']

export function ExpenseDistribution() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  )
}

