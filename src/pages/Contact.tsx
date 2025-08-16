import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { MessageCircle, Phone, Mail, MapPin, Clock, AlertCircle } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-bsmile-cream to-bsmile-light-teal py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-bsmile-navy mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground">
              Ready to start your mental wellness journey? We're here to support you 
              every step of the way. Reach out and let's begin.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl text-bsmile-navy">Send us a Message</CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>
                  
                  <div>
                    <Label htmlFor="platform">Preferred Platform *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="How would you like to connect?" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="whatsapp">WhatsApp</SelectItem>
                        <SelectItem value="zoom">Zoom</SelectItem>
                        <SelectItem value="google-meet">Google Meet</SelectItem>
                        <SelectItem value="phone">Phone Call</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us how we can help you..." 
                      rows={5}
                    />
                  </div>
                  
                  <Button className="w-full" size="lg">Send Message</Button>
                  
                  <div className="text-center">
                    <p className="text-sm text-muted-foreground mb-3">
                      Need immediate support?
                    </p>
                    <Button variant="outline" className="w-full">
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Talk to a Human Now
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Information */}
              <div className="space-y-8">
                {/* Contact Methods */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-bsmile-navy">Contact Information</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Phone className="w-5 h-5 text-bsmile-teal" />
                      <div>
                        <p className="font-medium">Phone</p>
                        <p className="text-muted-foreground">+91 XXX XXX XXXX</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <MessageCircle className="w-5 h-5 text-green-500" />
                      <div>
                        <p className="font-medium">WhatsApp</p>
                        <p className="text-muted-foreground">Available 24/7 for support</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <Mail className="w-5 h-5 text-bsmile-teal" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-muted-foreground">hello@bsmile.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <MapPin className="w-5 h-5 text-bsmile-teal" />
                      <div>
                        <p className="font-medium">Location</p>
                        <p className="text-muted-foreground">Serving clients across India</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Response Times */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-bsmile-navy">Response Times</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-bsmile-teal mt-0.5" />
                      <div>
                        <p className="font-medium">General Inquiries</p>
                        <p className="text-muted-foreground text-sm">We respond within 24 hours</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <MessageCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium">WhatsApp Support</p>
                        <p className="text-muted-foreground text-sm">Instant response available</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-red-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Crisis Support</p>
                        <p className="text-muted-foreground text-sm">Immediate assistance available 24/7</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Cancellation Policy */}
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl text-bsmile-navy">Important Policies</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-medium text-bsmile-navy">Cancellation & Reschedule Policy</h4>
                        <p className="text-sm text-muted-foreground">
                          Please notify us at least 1 hour in advance if you need to cancel 
                          or reschedule your session.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-bsmile-navy">Confidentiality</h4>
                        <p className="text-sm text-muted-foreground">
                          All conversations are completely confidential and secure.
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="font-medium text-bsmile-navy">Emergency Situations</h4>
                        <p className="text-sm text-muted-foreground">
                          For mental health emergencies, please contact emergency services 
                          or call our 24/7 crisis line.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-bsmile-navy mb-12 text-center">
              Quick Actions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <MessageCircle className="w-12 h-12 text-green-500 mx-auto mb-4" />
                <h3 className="font-semibold text-bsmile-navy mb-2">WhatsApp Chat</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Start a conversation right now
                </p>
                <Button variant="outline" className="w-full">Chat Now</Button>
              </Card>
              
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <Phone className="w-12 h-12 text-bsmile-teal mx-auto mb-4" />
                <h3 className="font-semibold text-bsmile-navy mb-2">Schedule Call</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  Book a convenient time to talk
                </p>
                <Button variant="outline" className="w-full">Schedule Now</Button>
              </Card>
              
              <Card className="text-center p-6 hover:shadow-lg transition-shadow">
                <AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-4" />
                <h3 className="font-semibold text-bsmile-navy mb-2">Crisis Support</h3>
                <p className="text-sm text-muted-foreground mb-4">
                  24/7 emergency assistance
                </p>
                <Button variant="destructive" className="w-full">Get Help Now</Button>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-bsmile-navy mb-6">
              Ready to bSmile?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Your mental wellness journey starts with a single step. 
              We're here to walk alongside you every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Book Your First Session</Button>
              <Button variant="outline" size="lg">Explore Our Services</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;