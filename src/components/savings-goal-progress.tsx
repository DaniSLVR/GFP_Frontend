"use client"

import { Progress } from "@/components/ui/progress"

const savingsGoals = [
  { name: "Emergency Fund", current: 5000, target: 10000 },
  { name: "Vacation", current: 2000, target: 5000 },
  { name: "New Car", current: 15000, target: 30000 },
]

export function SavingsGoalProgress() {
  return (
    <div className="space-y-8">
      {savingsGoals.map((goal) => (
        <div key={goal.name} className="space-y-2">
          <div className="flex justify-between">
            <span className="font-medium">{goal.name}</span>
            <span className="text-muted-foreground">${goal.current} / ${goal.target}</span>
          </div>
          <Progress value={(goal.current / goal.target) * 100} />
        </div>
      ))}
    </div>
  )
}

