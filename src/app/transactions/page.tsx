import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { RecentTransactions } from "@/components/shared/recent-transactions"
import { ExpenseDistribution } from "@/components/shared/expense-distribution"

export default function TransactionsPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Transactions</h1>
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Recent Transactions</CardTitle>
          </CardHeader>
          <CardContent>
            <RecentTransactions />
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Expense Distribution</CardTitle>
          </CardHeader>
          <CardContent>
            <ExpenseDistribution />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

