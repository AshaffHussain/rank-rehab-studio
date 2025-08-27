import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { AlertTriangle, TrendingDown, Clock, DollarSign, ExternalLink, Calendar, ChevronDown, ChevronRight } from "lucide-react";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const diagnosticsData = [
  {
    url: "/blog/reverse-image-search-guide",
    issues: [
      { name: "CTR Drop", percentage: "-23%" },
      { name: "Position Drop", percentage: "-18%" }
    ],
    severity: "high"
  },
  {
    url: "/blog/background-check-vs-people-search",
    issues: [
      { name: "Outdated (210 days)", percentage: "" },
      { name: "Revenue Drop", percentage: "-31%" }
    ],
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

// Grouped change log data by article
const changeLogData = {
  "/blog/reverse-image-search-guide": [
    {
      date: "2025-07-01",
      time: "14:32",
      change: "Updated H1 and meta description",
      revenueChange: "+$2,400",
      ctrChange: "+0.8%", 
      positionChange: "+2"
    },
    {
      date: "2025-03-15",
      time: "09:15", 
      change: "Added internal links to 'spot-romance-scams'",
      revenueChange: "+$1,850",
      ctrChange: "+0.4%",
      positionChange: "+1"
    },
    {
      date: "2025-01-20",
      time: "11:20",
      change: "Updated featured image and alt tags",
      revenueChange: "+$950",
      ctrChange: "+0.2%",
      positionChange: "0"
    }
  ],
  "/blog/spot-romance-scams": [
    {
      date: "2025-02-28",
      time: "16:45",
      change: "Refreshed statistics and examples", 
      revenueChange: "+$3,200",
      ctrChange: "+1.2%",
      positionChange: "+3"
    },
    {
      date: "2025-01-15",
      time: "13:30",
      change: "Added new warning sign section",
      revenueChange: "+$1,100",
      ctrChange: "+0.6%",
      positionChange: "+1"
    }
  ],
  "/blog/background-check-vs-people-search": [
    {
      date: "2025-06-10",
      time: "10:15",
      change: "Content refresh and new comparison table",
      revenueChange: "+$2,100",
      ctrChange: "+0.9%",
      positionChange: "+2"
    }
  ]
};

// Calculate impact based on selected timeframe
const calculateImpactForTimeframe = (articles: any, days: number) => {
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - days);
  
  let totalRevenue = 0;
  let totalCtr = 0;
  let totalPosition = 0;
  let changeCount = 0;

  Object.values(articles).forEach((changes: any) => {
    changes.forEach((change: any) => {
      const changeDate = new Date(change.date);
      if (changeDate >= cutoffDate) {
        totalRevenue += parseInt(change.revenueChange.replace(/[+$,]/g, ''));
        totalCtr += parseFloat(change.ctrChange.replace(/[+%]/g, ''));
        totalPosition += parseInt(change.positionChange.replace(/[+]/g, ''));
        changeCount++;
      }
    });
  });

  return {
    revenue: totalRevenue > 0 ? `+$${totalRevenue.toLocaleString()}` : '$0',
    ctr: totalCtr > 0 ? `+${totalCtr.toFixed(1)}%` : '0%',
    position: totalPosition > 0 ? `+${totalPosition}` : '0'
  };
};

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
  const [selectedTimeframe, setSelectedTimeframe] = useState("30");
  const [openArticles, setOpenArticles] = useState<Record<string, boolean>>({});
  
  const toggleArticle = (article: string) => {
    setOpenArticles(prev => ({ ...prev, [article]: !prev[article] }));
  };

  const filteredChanges = () => {
    const days = parseInt(selectedTimeframe);
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - days);
    
    const filtered: any = {};
    Object.entries(changeLogData).forEach(([article, changes]) => {
      const validChanges = changes.filter((change: any) => {
        const changeDate = new Date(change.date);
        return changeDate >= cutoffDate;
      });
      if (validChanges.length > 0) {
        filtered[article] = validChanges;
      }
    });
    return filtered;
  };

  const impact = calculateImpactForTimeframe(changeLogData, parseInt(selectedTimeframe));

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
                          {getIssueIcon(issue.name)}
                          {issue.name}
                          {issue.percentage && <span className="ml-1 font-semibold">{issue.percentage}</span>}
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

      {/* Change Log */}
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>Recent Changes & Impact</CardTitle>
              <p className="text-sm text-muted-foreground">
                Track content updates and their performance impact
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm">
                <span className="font-medium">Total Impact:</span>
                <Badge variant="success">{impact.revenue}</Badge>
                <Badge variant="success">{impact.ctr}</Badge>
                <Badge variant="success">{impact.position} positions</Badge>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <Select value={selectedTimeframe} onValueChange={setSelectedTimeframe}>
                  <SelectTrigger className="w-[140px]">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">Last 1 day</SelectItem>
                    <SelectItem value="7">Last 7 days</SelectItem>
                    <SelectItem value="14">Last 14 days</SelectItem>
                    <SelectItem value="30">Last 30 days</SelectItem>
                    <SelectItem value="90">Last 90 days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {Object.entries(filteredChanges()).map(([article, changes]) => (
              <Collapsible 
                key={article} 
                open={openArticles[article]} 
                onOpenChange={() => toggleArticle(article)}
              >
                <div className="border rounded-lg">
                  <CollapsibleTrigger asChild>
                    <div className="flex items-center justify-between p-4 hover:bg-muted/50 cursor-pointer">
                      <div className="flex items-center gap-3">
                        {openArticles[article] ? <ChevronDown className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
                        <a 
                          href={`/url-performance${article}`} 
                          className="font-medium text-primary hover:underline"
                          onClick={(e) => e.stopPropagation()}
                        >
                          {article}
                        </a>
                        <Badge variant="outline">{(changes as any).length} changes</Badge>
                      </div>
                      <div className="flex items-center gap-2">
                        <Badge variant="success" className="text-xs">
                          {(changes as any).reduce((sum: number, c: any) => sum + parseInt(c.revenueChange.replace(/[+$,]/g, '')), 0) > 0 ? 
                            `+$${(changes as any).reduce((sum: number, c: any) => sum + parseInt(c.revenueChange.replace(/[+$,]/g, '')), 0).toLocaleString()}` : 
                            '$0'}
                        </Badge>
                        <Badge variant="success" className="text-xs">
                          {(changes as any).reduce((sum: number, c: any) => sum + parseFloat(c.ctrChange.replace(/[+%]/g, '')), 0) > 0 ? 
                            `+${(changes as any).reduce((sum: number, c: any) => sum + parseFloat(c.ctrChange.replace(/[+%]/g, '')), 0).toFixed(1)}%` : 
                            '0%'}
                        </Badge>
                      </div>
                    </div>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="border-t">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="w-[140px]">Date & Time</TableHead>
                            <TableHead>Change Description</TableHead>
                            <TableHead className="w-[100px]">Revenue</TableHead>
                            <TableHead className="w-[80px]">CTR</TableHead>
                            <TableHead className="w-[90px]">Position</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {(changes as any).map((change: any, idx: number) => (
                            <TableRow key={idx}>
                              <TableCell className="font-mono text-sm">
                                <div>{change.date}</div>
                                <div className="text-xs text-muted-foreground">{change.time}</div>
                              </TableCell>
                              <TableCell>{change.change}</TableCell>
                              <TableCell className="font-semibold text-success">{change.revenueChange}</TableCell>
                              <TableCell className="font-semibold text-success">{change.ctrChange}</TableCell>
                              <TableCell className="font-semibold text-success">{change.positionChange}</TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default RankingRecovery;