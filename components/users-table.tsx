"use client"

import { useState } from "react"
import { ArrowUpDown, CheckCircle2, MoreHorizontal, Search, XCircle } from "lucide-react"

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

const users = [
  {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    status: "active",
    lastLogin: "2023-04-23T10:23:00",
    transactions: 24,
    joined: "2023-01-15",
  },
  {
    id: "2",
    name: "Alice Smith",
    email: "alice.smith@example.com",
    status: "active",
    lastLogin: "2023-04-22T14:45:00",
    transactions: 42,
    joined: "2022-11-03",
  },
  {
    id: "3",
    name: "Robert Johnson",
    email: "robert.johnson@example.com",
    status: "inactive",
    lastLogin: "2023-04-10T09:15:00",
    transactions: 12,
    joined: "2023-02-20",
  },
  {
    id: "4",
    name: "Emma Wilson",
    email: "emma.wilson@example.com",
    status: "active",
    lastLogin: "2023-04-23T08:30:00",
    transactions: 56,
    joined: "2022-09-15",
  },
  {
    id: "5",
    name: "Michael Brown",
    email: "michael.brown@example.com",
    status: "suspended",
    lastLogin: "2023-03-15T16:20:00",
    transactions: 8,
    joined: "2023-01-05",
  },
]

export function UsersTable() {
  const [searchTerm, setSearchTerm] = useState("")

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <div>
            <CardTitle>Users</CardTitle>
            <CardDescription>Manage your users and their account status.</CardDescription>
          </div>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input
              placeholder="Search users..."
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
              <TableHead>User</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>
                <div className="flex items-center space-x-1">
                  <span>Last Login</span>
                  <ArrowUpDown className="h-3 w-3" />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center space-x-1">
                  <span>Transactions</span>
                  <ArrowUpDown className="h-3 w-3" />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center space-x-1">
                  <span>Joined</span>
                  <ArrowUpDown className="h-3 w-3" />
                </div>
              </TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar>
                      <AvatarImage src={`/placeholder.svg?height=32&width=32`} alt={user.name} />
                      <AvatarFallback>
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{user.name}</div>
                      <div className="text-sm text-muted-foreground">{user.email}</div>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  {user.status === "active" && (
                    <Badge variant="outline" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
                      <CheckCircle2 className="mr-1 h-3 w-3" />
                      Active
                    </Badge>
                  )}
                  {user.status === "inactive" && (
                    <Badge variant="outline" className="bg-amber-50 text-amber-700 hover:bg-amber-50">
                      Inactive
                    </Badge>
                  )}
                  {user.status === "suspended" && (
                    <Badge variant="outline" className="bg-red-50 text-red-700 hover:bg-red-50">
                      <XCircle className="mr-1 h-3 w-3" />
                      Suspended
                    </Badge>
                  )}
                </TableCell>
                <TableCell>{new Date(user.lastLogin).toLocaleDateString()}</TableCell>
                <TableCell>{user.transactions}</TableCell>
                <TableCell>{new Date(user.joined).toLocaleDateString()}</TableCell>
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
                      <DropdownMenuItem>View transactions</DropdownMenuItem>
                      <DropdownMenuSeparator />
                      <DropdownMenuItem>Edit user</DropdownMenuItem>
                      {user.status === "active" ? (
                        <DropdownMenuItem className="text-amber-600">Deactivate</DropdownMenuItem>
                      ) : (
                        <DropdownMenuItem className="text-emerald-600">Activate</DropdownMenuItem>
                      )}
                      <DropdownMenuItem className="text-red-600">Suspend</DropdownMenuItem>
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
