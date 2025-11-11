import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CloudRain, TrendingUp, Heart, Recycle, Leaf, CheckCircle } from "lucide-react";

const Solutions = () => {
  const solutions = [
    {
      icon: CloudRain,
      title: "Carbon & Climate Solutions",
      description: "Comprehensive climate action and carbon market participation",
      color: "text-secondary",
      services: [
        "Robust & Compliant PDD Development",
        "Credible & Transparent MRV Frameworks",
        "Strategic Carbon Opportunity Assessment",
        "Climate Finance Access Guidance",
        "Data Management & Visualization",
      ],
    },
    {
      icon: TrendingUp,
      title: "ESG & Sustainability Advisory",
      description: "Embed sustainability into core business operations",
      color: "text-accent",
      services: [
        "Materiality & ESG Strategy",
        "ESG Governance & Benchmarking",
        "Reporting & Compliance (GRI, BRSR, SASB, TCFD)",
        "Carbon Accounting & GHG Inventory",
        "Decarbonization Pathways",
        "Climate Disclosure Readiness",
      ],
    },
    {
      icon: Heart,
      title: "CSR & Social Impact",
      description: "Create meaningful social impact beyond compliance",
      color: "text-destructive",
      services: [
        "Community Need Assessments",
        "Project Feasibility Studies",
        "SDG-Aligned Program Design",
        "Monitoring & Evaluation with Dashboards",
        "Social Return on Investment (SROI)",
        "Capacity Building for CSR Teams",
      ],
    },
    {
      icon: Recycle,
      title: "Circular Economy & Waste Management",
      description: "Transform waste into value through circular models",
      color: "text-primary",
      services: [
        "Recycling & Resource Recovery",
        "E-Waste & Hazardous Waste Solutions",
        "Extended Producer Responsibility (EPR)",
        "Circular Economy Advisory",
        "PRO & Recycler Partnerships",
        "Compliance & Strategy",
      ],
    },
    {
      icon: Leaf,
      title: "Environmental & Nature-Based Solutions",
      description: "Leverage nature for climate resilience and restoration",
      color: "text-accent",
      services: [
        "Regenerative Agriculture & Agroforestry",
        "Water Conservation Programs",
        "Environmental Impact Assessments",
        "Urban & Infrastructure Planning",
        "Spatial Analytics & Modelling",
        "Knowledge Building & Policy Advocacy",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Solutions
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Comprehensive sustainability services bridging business imperatives with long-term goals
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto space-y-12">
            {solutions.map((solution, index) => {
              const Icon = solution.icon;
              return (
                <Card 
                  key={solution.title} 
                  className="hover-lift animate-slide-up overflow-hidden"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="md:flex">
                    <div className="md:w-1/3 bg-gradient-to-br from-primary/5 to-secondary/5 p-8 flex flex-col justify-center items-center text-center">
                      <Icon className={`${solution.color} mb-6`} size={80} strokeWidth={1.5} />
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {solution.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {solution.description}
                      </p>
                    </div>
                    <div className="md:w-2/3 p-8">
                      <h4 className="text-lg font-semibold text-foreground mb-6">
                        Key Services:
                      </h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {solution.services.map((service) => (
                          <div key={service} className="flex items-start gap-3">
                            <CheckCircle className="text-accent flex-shrink-0 mt-1" size={20} />
                            <span className="text-muted-foreground">{service}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Let's Build a Sustainable Future Together
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Partner with us to integrate sustainability into your core business practices
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Solutions;
