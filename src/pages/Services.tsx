
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Video, Phone, Users, Heart, Briefcase, Clock, IndianRupee, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import therapySessionImg from "@/assets/therapy-session.jpg";

const Services = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-bsmile-cream to-bsmile-light-teal py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-bsmile-navy mb-6 animate-text-split-reveal">
              Our Services
            </h1>
            <p className="text-xl text-muted-foreground">
              Comprehensive mental health support tailored to your needs, 
              available on the platforms you already use and trust.
            </p>
          </div>
        </div>
      </section>

      {/* For Individuals Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-bsmile-navy mb-4 text-center">For Individuals</h2>
            <p className="text-lg text-muted-foreground text-center mb-12">
              Whether you're dealing with anxiety, relationship issues, work stress, or just need someone to talk to
            </p>

            {/* Who It's For */}
            <div className="mb-16">
              <h3 className="text-2xl font-semibold text-bsmile-navy mb-6">Who Can Benefit?</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Badge variant="secondary" className="p-3 text-center animate-fade-in-left">Anxiety & Stress</Badge>
                <Badge variant="secondary" className="p-3 text-center animate-fade-in-right">Relationship Issues</Badge>
                <Badge variant="secondary" className="p-3 text-center animate-fade-in-left">Work Burnout</Badge>
                <Badge variant="secondary" className="p-3 text-center animate-fade-in-right">Grief & Loss</Badge>
                <Badge variant="secondary" className="p-3 text-center animate-fade-in-left">Low Confidence</Badge>
                <Badge variant="secondary" className="p-3 text-center animate-fade-in-right">Life Transitions</Badge>
                <Badge variant="secondary" className="p-3 text-center animate-fade-in-left">Depression</Badge>
                <Badge variant="secondary" className="p-3 text-center animate-fade-in-right">Academic Pressure</Badge>
              </div>
            </div>

            {/* Session Types */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              <Card className="animate-fade-in-up">
                <CardHeader>
                  <Heart className="w-10 h-10 text-bsmile-teal mb-2 animate-mask-split-vertical" />
                  <CardTitle>Individual Counseling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    One-on-one sessions with licensed therapists in a safe, confidential environment.
                  </p>
                </CardContent>
              </Card>

              <Card className="animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                <CardHeader>
                  <Users className="w-10 h-10 text-bsmile-teal mb-2 animate-mask-split-vertical" />
                  <CardTitle>Relationship & Couple Therapy</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Work through relationship challenges with your partner in guided sessions.
                  </p>
                </CardContent>
              </Card>

              <Card className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                <CardHeader>
                  <Briefcase className="w-10 h-10 text-bsmile-teal mb-2 animate-mask-split-vertical" />
                  <CardTitle>Career & Academic Support</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Navigate work stress, career decisions, and academic challenges with expert guidance.
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Session Modes */}
            <div className="bg-muted/30 p-8 rounded-lg mb-16">
              <h3 className="text-2xl font-semibold text-bsmile-navy mb-6 text-center">Choose Your Preferred Platform</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center animate-fade-in-scale">
                  <MessageCircle className="w-12 h-12 text-green-500 mx-auto mb-3 animate-mask-split-horizontal" />
                  <h4 className="font-semibold">WhatsApp</h4>
                  <p className="text-sm text-muted-foreground">Voice & Video calls</p>
                </div>
                <div className="text-center animate-fade-in-scale" style={{animationDelay: '0.1s'}}>
                  <Video className="w-12 h-12 text-blue-500 mx-auto mb-3 animate-mask-split-horizontal" />
                  <h4 className="font-semibold">Google Meet</h4>
                  <p className="text-sm text-muted-foreground">Secure video sessions</p>
                </div>
                <div className="text-center animate-fade-in-scale" style={{animationDelay: '0.2s'}}>
                  <Video className="w-12 h-12 text-blue-600 mx-auto mb-3 animate-mask-split-horizontal" />
                  <h4 className="font-semibold">Zoom</h4>
                  <p className="text-sm text-muted-foreground">Professional meetings</p>
                </div>
                <div className="text-center animate-fade-in-scale" style={{animationDelay: '0.3s'}}>
                  <Phone className="w-12 h-12 text-gray-600 mx-auto mb-3 animate-mask-split-horizontal" />
                  <h4 className="font-semibold">Phone Call</h4>
                  <p className="text-sm text-muted-foreground">Voice-only sessions</p>
                </div>
              </div>
            </div>

            {/* Booking Options */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <Card className="relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-bsmile-teal/10 to-bsmile-light-teal/20"></div>
                <CardHeader className="relative">
                  <Clock className="w-10 h-10 text-bsmile-teal mb-2" />
                  <CardTitle>Instant Support</CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-muted-foreground mb-4">
                    Need to talk right now? Connect with an available counselor instantly via WhatsApp.
                  </p>
                  <Button>Start Instant Chat</Button>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Calendar className="w-10 h-10 text-bsmile-teal mb-2" />
                  <CardTitle>Scheduled Appointments</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Book a session at your preferred time with your chosen counselor.
                  </p>
                  <Button variant="outline">Schedule Session</Button>
                </CardContent>
              </Card>
            </div>

            {/* Pricing */}
            <div className="text-center mb-16">
              <h3 className="text-2xl font-semibold text-bsmile-navy mb-6">Affordable Pricing</h3>
              <div className="inline-flex items-center bg-bsmile-teal text-white px-6 py-3 rounded-lg text-lg font-semibold">
                <IndianRupee className="w-5 h-5 mr-1" />
                499 - First Session
              </div>
              <p className="text-muted-foreground mt-4">Affordable packages available for ongoing support</p>
            </div>
          </div>
        </div>
      </section>

      {/* For Corporates Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-bsmile-navy mb-6">For Organizations</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Employee Assistance Programs (EAP) designed to support your team's mental wellness 
              and boost workplace productivity.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-bsmile-navy mb-2">Happier Employees</h3>
                <p className="text-sm text-muted-foreground">Improved mental health leads to higher job satisfaction</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-bsmile-navy mb-2">Higher Productivity</h3>
                <p className="text-sm text-muted-foreground">Reduced stress and burnout in the workplace</p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="font-semibold text-bsmile-navy mb-2">Confidential Support</h3>
                <p className="text-sm text-muted-foreground">Private sessions for all staff members</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/eap">
                <Button size="lg">Visit EAP Page</Button>
              </Link>
              <Button variant="outline" size="lg">Contact Sales</Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-bsmile-navy mb-6">Ready to Start Your Journey?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Take the first step towards better mental health. Our counselors are here to support you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Book Your First Session</Button>
              <Button variant="outline" size="lg">
                <MessageCircle className="w-4 h-4 mr-2" />
                Chat on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
