import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Calendar, User, Clock, ArrowRight } from "lucide-react";
const Blog = () => {
  const categories = [{
    name: "Workplace Wellness",
    count: 12
  }, {
    name: "Therapy & You",
    count: 18
  }, {
    name: "FAQs & Mental Health Myths",
    count: 8
  }];
  const featuredArticles = [{
    id: 1,
    title: "5 Signs You Might Benefit from Counseling",
    excerpt: "Recognizing when it's time to seek professional help is the first step toward better mental health...",
    category: "Therapy & You",
    author: "Dr. Priya Sharma",
    date: "Dec 15, 2024",
    readTime: "5 min read",
    featured: true
  }, {
    id: 2,
    title: "How to Talk to Your Boss About Mental Health",
    excerpt: "Navigating conversations about mental health at work can be challenging. Here's how to approach it professionally...",
    category: "Workplace Wellness",
    author: "Dr. Arjun Mehta",
    date: "Dec 12, 2024",
    readTime: "7 min read",
    featured: false
  }, {
    id: 3,
    title: "Can I Do Therapy on WhatsApp?",
    excerpt: "Exploring the effectiveness and privacy of mental health support through messaging platforms...",
    category: "FAQs & Mental Health Myths",
    author: "Dr. Kavya Reddy",
    date: "Dec 10, 2024",
    readTime: "4 min read",
    featured: false
  }, {
    id: 4,
    title: "Breaking the Stigma: Mental Health in Indian Workplaces",
    excerpt: "How organizations can create more supportive environments for employee mental wellness...",
    category: "Workplace Wellness",
    author: "Dr. Rohit Singh",
    date: "Dec 8, 2024",
    readTime: "6 min read",
    featured: false
  }, {
    id: 5,
    title: "Understanding Anxiety: More Than Just Worry",
    excerpt: "Anxiety disorders are complex conditions that require understanding and proper support...",
    category: "Therapy & You",
    author: "Dr. Priya Sharma",
    date: "Dec 5, 2024",
    readTime: "8 min read",
    featured: false
  }, {
    id: 6,
    title: "Myth Busting: Therapy is Only for 'Serious' Problems",
    excerpt: "Debunking common misconceptions about when and why people should seek therapy...",
    category: "FAQs & Mental Health Myths",
    author: "Dr. Kavya Reddy",
    date: "Dec 3, 2024",
    readTime: "5 min read",
    featured: false
  }];
  return <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-bsmile-cream to-bsmile-light-teal py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-bsmile-navy mb-6">
              Mental Health Insights
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Expert content from our licensed therapists. Explore articles, tips, and insights 
              to support your mental wellness journey.
            </p>
            <div className="max-w-md mx-auto">
              
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-bsmile-navy mb-12 text-center">Featured Article</h2>
            {featuredArticles.filter(article => article.featured).map(article => <Card key={article.id} className="mb-16 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2">
                  <div className="bg-gradient-to-br from-bsmile-teal/10 to-bsmile-light-teal/20 p-8 lg:p-12 flex items-center">
                    <div>
                      <Badge className="mb-4">{article.category}</Badge>
                      <h3 className="text-2xl md:text-3xl font-bold text-bsmile-navy mb-4">
                        {article.title}
                      </h3>
                      <p className="text-muted-foreground mb-6 text-lg">
                        {article.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                        <div className="flex items-center gap-1">
                          <User className="w-4 h-4" />
                          {article.author}
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {article.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </div>
                      </div>
                      <Button>
                        Read Article
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </div>
                  </div>
                  <div className="h-64 lg:h-auto bg-gradient-to-br from-bsmile-teal to-bsmile-light-teal flex items-center justify-center">
                    <div className="text-white text-center">
                      <h4 className="text-xl font-semibold mb-2">Featured Content</h4>
                      <p className="text-sm opacity-90">Expert insights from our licensed therapists</p>
                    </div>
                  </div>
                </div>
              </Card>)}
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-bsmile-navy mb-12 text-center">Recent Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredArticles.filter(article => !article.featured).map(article => <Card key={article.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <Badge variant="secondary" className="w-fit mb-2">{article.category}</Badge>
                    <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 text-sm line-clamp-3">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <User className="w-3 h-3" />
                        {article.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {article.date}
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}
                      </span>
                      <Button variant="link" size="sm" className="p-0 h-auto">
                        Read More
                        <ArrowRight className="w-3 h-3 ml-1" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-bsmile-navy mb-6">
              Stay Updated
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to our newsletter for the latest mental health insights and tips 
              delivered straight to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input placeholder="Enter your email" className="flex-1" />
              <Button>Subscribe</Button>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              No spam, unsubscribe at any time.
            </p>
          </div>
        </div>
      </section>

      {/* Submit Topic Request */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-bsmile-navy mb-6">
              Have a Topic Request?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Is there a mental health topic you'd like our experts to cover? 
              We'd love to hear your suggestions and create content that matters to you.
            </p>
            <Button size="lg">Submit Topic Request</Button>
          </div>
        </div>
      </section>
    </div>;
};
export default Blog;