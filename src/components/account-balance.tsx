"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { date: "Jan 1", balance: 10000 },
  { date: "Feb 1", balance: 10500 },
  { date: "Mar 1", balance: 11200 },
  { date: "Apr 1", balance: 11800 },
  { date: "May 1", balance: 12300 },
  { date: "Jun 1", balance: 12800 },
  { date: "Jul 1", balance: 13500 },
]

export function AccountBalance() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={data}>
        <XAxis
          dataKey="date"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Tooltip />
        <Line type="monotone" dataKey="balance" stroke="#8884d8" strokeWidth={2} />
      </LineChart>
    </ResponsiveContainer>
  )
}

