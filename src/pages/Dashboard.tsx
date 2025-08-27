import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, TrendingDown, DollarSign, MousePointer, Eye, Target, BarChart3, Minus } from "lucide-react";
import { KPICard } from "@/components/dashboard/KPICard";

const kpiData = [
  { title: "Revenue", value: "$48,200", change: "+12%", trend: "up", icon: DollarSign, chartData: [42000, 44000, 43000, 46000, 48200] },
  { title: "RPC", value: "$0.55", change: "+4%", trend: "up", icon: Target, chartData: [0.52, 0.53, 0.54, 0.55, 0.55] },
  { title: "Sessions", value: "182,000", change: "+7%", trend: "up", icon: BarChart3, chartData: [170000, 175000, 178000, 180000, 182000] },
  { title: "Clicks", value: "89,500", change: "+6%", trend: "up", icon: MousePointer, chartData: [84000, 86000, 87500, 89000, 89500] },
  { title: "Impressions", value: "1.2M", change: "+9%", trend: "up", icon: Eye, chartData: [1100000, 1150000, 1180000, 1200000, 1200000] },
  { title: "CTR", value: "7.4%", change: "flat", trend: "flat", icon: Target, chartData: [7.4, 7.3, 7.4, 7.5, 7.4] },
  { title: "Avg Position", value: "5.6", change: "−0.3", trend: "down", icon: BarChart3, chartData: [5.3, 5.4, 5.5, 5.8, 5.6] },
] as const;

const topBlogUrls = [
  {
    url: "/blog/reverse-image-search-guide",
    revenue: "$12,850",
    rpc: "$0.58",
    sessions: "54,000",
    clicks: "23,000",
    impressions: "410,000",
    ctr: "5.6%",
    avgPosition: "4.2",
    trend: "down"
  },
  {
    url: "/blog/spot-romance-scams",
    revenue: "$9,800",
    rpc: "$0.61",
    sessions: "39,000",
    clicks: "17,000",
    impressions: "300,000",
    ctr: "5.7%",
    avgPosition: "6.1",
    trend: "up"
  },
  {
    url: "/blog/background-check-vs-people-search",
    revenue: "$7,200",
    rpc: "$0.52",
    sessions: "28,000",
    clicks: "12,000",
    impressions: "210,000",
    ctr: "5.7%",
    avgPosition: "8.3",
    trend: "down"
  },
];

const topKeywords = [
  {
    query: "reverse image search dating",
    url: "/blog/reverse-image-search-guide",
    position: 5,
    ctr: "6.3%",
    impressions: "65,000",
    clicks: "4,100",
    rpc: "$0.62"
  },
  {
    query: "how to spot romance scams",
    url: "/blog/spot-romance-scams",
    position: 3,
    ctr: "8.1%",
    impressions: "120,000",
    clicks: "6,900",
    rpc: "$0.66"
  },
  {
    query: "background check vs people search",
    url: "/blog/background-check-vs-people-search",
    position: 9,
    ctr: "3.4%",
    impressions: "90,000",
    clicks: "2,200",
    rpc: "$0.52"
  },
];

const getTrendIcon = (trend: string) => {
  switch (trend) {
    case "up":
      return <TrendingUp className="h-4 w-4 text-success" />;
    case "down":
      return <TrendingDown className="h-4 w-4 text-destructive" />;
    default:
      return <Minus className="h-4 w-4 text-muted-foreground" />;
  }
};

const getTrendColor = (trend: string) => {
  switch (trend) {
    case "up":
      return "text-success";
    case "down":
      return "text-destructive";
    default:
      return "text-muted-foreground";
  }
};

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Overview of your SEO performance metrics</p>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {kpiData.map((kpi) => (
          <KPICard
            key={kpi.title}
            title={kpi.title}
            value={kpi.value}
            change={kpi.change}
            trend={kpi.trend}
            icon={kpi.icon}
            chartData={kpi.chartData}
          />
        ))}
      </div>

      {/* Top Blog URLs */}
      <Card>
        <CardHeader>
          <CardTitle>Top Blog URLs (Top 100)</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>URL</TableHead>
                  <TableHead>Revenue</TableHead>
                  <TableHead>RPC</TableHead>
                  <TableHead>Sessions</TableHead>
                  <TableHead>Clicks</TableHead>
                  <TableHead>Impressions</TableHead>
                  <TableHead>CTR</TableHead>
                  <TableHead>Avg Position</TableHead>
                  <TableHead>Trend</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topBlogUrls.map((blog, index) => (
                  <TableRow key={index} className="hover:bg-muted/50">
                    <TableCell className="font-medium max-w-xs truncate">
                      <span className="text-primary hover:underline cursor-pointer">
                        {blog.url}
                      </span>
                    </TableCell>
                    <TableCell className="font-semibold">{blog.revenue}</TableCell>
                    <TableCell>{blog.rpc}</TableCell>
                    <TableCell>{blog.sessions}</TableCell>
                    <TableCell>{blog.clicks}</TableCell>
                    <TableCell>{blog.impressions}</TableCell>
                    <TableCell>{blog.ctr}</TableCell>
                    <TableCell>{blog.avgPosition}</TableCell>
                    <TableCell>{getTrendIcon(blog.trend)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Top Keywords */}
      <Card>
        <CardHeader>
          <CardTitle>Top Keywords</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Query</TableHead>
                  <TableHead>URL</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>CTR</TableHead>
                  <TableHead>Impressions</TableHead>
                  <TableHead>Clicks</TableHead>
                  <TableHead>RPC</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {topKeywords.map((keyword, index) => (
                  <TableRow key={index} className="hover:bg-muted/50">
                    <TableCell className="font-medium">
                      <span className="text-primary hover:underline cursor-pointer">
                        "{keyword.query}"
                      </span>
                    </TableCell>
                    <TableCell className="max-w-xs truncate text-muted-foreground">
                      {keyword.url}
                    </TableCell>
                    <TableCell>
                      <Badge variant={keyword.position <= 5 ? "default" : "secondary"}>
                        {keyword.position}
                      </Badge>
                    </TableCell>
                    <TableCell>{keyword.ctr}</TableCell>
                    <TableCell>{keyword.impressions}</TableCell>
                    <TableCell>{keyword.clicks}</TableCell>
                    <TableCell className="font-semibold">{keyword.rpc}</TableCell>
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

export default Dashboard;