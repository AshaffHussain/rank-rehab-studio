import { Search, Calendar, Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";

export function TopBar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center px-4 gap-4">
        <SidebarTrigger className="mr-2" />
        
        <div className="flex items-center gap-2">
          <h2 className="font-semibold text-lg">SEO Growth Studio</h2>
        </div>

        <div className="flex-1 flex items-center justify-center max-w-md">
          <div className="relative w-full">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search keywords, URLs..."
              className="pl-8"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Date Range */}
          <Button variant="outline" size="sm" className="gap-2">
            <Calendar className="h-4 w-4" />
            Last 30 days
            <ChevronDown className="h-4 w-4" />
          </Button>

          {/* Channel Filter */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="h-4 w-4" />
                All Channels
                <ChevronDown className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>All Channels</DropdownMenuItem>
              <DropdownMenuItem>Organic</DropdownMenuItem>
              <DropdownMenuItem>Paid</DropdownMenuItem>
              <DropdownMenuItem>Other</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Active Filters */}
          <div className="flex items-center gap-1">
            <Badge variant="secondary" className="text-xs">
              Organic
            </Badge>
          </div>
        </div>
      </div>
    </header>
  );
}