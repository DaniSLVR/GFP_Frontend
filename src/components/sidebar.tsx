"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Home, DollarSign, PiggyBank, Settings, BarChart2, CreditCard } from 'lucide-react'
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ThemeToggle } from "@/components/theme-toggle"

const navItems = [
  { icon: Home, label: 'Dashboard', href: '/' },
  { icon: BarChart2, label: 'Analytics', href: '/analytics' },
  { icon: DollarSign, label: 'Transactions', href: '/transactions' },
  { icon: CreditCard, label: 'Accounts', href: '/accounts' },
  { icon: PiggyBank, label: 'Goals', href: '/goals' },
  { icon: Settings, label: 'Settings', href: '/settings' },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex flex-col w-64 bg-card border-r">
      <div className="p-6">
        <h1 className="text-2xl font-bold text-primary">FinanceFlow</h1>
      </div>
      <ScrollArea className="flex-1 px-3">
        <nav className="flex flex-col gap-1">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant={pathname === item.href ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start",
                pathname === item.href && "bg-muted"
              )}
              asChild
            >
              <Link href={item.href}>
                <item.icon className="mr-2 h-4 w-4" />
                {item.label}
              </Link>
            </Button>
          ))}
        </nav>
      </ScrollArea>
      <div className="p-6">
        <ThemeToggle />
        <p className="text-sm text-muted-foreground mt-4">© 2023 FinanceFlow</p>
      </div>
    </div>
  )
}

