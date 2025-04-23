import { UsersTable } from "@/components/users-table"
import { UserFilters } from "@/components/user-filters"

export default function UsersPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col justify-between gap-4 border-b pb-4 md:flex-row md:items-center">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">User Management</h2>
          <p className="text-muted-foreground">View and manage all user accounts and activity logs.</p>
        </div>
      </div>
      <UserFilters />
      <UsersTable />
    </div>
  )
}
