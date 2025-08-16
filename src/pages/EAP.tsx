import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Users, Shield, Brain, FileText, BarChart3, Clock, CheckCircle } from "lucide-react";
import eapHeroImg from "@/assets/eap-hero.jpg";

const EAP = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-bsmile-cream to-bsmile-light-teal py-20 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-bsmile-navy mb-6">
                Bring Mental Wellness to Work
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Comprehensive Employee Assistance Programs that support your team's mental health 
                and drive business success through happier, more productive employees.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg">Download Brochure</Button>
                <Button variant="outline" size="lg">Talk to Sales</Button>
              </div>
            </div>
            <div className="relative">
              <img 
                src={eapHeroImg} 
                alt="Corporate wellness team" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What is EAP */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bsmile-navy mb-6">What is an EAP?</h2>
            <p className="text-lg text-muted-foreground">
              An Employee Assistance Program (EAP) is a confidential support service that helps employees 
              deal with personal and work-related challenges that may impact their job performance, 
              health, and well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Shield className="w-12 h-12 text-bsmile-teal mx-auto mb-4" />
                <CardTitle>Confidential Support</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Complete privacy for all employee interactions with our counselors.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Clock className="w-12 h-12 text-bsmile-teal mx-auto mb-4" />
                <CardTitle>24/7 Availability</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Round-the-clock support through various platforms and communication channels.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Brain className="w-12 h-12 text-bsmile-teal mx-auto mb-4" />
                <CardTitle>Professional Guidance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Licensed therapists and counselors specialized in workplace mental health.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Mental Health at Work Matters */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bsmile-navy mb-6">
              Why Mental Health at Work Matters
            </h2>
            <p className="text-lg text-muted-foreground">
              The modern workplace can be a source of significant stress. Investing in your employees' 
              mental health isn't just the right thing to do—it's good business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg text-center">
              <TrendingUp className="w-10 h-10 text-bsmile-teal mx-auto mb-4" />
              <h3 className="font-semibold text-bsmile-navy mb-2">25% Increase</h3>
              <p className="text-sm text-muted-foreground">in productivity with mental health support</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center">
              <Users className="w-10 h-10 text-bsmile-teal mx-auto mb-4" />
              <h3 className="font-semibold text-bsmile-navy mb-2">40% Reduction</h3>
              <p className="text-sm text-muted-foreground">in employee turnover rates</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center">
              <CheckCircle className="w-10 h-10 text-bsmile-teal mx-auto mb-4" />
              <h3 className="font-semibold text-bsmile-navy mb-2">60% Less</h3>
              <p className="text-sm text-muted-foreground">sick days and absenteeism</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg text-center">
              <BarChart3 className="w-10 h-10 text-bsmile-teal mx-auto mb-4" />
              <h3 className="font-semibold text-bsmile-navy mb-2">ROI 4:1</h3>
              <p className="text-sm text-muted-foreground">return on investment for EAP programs</p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-bsmile-navy mb-12 text-center">
              Comprehensive EAP Solutions
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <Card>
                <CardHeader>
                  <Users className="w-10 h-10 text-bsmile-teal mb-2" />
                  <CardTitle>Individual Counseling</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    One-on-one sessions for employees dealing with stress, anxiety, depression, 
                    or personal challenges affecting their work performance.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Confidential sessions via WhatsApp, Zoom, or phone
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Licensed therapists with workplace specialization
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Flexible scheduling to fit work hours
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Brain className="w-10 h-10 text-bsmile-teal mb-2" />
                  <CardTitle>Group Sessions & Webinars</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Educational workshops and group therapy sessions focused on common workplace 
                    mental health challenges and stress management techniques.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Stress management workshops
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Burnout prevention seminars
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Team building through wellness
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <BarChart3 className="w-10 h-10 text-bsmile-teal mb-2" />
                  <CardTitle>Burnout & Stress Assessments</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Regular assessments to identify stress levels and burnout risks within your 
                    organization, with actionable insights for prevention.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Anonymous stress level surveys
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Burnout risk identification
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Department-wise wellness reports
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <FileText className="w-10 h-10 text-bsmile-teal mb-2" />
                  <CardTitle>Crisis Intervention</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Immediate support for employees experiencing acute mental health crises, 
                    with 24/7 availability for urgent situations.
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      24/7 crisis hotline
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Immediate counselor availability
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      Follow-up care coordination
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* HR Tools Coming Soon */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-bsmile-navy mb-6">
              HR Tools Coming Soon
            </h2>
            <p className="text-lg text-muted-foreground mb-12">
              We're developing comprehensive dashboards and analytics tools to help HR teams 
              track wellness trends and program effectiveness.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg">
                <BarChart3 className="w-12 h-12 text-bsmile-teal mx-auto mb-4" />
                <h3 className="font-semibold text-bsmile-navy mb-2">Usage Analytics</h3>
                <p className="text-sm text-muted-foreground">
                  Monthly summaries of program utilization without compromising employee privacy
                </p>
                <Badge variant="secondary" className="mt-3">Coming Soon</Badge>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <TrendingUp className="w-12 h-12 text-bsmile-teal mx-auto mb-4" />
                <h3 className="font-semibold text-bsmile-navy mb-2">Wellness Trends</h3>
                <p className="text-sm text-muted-foreground">
                  Aggregate data on workplace stress patterns and intervention effectiveness
                </p>
                <Badge variant="secondary" className="mt-3">Coming Soon</Badge>
              </div>
              
              <div className="bg-white p-6 rounded-lg">
                <FileText className="w-12 h-12 text-bsmile-teal mx-auto mb-4" />
                <h3 className="font-semibold text-bsmile-navy mb-2">Custom Reports</h3>
                <p className="text-sm text-muted-foreground">
                  Tailored reports for executives and HR teams to track ROI and program impact
                </p>
                <Badge variant="secondary" className="mt-3">Coming Soon</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-bsmile-navy mb-6">
              Expected Results
            </h2>
            <p className="text-lg text-muted-foreground">
              Organizations that invest in employee mental health see measurable improvements 
              across multiple business metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-8">
              <Users className="w-16 h-16 text-bsmile-teal mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-bsmile-navy mb-2">Higher Retention</h3>
              <p className="text-muted-foreground">
                Employees feel valued and supported, leading to improved loyalty and reduced turnover costs.
              </p>
            </Card>

            <Card className="text-center p-8">
              <TrendingUp className="w-16 h-16 text-bsmile-teal mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-bsmile-navy mb-2">Reduced Sick Leaves</h3>
              <p className="text-muted-foreground">
                Better mental health leads to fewer stress-related illnesses and improved overall well-being.
              </p>
            </Card>

            <Card className="text-center p-8">
              <CheckCircle className="w-16 h-16 text-bsmile-teal mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-bsmile-navy mb-2">Happier Teams</h3>
              <p className="text-muted-foreground">
                Improved workplace culture, better collaboration, and higher employee satisfaction scores.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-bsmile-teal to-bsmile-light-teal text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Workplace?
            </h2>
            <p className="text-xl mb-8">
              Let's discuss how our EAP can support your team's mental health and drive your business success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary">
                <FileText className="w-4 h-4 mr-2" />
                Download Brochure
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-bsmile-teal">
                Talk to Sales Team
              </Button>
              <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-bsmile-teal">
                Request Callback
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EAP;