import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from "@/components/shared/overview"
import { ExpenseDistribution } from "@/components/shared/expense-distribution"
import { Button } from "@/components/ui/button"
import { Download } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { IncomeVsExpenses } from "@/components/income-vs-expenses"
import { SavingsGoalProgress } from "@/components/savings-goal-progress"

export default function AnalyticsPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Analytics</h2>
        <Button>
          <Download className="mr-2 h-4 w-4" /> Export Data
        </Button>
      </div>
      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="income-expenses">Income vs Expenses</TabsTrigger>
          <TabsTrigger value="savings">Savings</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Average Monthly Savings
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">$523.12</div>
                <p className="text-xs text-muted-foreground">
                  +15.2% from last year
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Expense Growth Rate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3.2%</div>
                <p className="text-xs text-muted-foreground">
                  -2.1% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Income Growth Rate
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5.8%</div>
                <p className="text-xs text-muted-foreground">
                  +1.2% from last month
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Net Worth Growth
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">8.3%</div>
                <p className="text-xs text-muted-foreground">
                  +2.5% from last year
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Financial Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <Overview />
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Expense Distribution</CardTitle>
                <CardDescription>Your top spending categories</CardDescription>
              </CardHeader>
              <CardContent>
                <ExpenseDistribution />
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent value="income-expenses" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Income vs Expenses</CardTitle>
              <CardDescription>Compare your income and expenses over time</CardDescription>
            </CardHeader>
            <CardContent className="pt-2">
              <IncomeVsExpenses />
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="savings" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Savings Goal Progress</CardTitle>
              <CardDescription>Track your progress towards your savings goals</CardDescription>
            </CardHeader>
            <CardContent>
              <SavingsGoalProgress />
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

