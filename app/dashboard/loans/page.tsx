import { LoansTable } from "@/components/loans-table"
import { LoanFilters } from "@/components/loan-filters"

export default function LoansPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 border-b pb-4 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">Loan Management</h2>
          <p className="text-muted-foreground">Review, approve, and manage loan applications and active loans.</p>
        </div>
      </div>
      <LoanFilters />
      <LoansTable />
    </div>
  )
}
