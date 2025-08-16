import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { MessageCircle, Calendar, Globe, Award } from "lucide-react";
import counselor1Img from "@/assets/counselor-1.jpg";

const Counselors = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("all");
  const [selectedGender, setSelectedGender] = useState<string>("all");
  const [selectedSpecialty, setSelectedSpecialty] = useState<string>("all");

  // Mock data for counselors
  const counselors = [
    {
      id: 1,
      name: "Dr. Priya Sharma",
      image: counselor1Img,
      languages: ["English", "Hindi"],
      gender: "Female",
      specialties: ["Anxiety", "Depression", "Stress Management"],
      certificates: ["M.A. Psychology", "Licensed Clinical Psychologist"],
      isOnline: true,
      experience: "8+ years"
    },
    {
      id: 2,
      name: "Dr. Arjun Mehta",
      image: counselor1Img,
      languages: ["English", "Hindi", "Gujarati"],
      gender: "Male",
      specialties: ["Relationship Counseling", "Career Guidance", "Family Therapy"],
      certificates: ["M.Phil. Clinical Psychology", "Certified Family Therapist"],
      isOnline: false,
      experience: "12+ years"
    },
    {
      id: 3,
      name: "Dr. Kavya Reddy",
      image: counselor1Img,
      languages: ["English", "Telugu", "Tamil"],
      gender: "Female",
      specialties: ["Trauma Therapy", "PTSD", "Grief Counseling"],
      certificates: ["Ph.D. Psychology", "EMDR Certified"],
      isOnline: true,
      experience: "10+ years"
    },
    {
      id: 4,
      name: "Dr. Rohit Singh",
      image: counselor1Img,
      languages: ["English", "Hindi", "Punjabi"],
      gender: "Male",
      specialties: ["Addiction Recovery", "Behavioral Therapy", "Mindfulness"],
      certificates: ["M.A. Clinical Psychology", "Addiction Counselor Certified"],
      isOnline: true,
      experience: "6+ years"
    }
  ];

  const filteredCounselors = counselors.filter(counselor => {
    const languageMatch = selectedLanguage === "all" || counselor.languages.includes(selectedLanguage);
    const genderMatch = selectedGender === "all" || counselor.gender.toLowerCase() === selectedGender;
    const specialtyMatch = selectedSpecialty === "all" || counselor.specialties.some(specialty => 
      specialty.toLowerCase().includes(selectedSpecialty.toLowerCase())
    );
    
    return languageMatch && genderMatch && specialtyMatch;
  });

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-bsmile-cream to-bsmile-light-teal py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-bsmile-navy mb-6">
              Meet Our Counselors
            </h1>
            <p className="text-xl text-muted-foreground">
              Our counselors are licensed, kind-hearted, and passionate about helping you grow. 
              Each brings their unique expertise and warm approach to your mental health journey.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-bsmile-navy mb-6 text-center">Find Your Perfect Match</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Language</label>
                <Select value={selectedLanguage} onValueChange={setSelectedLanguage}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Languages</SelectItem>
                    <SelectItem value="English">English</SelectItem>
                    <SelectItem value="Hindi">Hindi</SelectItem>
                    <SelectItem value="Telugu">Telugu</SelectItem>
                    <SelectItem value="Tamil">Tamil</SelectItem>
                    <SelectItem value="Gujarati">Gujarati</SelectItem>
                    <SelectItem value="Punjabi">Punjabi</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Gender</label>
                <Select value={selectedGender} onValueChange={setSelectedGender}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Gender" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Genders</SelectItem>
                    <SelectItem value="female">Female</SelectItem>
                    <SelectItem value="male">Male</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Specialization</label>
                <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Specialty" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Specialties</SelectItem>
                    <SelectItem value="anxiety">Anxiety</SelectItem>
                    <SelectItem value="depression">Depression</SelectItem>
                    <SelectItem value="relationship">Relationship Counseling</SelectItem>
                    <SelectItem value="trauma">Trauma Therapy</SelectItem>
                    <SelectItem value="addiction">Addiction Recovery</SelectItem>
                    <SelectItem value="career">Career Guidance</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Counselors Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCounselors.map((counselor) => (
              <Card key={counselor.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="pb-4">
                  <div className="relative">
                    <img 
                      src={counselor.image} 
                      alt={counselor.name}
                      className="w-24 h-24 rounded-full mx-auto object-cover"
                    />
                    <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 px-3 py-1 rounded-full text-xs font-medium ${
                      counselor.isOnline 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {counselor.isOnline ? 'Online' : 'Offline'}
                    </div>
                  </div>
                  <CardTitle className="text-center mt-4">{counselor.name}</CardTitle>
                  <p className="text-center text-sm text-muted-foreground">{counselor.experience} experience</p>
                </CardHeader>
                
                <CardContent>
                  {/* Languages */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Globe className="w-4 h-4 text-bsmile-teal" />
                      <span className="text-sm font-medium">Languages:</span>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {counselor.languages.map((lang) => (
                        <Badge key={lang} variant="secondary" className="text-xs">
                          {lang}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Specialties */}
                  <div className="mb-4">
                    <h4 className="text-sm font-medium mb-2">Specializations:</h4>
                    <div className="flex flex-wrap gap-1">
                      {counselor.specialties.map((specialty) => (
                        <Badge key={specialty} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Certificates */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-4 h-4 text-bsmile-teal" />
                      <span className="text-sm font-medium">Qualifications:</span>
                    </div>
                    <div className="space-y-1">
                      {counselor.certificates.map((cert) => (
                        <p key={cert} className="text-xs text-muted-foreground">• {cert}</p>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-2">
                    <Button className="w-full" disabled={!counselor.isOnline}>
                      <Calendar className="w-4 h-4 mr-2" />
                      Book Session
                    </Button>
                    <Button variant="outline" className="w-full" disabled={!counselor.isOnline}>
                      <MessageCircle className="w-4 h-4 mr-2" />
                      Instant Chat
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCounselors.length === 0 && (
            <div className="text-center py-12">
              <p className="text-lg text-muted-foreground">
                No counselors match your current filters. Please try adjusting your search criteria.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-bsmile-navy mb-6">
              Can't Find the Right Match?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We're constantly adding new counselors to our team. Contact us and we'll help you 
              find the perfect therapist for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">Contact Us</Button>
              <Button variant="outline" size="lg">
                <MessageCircle className="w-4 h-4 mr-2" />
                WhatsApp Support
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Counselors;