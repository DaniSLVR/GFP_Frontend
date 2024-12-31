import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"

const accounts = [
  { name: "Main Checking", type: "Checking", balance: 5678.90, institution: "Bank of America" },
  { name: "High-Yield Savings", type: "Savings", balance: 4321.09, institution: "Ally Bank" },
  { name: "Investment Portfolio", type: "Investment", balance: 2345.68, institution: "Vanguard" },
  { name: "Credit Card", type: "Credit", balance: -1234.56, institution: "Chase" },
]

export function AccountsList() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Account Name</TableHead>
          <TableHead>Type</TableHead>
          <TableHead>Institution</TableHead>
          <TableHead className="text-right">Balance</TableHead>
          <TableHead></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {accounts.map((account) => (
          <TableRow key={account.name}>
            <TableCell className="font-medium">{account.name}</TableCell>
            <TableCell>{account.type}</TableCell>
            <TableCell>{account.institution}</TableCell>
            <TableCell className="text-right">
              ${account.balance.toFixed(2)}
            </TableCell>
            <TableCell>
              <Button variant="ghost">View</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

