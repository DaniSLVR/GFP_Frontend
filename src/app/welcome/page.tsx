import Link from 'next/link'
import { Button } from "@/components/ui/button"

export default function WelcomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white p-4">
      <h1 className="text-4xl font-bold mb-6">Welcome to FinanceFlow</h1>
      <p className="text-xl mb-8 text-center max-w-md">
        Take control of your finances with our powerful and intuitive personal finance management tool.
      </p>
      <div className="space-x-4">
        <Button asChild>
          <Link href="/auth">Get Started</Link>
        </Button>
        <Button variant="outline" asChild>
          <Link href="#features">Learn More</Link>
        </Button>
      </div>
      <div id="features" className="mt-16 grid md:grid-cols-3 gap-8 max-w-4xl">
        <FeatureCard
          title="Easy Budgeting"
          description="Set and track your budgets with our intuitive interface."
        />
        <FeatureCard
          title="Expense Tracking"
          description="Automatically categorize and analyze your spending habits."
        />
        <FeatureCard
          title="Financial Goals"
          description="Set savings goals and track your progress over time."
        />
      </div>
    </div>
  )
}

function FeatureCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="bg-white bg-opacity-10 p-6 rounded-lg">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm">{description}</p>
    </div>
  )
}

