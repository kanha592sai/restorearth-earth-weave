import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Eye, Heart, Users } from "lucide-react";

const About = () => {
  const phases = [
    {
      title: "Inspiration Phase",
      description: "Feasibility studies and identifying Nature-Based Solutions for viability",
    },
    {
      title: "Blueprint Phase",
      description: "Strategy formulation, KPI development, and comprehensive planning",
    },
    {
      title: "Execution Phase",
      description: "Implementation with robust MRV systems and internal audits",
    },
    {
      title: "Evolution Phase",
      description: "Scaling impact and institutionalizing sustainable practices",
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
              About Restorearth Solutions
            </h1>
            <p className="text-xl text-primary-foreground/90">
              A Partner in Planetary and Social Regeneration
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Our Story
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Restorearth Solutions is a leading sustainability and CSR advisory firm dedicated to 
                restoring ecological balance and driving transformative change. Guided by the vision, 
                <span className="italic font-semibold text-primary"> "Samastha Lokah Sukhino Bhavantu" </span>
                (may all beings, everywhere, be happy), the company places planetary and community well-being 
                at the core of its work.
              </p>
              <p>
                By bridging the gap between short-term business imperatives and long-term sustainability goals, 
                Restorearth helps businesses, communities, and institutions transition toward sustainable, 
                climate-resilient, and future-ready practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <Card className="hover-lift">
              <CardHeader>
                <Eye className="text-primary mb-4" size={48} />
                <CardTitle className="text-2xl">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To bring "Samastha Lokah Sukhino Bhavantu" into tangible action, placing planet 
                  restoration at the center of everyday conversations and practices.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardHeader>
                <Target className="text-secondary mb-4" size={48} />
                <CardTitle className="text-2xl">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  To preserve Earth's natural resources through innovation, education, and collective 
                  action, driving transformative change through an integrated, holistic approach.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Approach
              </h2>
              <p className="text-xl text-muted-foreground">
                Phased, Contextual, Integrated, and Outcome-Driven
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {phases.map((phase, index) => (
                <Card 
                  key={phase.title} 
                  className="hover-lift animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader>
                    <div className="text-4xl font-bold text-primary mb-2">
                      {index + 1}
                    </div>
                    <CardTitle className="text-lg">{phase.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      {phase.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Heart className="mx-auto mb-6" size={64} />
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Our Philosophy
            </h2>
            <p className="text-xl text-primary-foreground/90 leading-relaxed">
              We operate across a wide spectrum of interconnected sustainability domains, offering 
              end-to-end solutions that are both strategic and actionable. Our work is driven by 
              the belief that true sustainability requires bridging business imperatives with 
              environmental and social responsibility.
            </p>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Our Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center hover-lift">
                <CardContent className="pt-8 pb-6">
                  <div className="text-5xl font-bold text-primary mb-2">75,000+</div>
                  <p className="text-muted-foreground">Farmers Engaged</p>
                </CardContent>
              </Card>
              <Card className="text-center hover-lift">
                <CardContent className="pt-8 pb-6">
                  <div className="text-5xl font-bold text-secondary mb-2">9</div>
                  <p className="text-muted-foreground">States Covered</p>
                </CardContent>
              </Card>
              <Card className="text-center hover-lift">
                <CardContent className="pt-8 pb-6">
                  <Users className="mx-auto text-accent mb-2" size={64} />
                  <p className="text-muted-foreground">Multiple Global Partnerships</p>
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

export default About;
