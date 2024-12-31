import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"
import { Plus } from 'lucide-react'

const goals = [
  { name: "Emergency Fund", current: 5000, target: 10000, description: "6 months of living expenses" },
  { name: "Vacation", current: 2000, target: 5000, description: "Summer trip to Europe" },
  { name: "New Car", current: 15000, target: 30000, description: "Electric vehicle fund" },
  { name: "Home Down Payment", current: 20000, target: 60000, description: "20% down payment for a house" },
]

export default function GoalsPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Savings Goals</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add New Goal
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2">
        {goals.map((goal) => (
          <Card key={goal.name}>
            <CardHeader>
              <CardTitle>{goal.name}</CardTitle>
              <CardDescription>{goal.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Progress value={(goal.current / goal.target) * 100} className="w-full" />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>${goal.current.toLocaleString()}</span>
                  <span>${goal.target.toLocaleString()}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  {((goal.current / goal.target) * 100).toFixed(1)}% completed
                </p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

