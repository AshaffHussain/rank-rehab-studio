import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, FileText, BookOpen, PenTool, Lightbulb } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const topicsData = [
  {
    id: "1",
    title: "How to Spot Catfish Dating Profiles: Complete Guide",
    articleType: "Guide",
    keywords: ["catfish dating", "fake profiles", "online dating safety", "romance scams"],
    description: "A comprehensive guide covering warning signs, verification techniques, and safety measures to identify fake dating profiles and protect yourself from catfish scams."
  },
  {
    id: "2", 
    title: "Top 10 Reverse Image Search Tools for Dating Safety",
    articleType: "Listicle",
    keywords: ["reverse image search", "dating verification", "fake photo detection", "online safety tools"],
    description: "Compare the best reverse image search tools and apps to verify dating profile photos and catch potential catfish before you get emotionally invested."
  },
  {
    id: "3",
    title: "Romance Scam vs Catfish: Understanding the Differences",
    articleType: "Comparison", 
    keywords: ["romance scam", "catfish", "online dating fraud", "emotional manipulation"],
    description: "Learn the key differences between romance scams and catfishing, including motivations, tactics, and how to protect yourself from both types of deception."
  },
  {
    id: "4",
    title: "Red Flags in Online Dating: What Scammers Don't Want You to Know",
    articleType: "Educational",
    keywords: ["dating red flags", "online dating safety", "scammer tactics", "warning signs"],
    description: "Discover the subtle warning signs that experienced scammers use and how to recognize manipulation tactics before falling victim to online dating fraud."
  }
];

const getArticleTypeColor = (type: string) => {
  switch (type.toLowerCase()) {
    case "guide": return "default";
    case "listicle": return "secondary";
    case "comparison": return "outline";
    case "educational": return "success";
    default: return "outline";
  }
};

const getArticleTypeIcon = (type: string) => {
  switch (type.toLowerCase()) {
    case "guide": return <BookOpen className="h-4 w-4" />;
    case "listicle": return <FileText className="h-4 w-4" />;
    case "comparison": return <PenTool className="h-4 w-4" />;
    case "educational": return <Lightbulb className="h-4 w-4" />;
    default: return <FileText className="h-4 w-4" />;
  }
};

const ContentOpportunities = () => {
  const [showTopics, setShowTopics] = useState(true);
  const [keyword, setKeyword] = useState("catfish dating");
  const [seedUrl, setSeedUrl] = useState("/blog/reverse-image-search-guide");
  const [modifier, setModifier] = useState("how-to");
  const navigate = useNavigate();

  const handleSearch = () => {
    setShowTopics(true);
  };

  const handleGenerateContent = (topicId: string) => {
    navigate(`/content-editor/${topicId}`);
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Content Opportunities</h1>
        <p className="text-muted-foreground">Discover new content opportunities and generate engaging articles</p>
      </div>

      {/* Search Form */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            Topic Discovery
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <Label htmlFor="keyword">Keyword/Topic</Label>
              <Input 
                id="keyword" 
                placeholder="catfish dating" 
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="seedUrl">Seed URL</Label>
              <Input 
                id="seedUrl" 
                placeholder="/blog/reverse-image-search-guide" 
                value={seedUrl}
                onChange={(e) => setSeedUrl(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="modifier">Modifier</Label>
              <Select value={modifier} onValueChange={setModifier}>
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
              <Button className="w-full" onClick={handleSearch}>
                <Search className="h-4 w-4 mr-2" />
                Discover Topics
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Topic Cards */}
      {showTopics && (
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Content Topic Suggestions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {topicsData.map((topic) => (
              <Card key={topic.id} className="hover:shadow-md transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <CardTitle className="text-lg leading-tight">{topic.title}</CardTitle>
                    <Badge variant={getArticleTypeColor(topic.articleType)} className="flex items-center gap-1 ml-2">
                      {getArticleTypeIcon(topic.articleType)}
                      {topic.articleType}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">{topic.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Target Keywords:</h4>
                    <div className="flex flex-wrap gap-1">
                      {topic.keywords.map((keyword, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {keyword}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <Button 
                    className="w-full" 
                    onClick={() => handleGenerateContent(topic.id)}
                  >
                    <PenTool className="h-4 w-4 mr-2" />
                    Generate Content
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ContentOpportunities;