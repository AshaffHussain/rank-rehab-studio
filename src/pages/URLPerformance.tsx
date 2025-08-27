import { useParams } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar, ExternalLink, TrendingUp, TrendingDown, Minus, DollarSign, Users, MousePointer, Eye, Target } from "lucide-react";
import { KPICard } from "@/components/dashboard/KPICard";
import { useState } from "react";

const articleData = {
  "/blog/reverse-image-search-guide": {
    title: "The Complete Guide to Reverse Image Search for Dating Safety",
    publishDate: "2024-03-15",
    lastUpdated: "2025-07-01",
    wordCount: 2450,
    author: "Sarah Johnson",
    metaDescription: "Learn how to use reverse image search to verify dating profiles and protect yourself from romance scams. Complete guide with tools and techniques.",
    excerpt: "In today's digital dating landscape, protecting yourself from romance scams and catfishing attempts is more important than ever. This comprehensive guide will teach you how to use reverse image search tools to verify dating profiles and stay safe online."
  },
  "/blog/spot-romance-scams": {
    title: "How to Spot Romance Scams: 15 Warning Signs to Watch For",
    publishDate: "2024-01-20",
    lastUpdated: "2025-02-28",
    wordCount: 1850,
    author: "Mike Chen",
    metaDescription: "Protect yourself from romance scams with these 15 warning signs. Learn how to identify fake dating profiles and avoid online romance fraud.",
    excerpt: "Romance scams are on the rise, with victims losing billions of dollars each year. Learn to identify the warning signs and protect yourself from online dating fraud with our comprehensive guide."
  }
};

const kpiData = {
  revenue: { value: "$12,850", change: "+8.2%", trend: "up" as const, data: [8200, 9100, 10500, 11200, 12100, 12850], icon: DollarSign },
  sessions: { value: "54,000", change: "+5.1%", trend: "up" as const, data: [48000, 50200, 51800, 52500, 53200, 54000], icon: Users },
  clicks: { value: "23,000", change: "-2.3%", trend: "down" as const, data: [24500, 24200, 23800, 23500, 23200, 23000], icon: MousePointer },
  impressions: { value: "410K", change: "+3.7%", trend: "up" as const, data: [385000, 392000, 398000, 403000, 407000, 410000], icon: Eye },
  ctr: { value: "5.6%", change: "-0.4%", trend: "down" as const, data: [6.2, 6.0, 5.9, 5.8, 5.7, 5.6], icon: Target },
  position: { value: "4.2", change: "+0.8", trend: "up" as const, data: [5.8, 5.4, 5.0, 4.6, 4.4, 4.2], icon: TrendingUp }
};

const changesTimeline = [
  {
    date: "2025-07-01",
    time: "14:32",
    change: "Updated H1 and meta description",
    type: "Content Update",
    impact: "High",
    revenueChange: "+$2,400",
    ctrChange: "+0.8%",
    positionChange: "+2"
  },
  {
    date: "2025-03-15",
    time: "09:15", 
    change: "Added internal links to 'spot-romance-scams'",
    type: "Internal Linking",
    impact: "Medium",
    revenueChange: "+$1,850",
    ctrChange: "+0.4%",
    positionChange: "+1"
  },
  {
    date: "2025-01-20",
    time: "11:45",
    change: "Refreshed statistics and examples",
    type: "Content Update",
    impact: "High",
    revenueChange: "+$3,200",
    ctrChange: "+1.2%", 
    positionChange: "+3"
  },
  {
    date: "2024-12-10",
    time: "16:30",
    change: "Added FAQ section",
    type: "Structure",
    impact: "Medium",
    revenueChange: "+$800",
    ctrChange: "+0.2%",
    positionChange: "+1"
  }
];

const URLPerformance = () => {
  const { "*": urlPath } = useParams();
  const fullUrl = `/${urlPath}`;
  const [dateFilter, setDateFilter] = useState("30");
  
  const article = articleData[fullUrl as keyof typeof articleData];
  
  if (!article) {
    return (
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">URL Performance</h1>
        <Card>
          <CardContent className="pt-6">
            <p className="text-muted-foreground">Article not found.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up": return <TrendingUp className="h-4 w-4 text-success" />;
      case "down": return <TrendingDown className="h-4 w-4 text-destructive" />;
      default: return <Minus className="h-4 w-4 text-muted-foreground" />;
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case "High": return "destructive" as const;
      case "Medium": return "secondary" as const;
      default: return "outline" as const;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">URL Performance</h1>
          <p className="text-muted-foreground">{fullUrl}</p>
        </div>
        <div className="flex items-center gap-2">
          <Select value={dateFilter} onValueChange={setDateFilter}>
            <SelectTrigger className="w-32">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7">Last 7 days</SelectItem>
              <SelectItem value="30">Last 30 days</SelectItem>
              <SelectItem value="90">Last 90 days</SelectItem>
              <SelectItem value="365">Last year</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" size="sm">
            <Calendar className="h-4 w-4 mr-2" />
            Custom Range
          </Button>
        </div>
      </div>

      {/* Article Information */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <ExternalLink className="h-5 w-5" />
            Article Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="font-semibold text-lg mb-2">{article.title}</h3>
            <p className="text-muted-foreground">{article.excerpt}</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground">Published:</span>
              <p className="font-medium">{article.publishDate}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Last Updated:</span>
              <p className="font-medium">{article.lastUpdated}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Word Count:</span>
              <p className="font-medium">{article.wordCount}</p>
            </div>
            <div>
              <span className="text-muted-foreground">Author:</span>
              <p className="font-medium">{article.author}</p>
            </div>
          </div>

          <div>
            <span className="text-muted-foreground text-sm">Meta Description:</span>
            <p className="mt-1">{article.metaDescription}</p>
          </div>

          <Button variant="outline" className="w-fit">
            <ExternalLink className="h-4 w-4 mr-2" />
            View Article
          </Button>
        </CardContent>
      </Card>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <KPICard
          title="Revenue"
          value={kpiData.revenue.value}
          change={kpiData.revenue.change}
          trend={kpiData.revenue.trend}
          chartData={kpiData.revenue.data}
          icon={kpiData.revenue.icon}
        />
        <KPICard
          title="Sessions"
          value={kpiData.sessions.value}
          change={kpiData.sessions.change}
          trend={kpiData.sessions.trend}
          chartData={kpiData.sessions.data}
          icon={kpiData.sessions.icon}
        />
        <KPICard
          title="Clicks"
          value={kpiData.clicks.value}
          change={kpiData.clicks.change}
          trend={kpiData.clicks.trend}
          chartData={kpiData.clicks.data}
          icon={kpiData.clicks.icon}
        />
        <KPICard
          title="Impressions"
          value={kpiData.impressions.value}
          change={kpiData.impressions.change}
          trend={kpiData.impressions.trend}
          chartData={kpiData.impressions.data}
          icon={kpiData.impressions.icon}
        />
        <KPICard
          title="CTR"
          value={kpiData.ctr.value}
          change={kpiData.ctr.change}
          trend={kpiData.ctr.trend}
          chartData={kpiData.ctr.data}
          icon={kpiData.ctr.icon}
        />
        <KPICard
          title="Avg Position"
          value={kpiData.position.value}
          change={kpiData.position.change}
          trend={kpiData.position.trend}
          chartData={kpiData.position.data}
          icon={kpiData.position.icon}
        />
      </div>

      {/* Changes Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Changes Timeline</CardTitle>
          <p className="text-sm text-muted-foreground">
            History of all changes made to this article and their impact
          </p>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date & Time</TableHead>
                  <TableHead>Change</TableHead>
                  <TableHead>Type</TableHead>
                  <TableHead>Impact</TableHead>
                  <TableHead>Revenue</TableHead>
                  <TableHead>CTR</TableHead>
                  <TableHead>Position</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {changesTimeline.map((entry, index) => (
                  <TableRow key={index} className="hover:bg-muted/50">
                    <TableCell className="font-mono text-sm">
                      <div>{entry.date}</div>
                      <div className="text-xs text-muted-foreground">{entry.time}</div>
                    </TableCell>
                    <TableCell className="max-w-sm">
                      {entry.change}
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{entry.type}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getImpactColor(entry.impact)}>{entry.impact}</Badge>
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

export default URLPerformance;