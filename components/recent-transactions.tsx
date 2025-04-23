import { ArrowDownIcon, ArrowUpIcon, CheckCircle2, Clock, XCircle } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"

export function RecentTransactions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Transactions</CardTitle>
        <CardDescription>Latest financial transactions across the platform.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Transaction</TableHead>
              <TableHead>Amount</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Date</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">
                <div className="flex items-center">
                  <div className="mr-2 rounded-full bg-emerald-100 p-1">
                    <ArrowDownIcon className="h-3 w-3 text-emerald-600" />
                  </div>
                  Deposit
                </div>
              </TableCell>
              <TableCell>$250.00</TableCell>
              <TableCell>
                <Badge variant="outline" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
                  <CheckCircle2 className="mr-1 h-3 w-3" />
                  Completed
                </Badge>
              </TableCell>
              <TableCell className="text-muted-foreground">Apr 23, 2023</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <div className="flex items-center">
                  <div className="mr-2 rounded-full bg-red-100 p-1">
                    <ArrowUpIcon className="h-3 w-3 text-red-600" />
                  </div>
                  Withdrawal
                </div>
              </TableCell>
              <TableCell>$100.00</TableCell>
              <TableCell>
                <Badge variant="outline" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
                  <CheckCircle2 className="mr-1 h-3 w-3" />
                  Completed
                </Badge>
              </TableCell>
              <TableCell className="text-muted-foreground">Apr 22, 2023</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <div className="flex items-center">
                  <div className="mr-2 rounded-full bg-emerald-100 p-1">
                    <ArrowDownIcon className="h-3 w-3 text-emerald-600" />
                  </div>
                  Loan Disbursement
                </div>
              </TableCell>
              <TableCell>$5,000.00</TableCell>
              <TableCell>
                <Badge variant="outline" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
                  <CheckCircle2 className="mr-1 h-3 w-3" />
                  Completed
                </Badge>
              </TableCell>
              <TableCell className="text-muted-foreground">Apr 21, 2023</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <div className="flex items-center">
                  <div className="mr-2 rounded-full bg-amber-100 p-1">
                    <Clock className="h-3 w-3 text-amber-600" />
                  </div>
                  Transfer
                </div>
              </TableCell>
              <TableCell>$750.00</TableCell>
              <TableCell>
                <Badge variant="outline" className="bg-amber-50 text-amber-700 hover:bg-amber-50">
                  <Clock className="mr-1 h-3 w-3" />
                  Pending
                </Badge>
              </TableCell>
              <TableCell className="text-muted-foreground">Apr 20, 2023</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">
                <div className="flex items-center">
                  <div className="mr-2 rounded-full bg-red-100 p-1">
                    <XCircle className="h-3 w-3 text-red-600" />
                  </div>
                  Failed Payment
                </div>
              </TableCell>
              <TableCell>$350.00</TableCell>
              <TableCell>
                <Badge variant="outline" className="bg-red-50 text-red-700 hover:bg-red-50">
                  <XCircle className="mr-1 h-3 w-3" />
                  Failed
                </Badge>
              </TableCell>
              <TableCell className="text-muted-foreground">Apr 19, 2023</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
