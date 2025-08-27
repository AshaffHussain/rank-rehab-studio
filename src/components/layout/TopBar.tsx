import { Search, Calendar, Filter, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { useState, useRef, useEffect } from "react";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { NotificationCenter } from "./NotificationCenter";

const searchData = [
  { type: "keyword", value: "reverse image search dating", url: "/blog/reverse-image-search-guide" },
  { type: "keyword", value: "how to spot romance scams", url: "/blog/spot-romance-scams" },
  { type: "keyword", value: "background check vs people search", url: "/blog/background-check-vs-people-search" },
  { type: "article", value: "/blog/reverse-image-search-guide", title: "Reverse Image Search Guide" },
  { type: "article", value: "/blog/spot-romance-scams", title: "How to Spot Romance Scams" },
  { type: "article", value: "/blog/background-check-vs-people-search", title: "Background Check vs People Search" },
  { type: "keyword", value: "catfish dating guide", url: "/opportunities" },
  { type: "keyword", value: "romance scam warning signs", url: "/blog/spot-romance-scams" }
];

export function TopBar() {
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const filteredResults = searchData.filter(item =>
    item.value.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (item.title && item.title.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowResults(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex h-14 items-center px-4 gap-4">
        <SidebarTrigger className="mr-2" />
        
        <div className="flex items-center gap-2">
          <h2 className="font-semibold text-lg">SEO Growth Studio</h2>
        </div>

        <div className="flex-1 flex items-center justify-center max-w-md">
          <div className="relative w-full" ref={searchRef}>
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search keywords, URLs..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowResults(e.target.value.length > 0);
              }}
              onFocus={() => setShowResults(searchQuery.length > 0)}
            />
            
            {showResults && filteredResults.length > 0 && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-background border rounded-md shadow-lg z-50 max-h-64 overflow-y-auto">
                {filteredResults.map((item, index) => (
                  <div
                    key={index}
                    className="px-3 py-2 hover:bg-muted cursor-pointer border-b last:border-b-0"
                    onClick={() => {
                      setSearchQuery("");
                      setShowResults(false);
                    }}
                  >
                    <div className="flex items-center gap-2">
                      <Badge variant={item.type === "keyword" ? "secondary" : "outline"} className="text-xs">
                        {item.type}
                      </Badge>
                      <span className="text-sm">
                        {item.type === "article" ? item.title : item.value}
                      </span>
                    </div>
                    {item.type === "article" && (
                      <div className="text-xs text-muted-foreground mt-1">{item.value}</div>
                    )}
                  </div>
                ))}
              </div>
            )}
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

          {/* Notifications */}
          <NotificationCenter />

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