import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";

const Partners = () => {
  const partners = [
    { name: "ICRISAT", description: "International Crops Research Institute for the Semi-Arid Tropics" },
    { name: "DRF", description: "Development Research Foundation" },
    { name: "WRI India", description: "World Resources Institute" },
    { name: "RIL Foundation", description: "Reliance Industries Limited Foundation" },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-primary to-secondary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Our Partners & Collaborations
            </h1>
            <p className="text-xl text-primary-foreground/90">
              Together, we build regenerative ecosystems and drive sustainability at scale
            </p>
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Trusted by Leading Organizations
              </h2>
              <p className="text-lg text-muted-foreground">
                Collaborative partnerships driving transformative sustainability initiatives
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {partners.map((partner, index) => (
                <Card 
                  key={partner.name} 
                  className="hover-lift text-center animate-slide-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="pt-8 pb-6">
                    <div className="w-24 h-24 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-3xl font-bold text-primary">
                        {partner.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">
                      {partner.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {partner.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Collaboration Highlights */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              Collaboration Highlights
            </h2>
            <div className="space-y-6">
              <Card className="hover-lift">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    ESG Dialogues 2024
                  </h3>
                  <p className="text-muted-foreground">
                    Co-led sustainability dialogues with WRI and DRF, bringing together industry 
                    leaders, policymakers, and sustainability experts to shape India's ESG landscape.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover-lift">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Agricultural Research Partnerships
                  </h3>
                  <p className="text-muted-foreground">
                    Collaborated with ICRISAT on climate-smart agriculture initiatives, developing 
                    regenerative practices that benefit both farmers and the environment.
                  </p>
                </CardContent>
              </Card>
              <Card className="hover-lift">
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    Corporate Sustainability Programs
                  </h3>
                  <p className="text-muted-foreground">
                    Partnered with leading corporates including RIL Foundation to design and implement 
                    impactful CSR and sustainability initiatives across India.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Become a Partner
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Join our network of forward-thinking organizations committed to planetary restoration
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Partners;
