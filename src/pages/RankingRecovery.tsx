import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AlertTriangle, TrendingDown, Clock, DollarSign, ExternalLink } from "lucide-react";

const diagnosticsData = [
  {
    url: "/blog/reverse-image-search-guide",
    issues: ["CTR Drop", "Position Drop"],
    severity: "high"
  },
  {
    url: "/blog/background-check-vs-people-search",
    issues: ["Outdated (210 days)", "Revenue Drop"],
    severity: "medium"
  }
];

const cannibalizationData = {
  keyword: "reverse image search dating",
  urls: [
    {
      url: "/blog/reverse-image-search-guide",
      position: 5,
      ctr: "6.3%",
      clicks: "4,100",
      rpc: "$0.62",
      isPrimary: true
    },
    {
      url: "/blog/reverse-image-search-tools",
      position: 12,
      ctr: "2.1%",
      clicks: "400",
      rpc: "$0.40",
      isPrimary: false
    }
  ]
};

const changeLogData = [
  {
    date: "2025-07-01",
    time: "14:32",
    article: "/blog/reverse-image-search-guide",
    change: "Updated H1 and meta description",
    revenueChange: "+$2,400",
    ctrChange: "+0.8%",
    positionChange: "+2",
    timeFrame: "7 days"
  },
  {
    date: "2025-03-15", 
    time: "09:15",
    article: "/blog/reverse-image-search-guide",
    change: "Added internal links to 'spot-romance-scams'",
    revenueChange: "+$1,850",
    ctrChange: "+0.4%",
    positionChange: "+1",
    timeFrame: "14 days"
  },
  {
    date: "2025-02-28",
    time: "16:45", 
    article: "/blog/spot-romance-scams",
    change: "Refreshed statistics and examples",
    revenueChange: "+$3,200",
    ctrChange: "+1.2%",
    positionChange: "+3",
    timeFrame: "7 days"
  }
];

const getSeverityColor = (severity: string) => {
  switch (severity) {
    case "high":
      return "destructive" as const;
    case "medium":
      return "secondary" as const;
    default:
      return "outline" as const;
  }
};

const getIssueIcon = (issue: string) => {
  if (issue.includes("Drop")) return <TrendingDown className="h-4 w-4" />;
  if (issue.includes("Outdated")) return <Clock className="h-4 w-4" />;
  return <AlertTriangle className="h-4 w-4" />;
};

const RankingRecovery = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Ranking Recovery</h1>
        <p className="text-muted-foreground">Identify and fix SEO performance issues</p>
      </div>

      {/* Diagnostics Overview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <AlertTriangle className="h-5 w-5 text-warning" />
            Diagnostics Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {diagnosticsData.map((item, index) => (
              <div key={index} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-primary hover:underline cursor-pointer">
                        {item.url}
                      </span>
                      <ExternalLink className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="flex gap-2">
                      {item.issues.map((issue, idx) => (
                        <Badge key={idx} variant={getSeverityColor(item.severity)} className="flex items-center gap-1">
                          {getIssueIcon(issue)}
                          {issue}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>


      {/* Article Detail Preview */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-success" />
            Article Detail: /blog/reverse-image-search-guide
          </CardTitle>
          <div className="text-2xl font-bold text-success">$12,850</div>
          <p className="text-sm text-muted-foreground">Revenue (last 30 days)</p>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Click "View Details" on any URL above to see the full keyword performance table and detailed analytics.
          </p>
        </CardContent>
      </Card>

      {/* Change Log */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Changes & Impact</CardTitle>
          <p className="text-sm text-muted-foreground">
            Track content updates and their performance impact
          </p>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Article</TableHead>
                  <TableHead>Change</TableHead>
                  <TableHead>Revenue Impact</TableHead>
                  <TableHead>CTR Impact</TableHead>
                  <TableHead>Position Impact</TableHead>
                  <TableHead>Time Frame</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {changeLogData.map((entry, index) => (
                  <TableRow key={index} className="hover:bg-muted/50">
                    <TableCell className="font-mono text-sm">
                      <div>{entry.date}</div>
                      <div className="text-xs text-muted-foreground">{entry.time}</div>
                    </TableCell>
                    <TableCell className="font-medium max-w-xs">
                      <span className="text-primary hover:underline cursor-pointer">
                        {entry.article}
                      </span>
                    </TableCell>
                    <TableCell className="max-w-sm">
                      {entry.change}
                    </TableCell>
                    <TableCell className="font-semibold text-success">
                      {entry.revenueChange}
                    </TableCell>
                    <TableCell className="font-semibold text-success">
                      {entry.ctrChange}
                    </TableCell>
                    <TableCell className="font-semibold text-success">
                      {entry.positionChange}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{entry.timeFrame}</Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RankingRecovery;