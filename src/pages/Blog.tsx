import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "Understanding Carbon Credits in Indian Agriculture",
      category: "Carbon Projects",
      date: "2024-11-01",
      excerpt: "Exploring how Indian farmers can participate in carbon markets through sustainable agricultural practices and verified emission reductions.",
      image: "carbon-credits",
    },
    {
      title: "ESG Reporting: A Guide for Indian Corporates",
      category: "ESG & Compliance",
      date: "2024-10-25",
      excerpt: "Navigate the evolving landscape of ESG disclosure requirements including BRSR, GRI, and TCFD frameworks for comprehensive sustainability reporting.",
      image: "esg-reporting",
    },
    {
      title: "Regenerative Agriculture: The Future of Farming",
      category: "Nature-Based Solutions",
      date: "2024-10-15",
      excerpt: "How regenerative practices restore soil health, enhance biodiversity, and create climate-resilient farming systems across India.",
      image: "regenerative-ag",
    },
    {
      title: "Circular Economy in Waste Management",
      category: "Circular Innovation",
      date: "2024-10-05",
      excerpt: "Transforming waste into resources through EPR compliance, recycling innovations, and sustainable product stewardship models.",
      image: "circular-economy",
    },
    {
      title: "CSR Impact Assessment: Measuring What Matters",
      category: "CSR & Impact",
      date: "2024-09-20",
      excerpt: "Best practices for evaluating social impact, conducting SROI analysis, and ensuring transparency in corporate social responsibility programs.",
      image: "csr-impact",
    },
    {
      title: "Climate Dialogues: Key Takeaways from 2024",
      category: "Climate Dialogues",
      date: "2024-09-10",
      excerpt: "Insights from ESG Dialogues 2024 on climate action, sustainability strategies, and collaborative approaches to planetary restoration.",
      image: "climate-dialogues",
    },
  ];

  const categories = [
    "All",
    "Carbon Projects",
    "ESG & Compliance",
    "CSR & Impact",
    "Circular Innovation",
    "Nature-Based Solutions",
    "Climate Dialogues",
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Insights & Resources
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Expert perspectives on sustainability, ESG, and climate action
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-background border-b border-border sticky top-20 z-40">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "All" ? "default" : "outline"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, index) => (
                <Card 
                  key={post.title} 
                  className="hover-lift cursor-pointer animate-slide-up overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="h-48 bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                    <span className="text-6xl">📄</span>
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <div className="flex items-center gap-1 text-xs text-muted-foreground">
                        <Calendar size={12} />
                        {new Date(post.date).toLocaleDateString()}
                      </div>
                    </div>
                    <CardTitle className="text-xl line-clamp-2">{post.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="line-clamp-3">
                      {post.excerpt}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Subscribe to receive the latest insights on sustainability and climate action
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-3 rounded-lg border border-input bg-background text-foreground flex-1 max-w-md"
              />
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-semibold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
