import { DashboardHeader } from "@/components/dashboard-header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Overview } from "@/components/shared/overview"

export default function DashboardPage() {
  return (
    <div className="min-h-screen p-4 md:p-8 pt-6">
      <DashboardHeader />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-4">
        <Card className="bg-white dark:bg-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Total Balance
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-black dark:text-white">$5,231.89</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">+20.1% from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Income
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-black dark:text-white">$3,543.00</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">+8.2% from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Expenses
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-black dark:text-white">$1,849.59</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">+4.5% from last month</p>
          </CardContent>
        </Card>
        <Card className="bg-white dark:bg-gray-800">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Savings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-black dark:text-white">$1,693.41</div>
            <p className="text-xs text-gray-500 dark:text-gray-400">+12.3% from last month</p>
          </CardContent>
        </Card>
      </div>
      <Card className="bg-white dark:bg-gray-800">
        <CardHeader>
          <CardTitle>Monthly Overview</CardTitle>
        </CardHeader>
        <CardContent>
          <Overview />
        </CardContent>
      </Card>
    </div>
  )
}

