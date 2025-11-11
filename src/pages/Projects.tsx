import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Droplets, Sprout, Zap } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      icon: Droplets,
      title: "Sustainable Rice Initiative",
      location: "Multiple States",
      description: "Precision irrigation and alternate wetting-drying techniques to enhance livelihoods, improve soil health, and reduce GHG emissions.",
      impact: ["75,000+ farmers engaged", "Improved water efficiency", "Reduced methane emissions"],
    },
    {
      icon: Sprout,
      title: "Water Conservation & Soil Health",
      location: "9 States across India",
      description: "Comprehensive programs focusing on water resource management and soil restoration through regenerative practices.",
      impact: ["Enhanced soil fertility", "Sustainable water use", "Community capacity building"],
    },
    {
      icon: Zap,
      title: "Biogas & Agroforestry",
      location: "Rural Communities",
      description: "Large-scale projects combining renewable energy with sustainable agriculture for climate-smart interventions.",
      impact: ["Clean energy access", "Carbon sequestration", "Livelihood improvement"],
    },
    {
      icon: Sprout,
      title: "Regenerative Agriculture",
      location: "Pan-India",
      description: "Nature-based solutions promoting biodiversity, soil health, and climate resilience in farming communities.",
      impact: ["Ecosystem restoration", "Farmer income increase", "Climate adaptation"],
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
              Our Impact & Projects
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Transforming communities and landscapes through science-based sustainability initiatives
            </p>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {projects.map((project, index) => {
                const Icon = project.icon;
                return (
                  <Card 
                    key={project.title} 
                    className="hover-lift animate-slide-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <CardHeader>
                      <Icon className="text-primary mb-4" size={48} strokeWidth={1.5} />
                      <CardTitle className="text-2xl">{project.title}</CardTitle>
                      <CardDescription className="flex items-center gap-2 text-base">
                        <MapPin size={16} />
                        {project.location}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="space-y-2">
                        <p className="font-semibold text-sm text-foreground">Key Impact:</p>
                        <ul className="space-y-1">
                          {project.impact.map((item) => (
                            <li key={item} className="text-sm text-muted-foreground flex items-center gap-2">
                              <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Our Reach & Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">75,000+</div>
                <p className="text-primary-foreground/80">Farmers Engaged</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">9</div>
                <p className="text-primary-foreground/80">States Covered</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">100+</div>
                <p className="text-primary-foreground/80">Projects Delivered</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold mb-2">Climate+</div>
                <p className="text-primary-foreground/80">Future Impact</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              What Partners Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="hover-lift">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground italic mb-4">
                    "Restorearth's holistic approach to sustainability has transformed our CSR initiatives 
                    into impactful, measurable programs that create lasting change."
                  </p>
                  <p className="font-semibold text-foreground">— Corporate Partner</p>
                </CardContent>
              </Card>
              <Card className="hover-lift">
                <CardContent className="pt-6">
                  <p className="text-muted-foreground italic mb-4">
                    "Their expertise in carbon markets and MRV frameworks enabled us to participate 
                    confidently in climate finance while ensuring transparency."
                  </p>
                  <p className="font-semibold text-foreground">— Agricultural Foundation</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
