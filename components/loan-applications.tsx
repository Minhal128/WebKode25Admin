import { ArrowRightIcon, CheckCircle2, Clock, XCircle } from "lucide-react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export function LoanApplications() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Loan Applications</CardTitle>
        <CardDescription>Recent loan applications requiring review.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-muted-foreground">$5,000 - Personal Loan</p>
            </div>
            <Badge variant="outline" className="bg-amber-50 text-amber-700 hover:bg-amber-50">
              <Clock className="mr-1 h-3 w-3" />
              Pending
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Sarah Williams</p>
              <p className="text-xs text-muted-foreground">$10,000 - Business Loan</p>
            </div>
            <Badge variant="outline" className="bg-amber-50 text-amber-700 hover:bg-amber-50">
              <Clock className="mr-1 h-3 w-3" />
              Pending
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Michael Brown</p>
              <p className="text-xs text-muted-foreground">$2,500 - Personal Loan</p>
            </div>
            <Badge variant="outline" className="bg-emerald-50 text-emerald-700 hover:bg-emerald-50">
              <CheckCircle2 className="mr-1 h-3 w-3" />
              Approved
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">Jessica Lee</p>
              <p className="text-xs text-muted-foreground">$15,000 - Business Loan</p>
            </div>
            <Badge variant="outline" className="bg-red-50 text-red-700 hover:bg-red-50">
              <XCircle className="mr-1 h-3 w-3" />
              Rejected
            </Badge>
          </div>
          <Button variant="outline" className="w-full">
            View all applications <ArrowRightIcon className="ml-1 h-3 w-3" />
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
