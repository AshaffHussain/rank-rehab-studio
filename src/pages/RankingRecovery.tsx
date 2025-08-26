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
    change: "Updated H1 and meta description",
    url: "/blog/reverse-image-search-guide"
  },
  {
    date: "2025-03-15",
    change: "Added internal links to 'spot-romance-scams'",
    url: "/blog/reverse-image-search-guide"
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

      {/* Cannibalization Report */}
      <Card>
        <CardHeader>
          <CardTitle>Cannibalization Report</CardTitle>
          <p className="text-sm text-muted-foreground">
            Keyword: <span className="font-medium text-primary">"{cannibalizationData.keyword}"</span>
          </p>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>URL</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>CTR</TableHead>
                  <TableHead>Clicks</TableHead>
                  <TableHead>RPC</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cannibalizationData.urls.map((url, index) => (
                  <TableRow key={index} className="hover:bg-muted/50">
                    <TableCell className="font-medium">
                      <span className="text-primary hover:underline cursor-pointer">
                        {url.url}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Badge variant={url.position <= 5 ? "default" : "secondary"}>
                        {url.position}
                      </Badge>
                    </TableCell>
                    <TableCell>{url.ctr}</TableCell>
                    <TableCell>{url.clicks}</TableCell>
                    <TableCell className="font-semibold">{url.rpc}</TableCell>
                    <TableCell>
                      {url.isPrimary ? (
                        <Badge variant="default">Primary</Badge>
                      ) : (
                        <Badge variant="secondary">Competing</Badge>
                      )}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="mt-4 p-4 bg-accent rounded-lg">
            <p className="text-sm text-accent-foreground">
              <strong>Suggested Primary:</strong> /blog/reverse-image-search-guide
            </p>
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
          <CardTitle>Recent Changes</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {changeLogData.map((entry, index) => (
              <div key={index} className="flex items-start gap-4 p-3 border rounded-lg">
                <div className="text-sm text-muted-foreground font-mono min-w-24">
                  {entry.date}
                </div>
                <div className="flex-1">
                  <p className="text-sm">{entry.change}</p>
                  <p className="text-xs text-muted-foreground">{entry.url}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RankingRecovery;