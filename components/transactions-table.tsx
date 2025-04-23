"use client"

import { useState } from "react"
import {
  ArrowDownIcon,
  ArrowUpDown,
  ArrowUpIcon,
  CheckCircle2,
  Clock,
  MoreHorizontal,
  Search,
  XCircle,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

const transactions = [
  {
    id: "T1234",
    type: "deposit",
    amount: 250.0,
    status: "completed",
    user: "John Doe",
    date: "2023-04-23T10:23:00",
    description: "Salary deposit",
  },
  {
    id: "T1235",
    type: "withdrawal",
    amount: 100.0,
    status: "completed",
    user: "Alice Smith",
    date: "2023-04-22T14:45:00",
    description: "ATM withdrawal",
  },
  {
    id: "T1236",
    type: "loan_disbursement",
    amount: 5000.0,
    status: "completed",
    user: "Robert Johnson",
    date: "2023-04-21T09:15:00",
    description: "Personal loan disbursement",
  },
  {
    id: "T1237",
    type: "transfer",
    amount: 750.0,
    status: "pending",
    user: "Emma Wilson",
    date: "2023-04-20T08:30:00",
    description: "Transfer to external account",
  },
  {
    id: "T1238",
    type: "payment",
    amount: 350.0,
    status: "failed",
    user: "Michael Brown",
    date: "2023-04-19T16:20:00",
    description: "Bill payment",
  },
  {
    id: "T1239",
    type: "deposit",
    amount: 1200.0,
    status: "completed",
    user: "Sarah Williams",
    date: "2023-04-18T11:10:00",
    description: "Check deposit",
  },
  {
    id: "T1240",
    type: "loan_repayment",
    amount: 450.0,
    status: "completed",
    user: "David Miller",
    date: "2023-04-17T13:25:00",
    description: "Loan repayment",
  },
]

export function TransactionsTable() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredTransactions = transactions.filter(
    (transaction) =>
      transaction.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.description.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Transactions</CardTitle>
            <CardDescription>View and manage all financial transactions.</CardDescription>
          </div>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
              placeholder="Search transactions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-8"
            />
            <Button size="sm" variant="secondary" className="h-8 px-2 lg:px-3">
              <Search className="h-4 w-4" />
              <span className="sr-only">Search</span>
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>
                <div className="flex items-center space-x-1">
                  <span>Amount</span>
                  <ArrowUpDown className="h-3 w-3" />
                </div>
              </TableHead>
              <TableHead>Status</TableHead>
              <TableHead>User</TableHead>
              <TableHead>
                <div className="flex items-center space-x-1">
                  <span>Date</span>
                  <ArrowUpDown className="h-3 w-3" />
                </div>
              </TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredTransactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell className="font-medium">{transaction.id}</TableCell>
                <TableCell>
                  <div className="flex items-center">
                    {transaction.type === "deposit" && (
                      <>
                        <div className="mr-2 rounded-full bg-emerald-100 p-1">
                          <ArrowDownIcon className="h-3 w-3 text-emerald-600" />
                        </div>
                        Deposit
                      </>
                    )}
                    {transaction.type === "withdrawal" && (
                      <>
                        <div className="mr-2 rounded-full bg-red-100 p-1">
                          <ArrowUpIcon className="h-3 w-3 text-red-600" />
                        </div>
                        Withdrawal
                      </>
                    )}
                    {transaction.type === "loan_disbursement" && (
                      <>
                        <div className="mr-2 rounded-full bg-emerald-100 p-1">
                          <ArrowDownIcon className="h-3 w-3 text-emerald-600" />
                        </div>
                        Loan Disbursement
                      </>
                    )}
                    {transaction.type === "transfer" && (
                      <>
                        <div className="mr-2 rounded-full bg-amber-100 p-1">
                          <Clock className="h-3 w-3 text-amber-600" />
                        </div>
                        Transfer
                      </>
                    )}
                    {transaction.type === "payment" && (
                      <>
                        <div className="mr-2 rounded-full bg-red-100 p-1">
                          <XCircle className="h-3 w-3 text-red-600" />
                        </div>
                        Payment
                      </>
                    )}
                    {transaction.type === "loan_repayment" && (
                      <>
                        <div className="mr-2 rounded-full bg-blue-100 p-1">
                          <ArrowUpIcon className="h-3 w-3 text-blue-600" />
                        </div>
                        Loan Repayment
                      </>
                    )}
                  </div>
                </TableCell>
                <TableCell>${transaction.amount.toFixed(2)}</TableCell>
                <TableCell>
                  {transaction.status === "completed" && (
                    <Badge variant="outline" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
                      <CheckCircle2 className="mr-1 h-3 w-3" />
                      Completed
                    </Badge>
                  )}
                  {transaction.status === "pending" && (
                    <Badge variant="outline" className="bg-amber-50 text-amber-700 hover:bg-amber-50">
                      <Clock className="mr-1 h-3 w-3" />
                      Pending
                    </Badge>
                  )}
                  {transaction.status === "failed" && (
                    <Badge variant="outline" className="bg-red-50 text-red-700 hover:bg-red-50">
                      <XCircle className="mr-1 h-3 w-3" />
                      Failed
                    </Badge>
                  )}
                </TableCell>
                <TableCell>{transaction.user}</TableCell>
                <TableCell>{new Date(transaction.date).toLocaleDateString()}</TableCell>
                <TableCell className="text-right">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" className="h-8 w-8 p-0">
                        <span className="sr-only">Open menu</span>
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem>View details</DropdownMenuItem>
                      <DropdownMenuItem>View user</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      {transaction.status === "pending" && (
                        <>
                          <DropdownMenuItem className="text-emerald-600">Approve</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">Reject</DropdownMenuItem>
                        </>
                      )}
                      {transaction.status === "failed" && <DropdownMenuItem>Retry transaction</DropdownMenuItem>}
                      <DropdownMenuItem>Export receipt</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
