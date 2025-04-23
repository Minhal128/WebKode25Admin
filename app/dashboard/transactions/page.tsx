import { TransactionsTable } from "@/components/transactions-table"
import { TransactionFilters } from "@/components/transaction-filters"

export default function TransactionsPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 border-b pb-4 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Transactions</h2>
          <p className="text-muted-foreground">View and manage all financial transactions across the platform.</p>
        </div>
      </div>
      <TransactionFilters />
      <TransactionsTable />
    </div>
  )
}
