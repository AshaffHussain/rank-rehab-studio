import { Bell, AlertTriangle, TrendingDown, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const notifications = [
  {
    id: 1,
    type: "critical",
    title: "Revenue Drop Alert",
    message: "/blog/reverse-image-search-guide revenue decreased by 18%",
    time: "2 hours ago",
    icon: TrendingDown,
  },
  {
    id: 2,
    type: "warning",
    title: "Content Outdated",
    message: "/blog/background-check-vs-people-search not updated for 210 days",
    time: "1 day ago",
    icon: Clock,
  },
  {
    id: 3,
    type: "critical",
    title: "CTR Drop Alert",
    message: "/blog/spot-romance-scams CTR decreased by 22%",
    time: "3 hours ago",
    icon: TrendingDown,
  },
];

const getNotificationColor = (type: string) => {
  switch (type) {
    case "critical":
      return "destructive";
    case "warning":
      return "secondary";
    default:
      return "outline";
  }
};

export function NotificationCenter() {
  const unreadCount = notifications.length;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="relative">
          <Bell className="h-4 w-4" />
          {unreadCount > 0 && (
            <Badge 
              variant="destructive" 
              className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs"
            >
              {unreadCount}
            </Badge>
          )}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-80 p-0">
        <div className="p-4 border-b">
          <h3 className="font-semibold">Notifications</h3>
          <p className="text-sm text-muted-foreground">
            {unreadCount} critical alerts
          </p>
        </div>
        <div className="max-h-64 overflow-y-auto">
          {notifications.map((notification, index) => {
            const Icon = notification.icon;
            return (
              <div key={notification.id}>
                <Card className="m-0 border-0 shadow-none">
                  <CardContent className="p-3 hover:bg-muted/50 cursor-pointer">
                    <div className="flex items-start gap-3">
                      <div className="mt-1">
                        <Icon className="h-4 w-4 text-destructive" />
                      </div>
                      <div className="flex-1 space-y-1">
                        <div className="flex items-center justify-between">
                          <p className="text-sm font-medium">
                            {notification.title}
                          </p>
                          <Badge 
                            variant={getNotificationColor(notification.type)} 
                            className="text-xs"
                          >
                            {notification.type}
                          </Badge>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {notification.message}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {notification.time}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                {index < notifications.length - 1 && <Separator />}
              </div>
            );
          })}
        </div>
        <div className="p-3 border-t">
          <Button variant="ghost" size="sm" className="w-full">
            View all notifications
          </Button>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}