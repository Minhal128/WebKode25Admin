import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardCards } from "@/components/dashboard-cards"
import { RecentTransactions } from "@/components/recent-transactions"
import { RecentUserActivity } from "@/components/recent-user-activity"
import { LoanApplications } from "@/components/loan-applications"

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <DashboardHeader />
      <DashboardCards />
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <RecentTransactions />
        </div>
        <div className="space-y-6">
          <RecentUserActivity />
          <LoanApplications />
        </div>
      </div>
    </div>
  )
}
