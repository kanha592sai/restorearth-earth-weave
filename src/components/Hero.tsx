import { ArrowRight, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent opacity-90" />
      
      {/* Animated Leaf Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 animate-pulse">
          <Leaf size={80} className="text-primary-foreground" />
        </div>
        <div className="absolute bottom-20 right-10 animate-pulse delay-75">
          <Leaf size={120} className="text-primary-foreground" />
        </div>
        <div className="absolute top-1/2 left-1/3 animate-pulse delay-150">
          <Leaf size={60} className="text-primary-foreground" />
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center animate-fade-in">
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground leading-tight">
            We Resolve to Restore Earth
          </h1>
          <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-2xl mx-auto">
            Building a climate-positive future through science, sustainability, and compassion.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Link to="/solutions">
              <Button 
                size="lg" 
                className="bg-card text-primary hover:bg-card/90 shadow-lg hover:shadow-xl transition-all group"
              >
                Explore Our Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
              </Button>
            </Link>
            <Link to="/join">
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Partner With Us
              </Button>
            </Link>
          </div>

          {/* Stats Preview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-16">
            <div className="bg-card/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <div className="text-4xl font-bold text-primary-foreground">75,000+</div>
              <div className="text-primary-foreground/80 mt-2">Farmers Engaged</div>
            </div>
            <div className="bg-card/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <div className="text-4xl font-bold text-primary-foreground">9 States</div>
              <div className="text-primary-foreground/80 mt-2">Across India</div>
            </div>
            <div className="bg-card/10 backdrop-blur-sm rounded-lg p-6 border border-primary-foreground/20">
              <div className="text-4xl font-bold text-primary-foreground">Climate+</div>
              <div className="text-primary-foreground/80 mt-2">Future Impact</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary-foreground rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-primary-foreground rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
