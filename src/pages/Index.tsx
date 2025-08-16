import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Calendar, Clock, Heart, Users, Briefcase, ArrowRight, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/hero-bg.jpg";
import counselor1Img from "@/assets/counselor-1.jpg";
import therapySessionImg from "@/assets/therapy-session.jpg";
const Index = () => {
  return <div className="min-h-screen bg-background">
      {/* Modern Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-glass-bg to-background">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,hsl(var(--cyber-blue)/0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,hsl(var(--cyber-purple)/0.1),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,hsl(var(--cyber-pink)/0.05),transparent_50%)]" />
        </div>
        
        {/* Floating Elements */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 w-2 h-2 bg-cyber-blue rounded-full animate-float" style={{
          animationDelay: '0s'
        }} />
          <div className="absolute top-40 right-20 w-1 h-1 bg-cyber-purple rounded-full animate-float" style={{
          animationDelay: '1s'
        }} />
          <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-cyber-pink rounded-full animate-float" style={{
          animationDelay: '2s'
        }} />
          <div className="absolute bottom-20 right-1/3 w-1 h-1 bg-cyber-teal rounded-full animate-float" style={{
          animationDelay: '0.5s'
        }} />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto text-center animate-slide-up">
            <div className="mb-8">
              
            </div>
            
            <div className="mb-8">
              <img src="/lovable-uploads/8c6899b1-6d05-4764-8488-e303658c1a3a.png" alt="bSmile Logo" className="h-24 md:h-32 lg:h-40 mx-auto animate-mask-split-horizontal" />
            </div>
            
            <div className="max-w-4xl mx-auto mb-12">
              <p className="text-2xl md:text-4xl font-bold text-foreground mb-4 animate-text-split-reveal">
                Every mind deserves a <span className="text-cyber-teal animate-glow-pulse">smile</span>
              </p>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Experience the future of mental health with AI-powered matching, 
                immersive therapy sessions, and 24/7 support — all in one platform.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <Button size="lg" className="group relative px-8 py-6 text-lg font-semibold bg-gradient-to-r from-cyber-blue to-cyber-purple hover:from-cyber-purple hover:to-cyber-pink transition-all duration-300 shadow-[0_0_30px_hsl(var(--cyber-blue)/0.3)] hover:shadow-[0_0_40px_hsl(var(--cyber-purple)/0.4)]">
                <span className="relative z-10">Start Your Journey</span>
              </Button>
              
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-sm">
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-cyber-teal" />
                AI-Powered Matching
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-cyber-blue" />
                Secure & Confidential
              </div>
              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <CheckCircle className="w-4 h-4 text-cyber-purple" />
                24/7 Support Available
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Glassmorphism Quick Access Strip */}
      <section className="relative py-12 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyber-blue/10 via-cyber-purple/10 to-cyber-pink/10" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-4xl mx-auto">
            
          </div>
        </div>
      </section>


      {/* Glassmorphism Services Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Animated Gradient Flow Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/20 via-cyber-purple/15 to-cyber-teal/20 animate-gradient-flow bg-[length:400%_400%]" />
          <div className="absolute inset-0 bg-gradient-to-tr from-cyber-purple/10 via-transparent to-cyber-pink/15 animate-gradient-pulse" />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyber-blue/5 to-transparent animate-glass-shimmer bg-[length:200%_100%]" />
        </div>
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyber-blue to-cyber-purple bg-clip-text text-transparent mb-4">
                Advanced Solutions
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Cutting-edge mental health services powered by AI and human expertise
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
              {/* For Individuals - Enhanced Glassmorphism */}
              <div className="group relative animate-fly-in-left">
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/20 via-cyber-purple/10 to-cyber-pink/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                <Card className="relative bg-glass-bg/40 backdrop-blur-glass border-glass-border hover:bg-glass-bg/60 transition-all duration-500 group-hover:shadow-[0_0_40px_hsl(var(--cyber-blue)/0.2)] rounded-3xl overflow-hidden animate-wipe-left-to-right">
                  <CardHeader className="relative p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-2xl shadow-[0_0_20px_hsl(var(--cyber-blue)/0.3)]">
                        <Heart className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-foreground">For Individuals</CardTitle>
                        <p className="text-sm text-cyber-blue font-medium">Personal Growth & Healing</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="relative p-8 pt-0">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Personalized counseling for anxiety, stress, relationships, and personal growth — connecting you with the right counselor based on your needs. Available on WhatsApp, Zoom, Google Meet.
                    </p>
                    <div className="flex gap-3">
                      <Link to="/services" className="flex-1">
                        <Button className="w-full bg-gradient-to-r from-cyber-blue to-cyber-purple hover:from-cyber-purple hover:to-cyber-pink transition-all duration-300">
                          Start Healing Journey
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* For Companies - Enhanced Glassmorphism */}
              <div className="group relative animate-fly-in-right">
                <div className="absolute inset-0 bg-gradient-to-br from-cyber-teal/20 via-cyber-blue/10 to-cyber-purple/20 rounded-3xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                <Card className="relative bg-glass-bg/40 backdrop-blur-glass border-glass-border hover:bg-glass-bg/60 transition-all duration-500 group-hover:shadow-[0_0_40px_hsl(var(--cyber-teal)/0.2)] rounded-3xl overflow-hidden animate-wipe-left-to-right">
                  <CardHeader className="relative p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-gradient-to-br from-cyber-teal to-cyber-blue rounded-2xl shadow-[0_0_20px_hsl(var(--cyber-teal)/0.3)]">
                        <Briefcase className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl text-foreground">For Organization</CardTitle>
                        <p className="text-sm text-cyber-teal font-medium">Enterprise Wellness Solutions</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="relative p-8 pt-0">
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      Next-generation Employee Assistance Programs with real-time analytics, 
                      AI-driven insights, and comprehensive wellness dashboards for modern workplaces.
                    </p>
                    <div className="flex gap-3">
                      <Link to="/eap" className="flex-1">
                        <Button variant="outline" className="w-full bg-glass-bg/40 backdrop-blur-glass border-glass-border hover:bg-glass-bg/60 transition-all duration-300">
                          Enterprise Solutions
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
            
            <div className="text-center">
              <Link to="/services">
                <Button size="lg" variant="outline" className="bg-glass-bg/40 backdrop-blur-glass border-glass-border hover:bg-glass-bg/60 px-8 py-4 text-lg">
                  Discover All Solutions
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works - Futuristic Flow */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyber-blue/5 via-transparent to-cyber-purple/5" />
        <div className="container mx-auto px-4 relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyber-teal to-cyber-blue bg-clip-text text-transparent mb-4">
                How It Works
              </h2>
              <p className="text-xl text-muted-foreground">
                Three simple steps to transform your mental wellness journey
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="group relative animate-fade-in-up">
                <div className="text-center relative">
                  <div className="relative inline-block mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-3xl flex items-center justify-center text-2xl font-bold text-white mx-auto shadow-[0_0_30px_hsl(var(--cyber-blue)/0.4)] group-hover:shadow-[0_0_40px_hsl(var(--cyber-purple)/0.5)] transition-all duration-500 group-hover:animate-glow-pulse animate-mask-split-vertical">
                      1
                    </div>
                    <div className="absolute -inset-4 bg-gradient-to-br from-cyber-blue/20 to-cyber-purple/20 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Chose a Platform</h3>
                  <p className="text-muted-foreground leading-relaxed">WhatsApp
 Google Meet
 Zoom</p>
                </div>
              </div>
              
              <div className="group relative">
                <div className="text-center relative">
                  <div className="relative inline-block mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyber-teal to-cyber-blue rounded-3xl flex items-center justify-center text-2xl font-bold text-white mx-auto shadow-[0_0_30px_hsl(var(--cyber-teal)/0.4)] group-hover:shadow-[0_0_40px_hsl(var(--cyber-blue)/0.5)] transition-all duration-500 group-hover:animate-glow-pulse">
                      2
                    </div>
                    <div className="absolute -inset-4 bg-gradient-to-br from-cyber-teal/20 to-cyber-blue/20 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Pick a Time</h3>
                  <p className="text-muted-foreground leading-relaxed">Schedule sessions that fit your lifestyle with our  calendar system, or connect instantly for  support with 24/7 availability.</p>
                </div>
              </div>
              
              <div className="group relative">
                <div className="text-center relative">
                  <div className="relative inline-block mb-8">
                    <div className="w-20 h-20 bg-gradient-to-br from-cyber-purple to-cyber-pink rounded-3xl flex items-center justify-center text-2xl font-bold text-white mx-auto shadow-[0_0_30px_hsl(var(--cyber-purple)/0.4)] group-hover:shadow-[0_0_40px_hsl(var(--cyber-pink)/0.5)] transition-all duration-500 group-hover:animate-glow-pulse">
                      3
                    </div>
                    <div className="absolute -inset-4 bg-gradient-to-br from-cyber-purple/20 to-cyber-pink/20 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Transformative Healing</h3>
                  <p className="text-muted-foreground leading-relaxed">Connect with a certified counselor

Licensed Professionals
Confidential
Compassionate</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              
            </div>
          </div>
        </div>
      </section>

      {/* Featured Counselor */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-cyan-400">Meet Our Counselors</h2>
            <Card className="max-w-md mx-auto">
              <CardHeader className="text-center">
                <div className="relative mx-auto mb-4">
                  <img src={counselor1Img} alt="Dr. Priya Sharma" className="w-24 h-24 rounded-full mx-auto object-cover" />
                  <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium">
                    Online
                  </div>
                </div>
                <CardTitle>Merin Issac</CardTitle>
                <p className="text-muted-foreground">M.A. Psychology • 8+ years experience</p>
              </CardHeader>
              <CardContent className="text-center">
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  <Badge variant="secondary">Anxiety</Badge>
                  <Badge variant="secondary">Depression</Badge>
                  <Badge variant="secondary">Stress Management</Badge>
                </div>
                <p className="text-sm text-muted-foreground mb-4">
                  Specializes in helping individuals overcome anxiety and build resilience.
                </p>
                <Button className="w-full mb-2">Book with Dr. Priya</Button>
                <Link to="/counselors">
                  <Button variant="outline" className="w-full">
                    Meet All Counselors
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog Highlights */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-bsmile-navy mb-12 text-center">Latest Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-bsmile-teal/20 to-bsmile-light-teal/40 flex items-center justify-center">
                  <div className="text-center text-bsmile-navy">
                    <Heart className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-sm font-medium">Mental Health Insights</p>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">5 Signs You Might Benefit from Counseling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Recognizing when it's time to seek professional help...
                  </p>
                  <Button variant="link" size="sm" className="p-0">
                    Read More <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-bsmile-light-teal/20 to-bsmile-teal/40 flex items-center justify-center">
                  <div className="text-center text-bsmile-navy">
                    <Briefcase className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-sm font-medium">Workplace Wellness</p>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">How to Talk to Your Boss About Mental Health</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Navigating conversations about mental health at work...
                  </p>
                  <Button variant="link" size="sm" className="p-0">
                    Read More <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </CardContent>
              </Card>

              <Card className="hover:shadow-lg transition-shadow">
                <div className="h-48 bg-gradient-to-br from-bsmile-teal/30 to-bsmile-light-teal/20 flex items-center justify-center">
                  <div className="text-center text-bsmile-navy">
                    <MessageCircle className="w-12 h-12 mx-auto mb-2" />
                    <p className="text-sm font-medium">FAQs & Myths</p>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Can I Do Therapy on WhatsApp?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-3">
                    Exploring the effectiveness and privacy of messaging platforms...
                  </p>
                  <Button variant="link" size="sm" className="p-0">
                    Read More <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="text-center mt-12">
              <Link to="/blog">
                <Button size="lg" variant="outline">
                  Visit the Blog
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* EAP Promo Strip */}
      <section className="py-16 bg-gradient-to-r from-bsmile-teal to-bsmile-light-teal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900">
              Support your team's mental health. Our EAP helps businesses thrive.
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Comprehensive Employee Assistance Programs that create healthier, more productive workplaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/eap">
                <Button size="lg" variant="secondary">
                  Explore EAP Plans
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-bsmile-teal">
                Download Brochure
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-bsmile-navy mb-8">Client Stories</h2>
            <Card className="p-8">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-bsmile-teal to-bsmile-light-teal rounded-full flex items-center justify-center">
                  <Star className="w-10 h-10 text-white" />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-cyan-300">
                Our story is just beginning.
              </h3>
              <p className="text-lg text-muted-foreground">
                Soon you'll see what clients have to say about their journey with bSmile. 
                Every mind deserves a smile, and we're here to help make that happen.
              </p>
            </Card>
          </div>
        </div>
      </section>

    </div>;
};
export default Index;