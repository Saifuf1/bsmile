import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Target, Users, Shield } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-bsmile-cream to-bsmile-light-teal py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-bsmile-navy mb-6">
            bSmile: A Safe Space for Every Mind
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We believe mental wellness should be warm, simple, and stigma-free. 
            Our journey began with a simple idea: every mind deserves to smile.
          </p>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bsmile-navy mb-6">Our Mission</h2>
            <p className="text-lg text-muted-foreground">
              Making mental wellness warm, simple, and stigma-free. We're here to create 
              a world where seeking help is as natural as taking care of your physical health.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-bsmile-navy mb-8 text-center">Our Story</h2>
            <div className="prose prose-lg mx-auto text-center">
              <p className="text-lg text-muted-foreground mb-6">
                bSmile was born from a simple observation: while we readily seek help for physical ailments, 
                we often struggle in silence with our mental health. We wanted to change that.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                Starting with platforms people already trust—WhatsApp, Google Meet, Zoom—we're making 
                therapy as accessible as a video call with a friend. No complicated apps, no barriers, 
                just human connection when you need it most.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we're building India's most loved mental health platform, one smile at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-bsmile-navy mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Heart className="w-12 h-12 text-bsmile-teal mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-bsmile-navy mb-3">Empathy</h3>
                <p className="text-muted-foreground">
                  We listen with our hearts and understand with our minds.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Shield className="w-12 h-12 text-bsmile-teal mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-bsmile-navy mb-3">Trust</h3>
                <p className="text-muted-foreground">
                  Your privacy and confidentiality are sacred to us.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Target className="w-12 h-12 text-bsmile-teal mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-bsmile-navy mb-3">Growth</h3>
                <p className="text-muted-foreground">
                  Every challenge is an opportunity to flourish.
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center p-6">
              <CardContent className="pt-6">
                <Users className="w-12 h-12 text-bsmile-teal mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-bsmile-navy mb-3">Accessibility</h3>
                <p className="text-muted-foreground">
                  Mental health support should be available to everyone.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-bsmile-navy mb-8">What We Offer</h2>
            <p className="text-lg text-muted-foreground mb-8">
              A perfect balance of clinical expertise and human kindness. Our approach combines 
              evidence-based therapy techniques with genuine care and understanding.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-xl font-semibold text-bsmile-navy mb-3">Clinical Excellence</h3>
                <p className="text-muted-foreground">
                  Licensed therapists with proven methodologies and continuous training.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-bsmile-navy mb-3">Human Connection</h3>
                <p className="text-muted-foreground">
                  Warm, empathetic counselors who genuinely care about your journey.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Name & Tagline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-bsmile-navy mb-8">Why "bSmile"?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              The "b" in bSmile stands for "because" - Because Every Mind Deserves a Smile. 
              It's our reminder that everyone, regardless of their struggles, deserves happiness, 
              peace, and the support they need to thrive.
            </p>
            <div className="bg-gradient-to-r from-bsmile-teal to-bsmile-light-teal text-white p-8 rounded-lg">
              <p className="text-2xl font-semibold">
                "Because Every Mind Deserves a Smile"
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-bsmile-navy mb-8">Our Vision</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're building India's most loved mental health platform. A place where seeking 
              help is normalized, where technology meets humanity, and where every interaction 
              brings us closer to a world without mental health stigma.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Meet Our Counselors</Button>
              <Button variant="outline" size="lg">See Our Services</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;