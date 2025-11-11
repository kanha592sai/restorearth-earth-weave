import { Link } from "react-router-dom";
import { CloudRain, TrendingUp, Heart, Recycle, Leaf } from "lucide-react";
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const SolutionsPreview = () => {
  const solutions = [
    {
      icon: CloudRain,
      title: "Carbon & Climate Solutions",
      description: "PDDs, MRV frameworks, and carbon credits for climate-positive impact",
      color: "text-secondary",
    },
    {
      icon: TrendingUp,
      title: "ESG & Sustainability Advisory",
      description: "Governance, reporting, and GRI/BRSR compliance support",
      color: "text-accent",
    },
    {
      icon: Heart,
      title: "CSR & Social Impact",
      description: "SROI analysis, feasibility studies, and capacity building",
      color: "text-destructive",
    },
    {
      icon: Recycle,
      title: "Circular Economy",
      description: "EPR compliance, recycling, and resource recovery solutions",
      color: "text-primary",
    },
    {
      icon: Leaf,
      title: "Nature-Based Solutions",
      description: "Agroforestry, regenerative agriculture, and water conservation",
      color: "text-accent",
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive sustainability services bridging business imperatives with long-term goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            return (
              <Card
                key={solution.title}
                className="hover-lift cursor-pointer group animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <CardHeader>
                  <div className={`${solution.color} mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon size={48} strokeWidth={1.5} />
                  </div>
                  <CardTitle className="text-xl mb-2">{solution.title}</CardTitle>
                  <CardDescription className="text-base">
                    {solution.description}
                  </CardDescription>
                </CardHeader>
              </Card>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/solutions"
            className="inline-block text-primary hover:text-primary/80 font-semibold text-lg transition-colors"
          >
            View All Solutions →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolutionsPreview;
