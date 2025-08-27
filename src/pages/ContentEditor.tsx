import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Save, FileText, Eye, Upload } from "lucide-react";
import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

// Mock generated content based on topic ID
const getGeneratedContent = (topicId: string) => {
  const topics: Record<string, any> = {
    "1": {
      title: "How to Spot Catfish Dating Profiles: Complete Guide",
      content: `# How to Spot Catfish Dating Profiles: Complete Guide

## Introduction

Online dating has revolutionized how we meet potential partners, but it has also opened the door to deceptive practices like catfishing. A catfish is someone who creates a false online persona to deceive others, often using fake photos and fabricated personal information. Learning to identify these red flags can save you from emotional manipulation and potential financial loss.

## Warning Signs to Watch For

### 1. Limited or Professional-Quality Photos
- Only 1-3 photos available
- All photos look professionally shot
- Images appear to be stock photos or model shots
- No casual, everyday photos
- Photos seem inconsistent in lighting or background

### 2. Reluctance to Meet in Person
- Always has excuses for why they can't meet
- Constantly cancels or postpones plans
- Lives "too far away" to meet easily
- Claims to be traveling frequently for work

### 3. Inconsistent Story Details
- Details about their life don't add up
- Stories change over time
- Can't remember what they've told you before
- Vague about their job, location, or family

## Verification Techniques

### Reverse Image Search
Use tools like Google Images, TinEye, or specialized apps to check if their photos appear elsewhere online. If the same image is associated with different names or profiles, it's likely stolen.

### Video Chat Requests
Legitimate people will be willing to video chat. If they consistently refuse or make excuses, this is a major red flag.

### Social Media Cross-Reference
Check if their other social media profiles exist and appear authentic. Look for:
- Consistent posting history
- Interactions with friends and family
- Tagged photos from others
- Long-term account history

## Protecting Yourself

1. **Trust Your Instincts**: If something feels off, it probably is
2. **Keep Personal Information Private**: Don't share financial details or sensitive personal information
3. **Meet in Public**: If you do decide to meet, choose a public place
4. **Tell Someone**: Let a friend or family member know about your plans
5. **Never Send Money**: Legitimate romantic interests won't ask for financial help

## What to Do If You Suspect Catfishing

- Stop all communication immediately
- Don't confront them directly
- Report the profile to the dating platform
- Block them on all social media
- Consider reporting to authorities if money was involved

## Conclusion

While catfishing can be devastating, being aware of the warning signs and taking proper precautions can help protect you. Remember, genuine people will be understanding of your need to verify their identity and will be willing to meet your reasonable requests for proof of authenticity.

Stay safe, trust your instincts, and don't rush into emotional or financial commitments with someone you've never met in person.`,
      wordCount: 425,
      readingTime: "3 min read"
    }
  };

  return topics[topicId] || {
    title: "Generated Article",
    content: "# Article Content\n\nThis is where your generated content would appear...",
    wordCount: 0,
    readingTime: "0 min read"
  };
};

const ContentEditor = () => {
  const { topicId } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState(() => getGeneratedContent(topicId || "1"));
  const [isEditing, setIsEditing] = useState(true);
  const [title, setTitle] = useState(content.title);
  const [articleContent, setArticleContent] = useState(content.content);

  const handleSaveDraft = () => {
    // This would require backend integration with WordPress
    alert("WordPress integration requires backend setup. Please connect to Supabase to enable this functionality.");
  };

  const handlePreview = () => {
    setIsEditing(!isEditing);
  };

  const formatPreviewContent = (text: string) => {
    return text
      .replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold mb-4">$1</h1>')
      .replace(/^## (.+)$/gm, '<h2 class="text-2xl font-semibold mb-3 mt-6">$1</h2>')
      .replace(/^### (.+)$/gm, '<h3 class="text-xl font-medium mb-2 mt-4">$1</h3>')
      .replace(/^\- (.+)$/gm, '<li class="ml-4">$1</li>')
      .replace(/^([^<\n].+)$/gm, '<p class="mb-3">$1</p>')
      .replace(/(<li.*?>.*?<\/li>)/gs, '<ul class="list-disc pl-6 mb-3">$1</ul>')
      .replace(/<\/li>\s*<ul[^>]*>/g, '</li>')
      .replace(/<\/ul>\s*<li/g, '<li');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Content Editor</h1>
          <p className="text-muted-foreground">Create and edit your generated content</p>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="outline" onClick={() => navigate("/content-opportunities")}>
            Back to Topics
          </Button>
          <Button variant="outline" onClick={handlePreview}>
            {isEditing ? <Eye className="h-4 w-4 mr-2" /> : <FileText className="h-4 w-4 mr-2" />}
            {isEditing ? "Preview" : "Edit"}
          </Button>
          <Button onClick={handleSaveDraft}>
            <Save className="h-4 w-4 mr-2" />
            Save to WordPress
          </Button>
        </div>
      </div>

      {/* Article Stats */}
      <Card>
        <CardContent className="pt-6">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <FileText className="h-4 w-4 text-muted-foreground" />
              <span className="text-sm font-medium">{content.wordCount} words</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">{content.readingTime}</span>
            </div>
            <Badge variant="success">SEO Optimized</Badge>
            <Badge variant="outline">Ready for Review</Badge>
          </div>
        </CardContent>
      </Card>

      {/* Editor/Preview */}
      <Card>
        <CardHeader>
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Article Title</Label>
              <Input
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="text-xl font-semibold"
                disabled={!isEditing}
              />
            </div>
          </div>
        </CardHeader>
        <CardContent>
          {isEditing ? (
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="content">Article Content</Label>
                <Textarea
                  id="content"
                  value={articleContent}
                  onChange={(e) => setArticleContent(e.target.value)}
                  className="min-h-[600px] font-mono text-sm"
                  placeholder="Write your content in Markdown format..."
                />
              </div>
              <div className="text-xs text-muted-foreground">
                Tip: Use Markdown formatting (# for headings, ## for subheadings, - for bullet points)
              </div>
            </div>
          ) : (
            <div className="prose prose-lg max-w-none">
              <div 
                dangerouslySetInnerHTML={{ 
                  __html: formatPreviewContent(articleContent) 
                }}
                className="space-y-4"
              />
            </div>
          )}
        </CardContent>
      </Card>

      {/* WordPress Integration Note */}
      <Card className="border-warning bg-warning/5">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-warning">
            <Upload className="h-5 w-5" />
            WordPress Integration
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">
            To save content as drafts in WordPress, you'll need to set up backend integration. 
            This feature requires connecting your Lovable project to Supabase for API functionality.
          </p>
          <Button variant="outline" onClick={() => window.open("https://docs.lovable.dev/integrations/supabase/", "_blank")}>
            Learn About Supabase Integration
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default ContentEditor;