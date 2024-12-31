import { Button } from "@/components/ui/button"
import { PlusCircle } from 'lucide-react'

export function DashboardHeader() {
  return (
    <div className="flex items-center justify-between space-y-2 mb-4">
      <h2 className="text-3xl font-bold tracking-tight text-black dark:text-white">Dashboard</h2>
      <div className="flex items-center space-x-2">
        <Button className="bg-black text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200">
          <PlusCircle className="mr-2 h-4 w-4" />
          Add Transaction
        </Button>
      </div>
    </div>
  )
}

