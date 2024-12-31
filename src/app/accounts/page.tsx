import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AccountsList } from "@/components/accounts-list"
import { AccountBalance } from "@/components/account-balance"
import { Button } from "@/components/ui/button"
import { Plus } from 'lucide-react'

export default function AccountsPage() {
  return (
    <div className="flex-1 space-y-4 p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Accounts</h2>
        <Button>
          <Plus className="mr-2 h-4 w-4" /> Add Account
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Balance</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,345.67</div>
            <p className="text-xs text-muted-foreground">Across all accounts</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Checking</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$5,678.90</div>
            <p className="text-xs text-muted-foreground">Main checking account</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Savings</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$4,321.09</div>
            <p className="text-xs text-muted-foreground">High-yield savings</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Investment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$2,345.68</div>
            <p className="text-xs text-muted-foreground">Stock portfolio</p>
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Account List</CardTitle>
            <CardDescription>Manage your linked accounts</CardDescription>
          </CardHeader>
          <CardContent>
            <AccountsList />
          </CardContent>
        </Card>
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Account Balance History</CardTitle>
            <CardDescription>Track your account balance over time</CardDescription>
          </CardHeader>
          <CardContent>
            <AccountBalance />
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

