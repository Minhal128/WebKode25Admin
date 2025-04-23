"use client"

import { useState } from "react"
import { ArrowUpDown, CheckCircle2, Clock, MoreHorizontal, Search, XCircle } from "lucide-react"

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
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const loans = [
  {
    id: "L1001",
    user: "John Doe",
    email: "john.doe@example.com",
    type: "Personal",
    amount: 5000.0,
    term: 12,
    status: "pending",
    applicationDate: "2023-04-23T10:23:00",
    interestRate: 8.5,
  },
  {
    id: "L1002",
    user: "Sarah Williams",
    email: "sarah.williams@example.com",
    type: "Business",
    amount: 10000.0,
    term: 24,
    status: "pending",
    applicationDate: "2023-04-22T14:45:00",
    interestRate: 7.2,
  },
  {
    id: "L1003",
    user: "Michael Brown",
    email: "michael.brown@example.com",
    type: "Personal",
    amount: 2500.0,
    term: 6,
    status: "approved",
    applicationDate: "2023-04-21T09:15:00",
    interestRate: 9.0,
  },
  {
    id: "L1004",
    user: "Jessica Lee",
    email: "jessica.lee@example.com",
    type: "Business",
    amount: 15000.0,
    term: 36,
    status: "rejected",
    applicationDate: "2023-04-20T08:30:00",
    interestRate: 6.8,
  },
  {
    id: "L1005",
    user: "David Miller",
    email: "david.miller@example.com",
    type: "Personal",
    amount: 7500.0,
    term: 18,
    status: "active",
    applicationDate: "2023-04-19T16:20:00",
    interestRate: 8.2,
  },
  {
    id: "L1006",
    user: "Emma Wilson",
    email: "emma.wilson@example.com",
    type: "Business",
    amount: 25000.0,
    term: 48,
    status: "active",
    applicationDate: "2023-04-18T11:10:00",
    interestRate: 6.5,
  },
  {
    id: "L1007",
    user: "Robert Johnson",
    email: "robert.johnson@example.com",
    type: "Personal",
    amount: 3000.0,
    term: 12,
    status: "closed",
    applicationDate: "2023-04-17T13:25:00",
    interestRate: 8.9,
  },
]

export function LoansTable() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredLoans = loans.filter(
    (loan) =>
      loan.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      loan.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      loan.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Loans</CardTitle>
            <CardDescription>Manage loan applications and active loans.</CardDescription>
          </div>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
              placeholder="Search loans..."
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
              <TableHead>Applicant</TableHead>
              <TableHead>Type</TableHead>
              <TableHead>
                <div className="flex items-center space-x-1">
                  <span>Amount</span>
                  <ArrowUpDown className="h-3 w-3" />
                </div>
              </TableHead>
              <TableHead>Term</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>
                <div className="flex items-center space-x-1">
                  <span>Application Date</span>
                  <ArrowUpDown className="h-3 w-3" />
                </div>
              </TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredLoans.map((loan) => (
              <TableRow key={loan.id}>
                <TableCell className="font-medium">{loan.id}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={loan.user} />
                      <AvatarFallback>
                        {loan.user
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{loan.user}</div>
                      <div className="text-sm text-muted-foreground">{loan.email}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>{loan.type}</TableCell>
                <TableCell>${loan.amount.toFixed(2)}</TableCell>
                <TableCell>{loan.term} months</TableCell>
                <TableCell>
                  {loan.status === "pending" && (
                    <Badge variant="outline" className="bg-amber-50 text-amber-700 hover:bg-amber-50">
                      <Clock className="mr-1 h-3 w-3" />
                      Pending
                    </Badge>
                  )}
                  {loan.status === "approved" && (
                    <Badge variant="outline" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
                      <CheckCircle2 className="mr-1 h-3 w-3" />
                      Approved
                    </Badge>
                  )}
                  {loan.status === "active" && (
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 hover:bg-blue-50">
                      Active
                    </Badge>
                  )}
                  {loan.status === "rejected" && (
                    <Badge variant="outline" className="bg-red-50 text-red-700 hover:bg-red-50">
                      <XCircle className="mr-1 h-3 w-3" />
                      Rejected
                    </Badge>
                  )}
                  {loan.status === "closed" && (
                    <Badge variant="outline" className="bg-gray-50 text-gray-700 hover:bg-gray-50">
                      Closed
                    </Badge>
                  )}
                </TableCell>
                <TableCell>{new Date(loan.applicationDate).toLocaleDateString()}</TableCell>
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
                      <DropdownMenuItem>View applicant</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      {loan.status === "pending" && (
                        <>
                          <DropdownMenuItem className="text-emerald-600">Approve</DropdownMenuItem>
                          <DropdownMenuItem className="text-red-600">Reject</DropdownMenuItem>
                        </>
                      )}
                      {loan.status === "approved" && (
                        <DropdownMenuItem className="text-blue-600">Disburse</DropdownMenuItem>
                      )}
                      {loan.status === "active" && (
                        <>
                          <DropdownMenuItem>View payments</DropdownMenuItem>
                          <DropdownMenuItem>Payment schedule</DropdownMenuItem>
                        </>
                      )}
                      <DropdownMenuItem>Export details</DropdownMenuItem>
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
