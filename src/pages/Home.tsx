import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import SolutionsPreview from "@/components/SolutionsPreview";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* Mission Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-4">
              Restorearth Solutions is a leading sustainability and CSR advisory firm dedicated to restoring 
              ecological balance and driving transformative change. Guided by the vision, 
              <span className="italic font-semibold text-primary"> "Samastha Lokah Sukhino Bhavantu" </span>
              (may all beings, everywhere, be happy), we place planetary and community well-being at the core of our work.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We bridge the gap between short-term business imperatives and long-term sustainability goals, 
              helping businesses, communities, and institutions transition toward sustainable, climate-resilient, 
              and future-ready practices.
            </p>
          </div>
        </div>
      </section>

      <SolutionsPreview />

      {/* Impact Story Section */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
              Creating Lasting Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-card/10 backdrop-blur-sm border-primary-foreground/20">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-primary-foreground mb-3">
                    Sustainable Agriculture
                  </h3>
                  <p className="text-primary-foreground/80">
                    Our Sustainable Rice Initiative demonstrates how precision irrigation and 
                    alternate wetting techniques enhance livelihoods, improve soil health, and 
                    reduce greenhouse gas emissions.
                  </p>
                </CardContent>
              </Card>
              <Card className="bg-card/10 backdrop-blur-sm border-primary-foreground/20">
                <CardContent className="p-6">
                  <h3 className="text-2xl font-bold text-primary-foreground mb-3">
                    Carbon Markets
                  </h3>
                  <p className="text-primary-foreground/80">
                    Designed PDDs and MRV frameworks for large-scale projects, supporting 
                    biogas and agroforestry initiatives to scale climate-smart interventions.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join hands with us to co-create a sustainable, climate-positive future.
            </p>
            <Link to="/join">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Partner With Us Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
