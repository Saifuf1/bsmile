import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Camera, Heart, Users, Briefcase } from "lucide-react";

const Gallery = () => {
  // Mock gallery items - in real implementation, these would be actual photos
  const galleryItems = [
    {
      id: 1,
      category: "Smiles",
      title: "Moments of Joy",
      description: "Capturing the happiness our therapy brings",
      placeholder: "Happy client testimonial moment"
    },
    {
      id: 2,
      category: "Sessions",
      title: "Safe Spaces",
      description: "Comfortable environments for healing",
      placeholder: "Peaceful therapy session setup"
    },
    {
      id: 3,
      category: "Wellness",
      title: "Mental Wellness",
      description: "Promoting healthy minds and hearts",
      placeholder: "Wellness and mindfulness imagery"
    },
    {
      id: 4,
      category: "Corporate",
      title: "Workplace Wellness",
      description: "Supporting teams and organizations",
      placeholder: "Corporate wellness workshop"
    },
    {
      id: 5,
      category: "Smiles",
      title: "Success Stories",
      description: "Celebrating mental health victories",
      placeholder: "Client success celebration"
    },
    {
      id: 6,
      category: "Sessions",
      title: "Connection",
      description: "Building trust and understanding",
      placeholder: "Therapist-client connection moment"
    },
    {
      id: 7,
      category: "Wellness",
      title: "Mindful Moments",
      description: "Practicing self-care and reflection",
      placeholder: "Meditation and mindfulness scene"
    },
    {
      id: 8,
      category: "Corporate",
      title: "Team Building",
      description: "Strengthening workplace relationships",
      placeholder: "Corporate team wellness activity"
    }
  ];

  const categories = [
    { name: "All", icon: Camera, count: galleryItems.length },
    { name: "Smiles", icon: Heart, count: galleryItems.filter(item => item.category === "Smiles").length },
    { name: "Sessions", icon: Users, count: galleryItems.filter(item => item.category === "Sessions").length },
    { name: "Wellness", icon: Heart, count: galleryItems.filter(item => item.category === "Wellness").length },
    { name: "Corporate", icon: Briefcase, count: galleryItems.filter(item => item.category === "Corporate").length }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-bsmile-cream to-bsmile-light-teal py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-bsmile-navy mb-6">
              Gallery
            </h1>
            <p className="text-xl text-muted-foreground">
              A visual representation of the world bSmile is creating—one of hope, healing, 
              and genuine human connection.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-semibold text-bsmile-navy mb-6 text-center">Browse Categories</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => {
                const Icon = category.icon;
                return (
                  <Button
                    key={category.name}
                    variant="outline"
                    className="flex items-center gap-2"
                  >
                    <Icon className="w-4 h-4" />
                    {category.name} ({category.count})
                  </Button>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {galleryItems.map((item) => (
                <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="relative">
                    {/* Placeholder for actual images */}
                    <div className="h-64 bg-gradient-to-br from-bsmile-teal/20 to-bsmile-light-teal/40 flex items-center justify-center">
                      <div className="text-center text-bsmile-navy/60">
                        <Camera className="w-12 h-12 mx-auto mb-2" />
                        <p className="text-sm font-medium">{item.placeholder}</p>
                      </div>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm text-bsmile-navy px-3 py-1 rounded-full text-sm font-medium">
                        {item.category}
                      </span>
                    </div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-bsmile-navy mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-bsmile-navy mb-6">
              Our Story is Just Beginning
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              As we grow and help more people on their mental health journey, 
              this gallery will be filled with real moments of transformation, healing, and hope. 
              We can't wait to share these beautiful stories with you.
            </p>
            <div className="bg-white p-8 rounded-lg max-w-2xl mx-auto">
              <Heart className="w-16 h-16 text-bsmile-teal mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-bsmile-navy mb-3">
                Every Mind Deserves a Smile
              </h3>
              <p className="text-muted-foreground">
                Soon, these spaces will showcase the real impact of our work—
                anonymized moments of breakthrough, wellness workshops, team building sessions, 
                and the genuine smiles that mental health support brings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Share Your Moment */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-bsmile-navy mb-6">
              Share Your Moment
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have a moment of wellness, growth, or positivity you'd like to share? 
              We'd love to feature your story (with your permission) to inspire others on their journey.
            </p>
            <Button size="lg">Share Your Story</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;