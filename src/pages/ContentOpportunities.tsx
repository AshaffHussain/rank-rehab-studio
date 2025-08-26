import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Target, TrendingUp, DollarSign } from "lucide-react";

const opportunitiesData = [
  {
    keyword: "catfish dating guide",
    format: "Guide",
    position: 11,
    impressions: "42,000",
    ctr: "2.3%",
    rpc: "$0.54",
    kd: 41,
    currentRevenue: "$0",
    potentialRevenue: "$6,500",
    targetUrl: "New"
  },
  {
    keyword: "reverse image search tools 2025",
    format: "Comparison",
    position: 8,
    impressions: "38,000",
    ctr: "4.2%",
    rpc: "$0.49",
    kd: 36,
    currentRevenue: "$1,100",
    potentialRevenue: "$3,400",
    targetUrl: "Existing"
  },
  {
    keyword: "romance scam warning signs",
    format: "Listicle",
    position: 7,
    impressions: "56,000",
    ctr: "5.8%",
    rpc: "$0.60",
    kd: 44,
    currentRevenue: "$2,900",
    potentialRevenue: "$8,900",
    targetUrl: "Existing"
  }
];

const getKdColor = (kd: number) => {
  if (kd < 30) return "success" as const;
  if (kd < 50) return "secondary" as const;
  return "destructive" as const;
};

const getPositionColor = (position: number) => {
  if (position <= 5) return "default";
  if (position <= 10) return "secondary";
  return "outline";
};

const ContentOpportunities = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Content Opportunities</h1>
        <p className="text-muted-foreground">Discover new content opportunities and optimize existing pages</p>
      </div>

      {/* Search Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Opportunity Search
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="keyword">Keyword/Topic</Label>
              <Input id="keyword" placeholder="catfish dating" defaultValue="catfish dating" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="seedUrl">Seed URL</Label>
              <Input id="seedUrl" placeholder="/blog/reverse-image-search-guide" defaultValue="/blog/reverse-image-search-guide" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="modifier">Modifier</Label>
              <Select defaultValue="how-to">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="how-to">how to</SelectItem>
                  <SelectItem value="best">best</SelectItem>
                  <SelectItem value="vs">vs</SelectItem>
                  <SelectItem value="guide">guide</SelectItem>
                  <SelectItem value="review">review</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex items-end">
              <Button className="w-full">
                <Search className="h-4 w-4 mr-2" />
                Search Opportunities
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Opportunities Table */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Target className="h-5 w-5 text-primary" />
            Content Opportunities
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Keyword</TableHead>
                  <TableHead>Format</TableHead>
                  <TableHead>Position</TableHead>
                  <TableHead>Impressions</TableHead>
                  <TableHead>CTR</TableHead>
                  <TableHead>RPC</TableHead>
                  <TableHead>KD</TableHead>
                  <TableHead>Current Revenue</TableHead>
                  <TableHead>Potential Revenue</TableHead>
                  <TableHead>Target URL</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {opportunitiesData.map((opportunity, index) => (
                  <TableRow key={index} className="hover:bg-muted/50">
                    <TableCell className="font-medium">
                      <span className="text-primary hover:underline cursor-pointer">
                        "{opportunity.keyword}"
                      </span>
                    </TableCell>
                    <TableCell>
                      <Badge variant="outline">{opportunity.format}</Badge>
                    </TableCell>
                    <TableCell>
                      <Badge variant={getPositionColor(opportunity.position)}>
                        {opportunity.position}
                      </Badge>
                    </TableCell>
                    <TableCell>{opportunity.impressions}</TableCell>
                    <TableCell>{opportunity.ctr}</TableCell>
                    <TableCell className="font-semibold">{opportunity.rpc}</TableCell>
                    <TableCell>
                      <Badge variant={getKdColor(opportunity.kd)}>
                        {opportunity.kd}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-muted-foreground">
                      {opportunity.currentRevenue}
                    </TableCell>
                    <TableCell className="font-bold text-success">
                      <div className="flex items-center gap-1">
                        <TrendingUp className="h-4 w-4" />
                        {opportunity.potentialRevenue}
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge variant={opportunity.targetUrl === "New" ? "default" : "secondary"}>
                        {opportunity.targetUrl}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>

      {/* Revenue Impact Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Total Opportunities
            </CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">
              Keywords identified
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Current Revenue
            </CardTitle>
            <DollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$4,000</div>
            <p className="text-xs text-muted-foreground">
              From these keywords
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-muted-foreground">
              Potential Revenue
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-success" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-success">$18,800</div>
            <p className="text-xs text-success">
              +$14,800 opportunity
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ContentOpportunities;