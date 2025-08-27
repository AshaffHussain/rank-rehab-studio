import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, TrendingDown, Minus, LucideIcon } from "lucide-react";

interface KPICardProps {
  title: string;
  value: string;
  change: string;
  trend: "up" | "down" | "flat";
  icon: LucideIcon;
  chartData: readonly number[];
}

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

export function KPICard({ title, value, change, trend, icon: Icon, chartData }: KPICardProps) {
  const maxValue = Math.max(...chartData);
  const minValue = Math.min(...chartData);
  const range = maxValue - minValue;

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <Icon className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        <div className={`text-xs flex items-center gap-1 ${getTrendColor(trend)}`}>
          {getTrendIcon(trend)}
          {change} vs prev
        </div>
        
        {/* Mini trend chart */}
        <div className="mt-3 h-8 flex items-end gap-1">
          {chartData.map((dataPoint, index) => {
            const height = range > 0 ? ((dataPoint - minValue) / range) * 100 : 50;
            return (
              <div
                key={index}
                className="flex-1 bg-primary/20 rounded-sm"
                style={{ height: `${Math.max(height, 10)}%` }}
              />
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}