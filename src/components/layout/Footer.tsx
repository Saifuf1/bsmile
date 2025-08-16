import { Link } from "react-router-dom";
import { MessageCircle, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
const Footer = () => {
  return <footer className="bg-bsmile-navy text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Tagline */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <img src="/lovable-uploads/450cba24-70a6-414a-9efa-7e3c1e5a94de.png" alt="bSmile Logo" className="w-24 h-24 object-contain" />
              
            </div>
            <p className="text-sm text-gray-300 mb-4">
              Because Every Mind Deserves a Smile
            </p>
            <Button size="sm" className="bg-bsmile-teal hover:bg-bsmile-teal/80">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp Support
            </Button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Home
              </Link>
              <Link to="/about" className="block text-sm text-gray-300 hover:text-white transition-colors">
                About Us
              </Link>
              <Link to="/services" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Services
              </Link>
              <Link to="/counselors" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Counselors
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Our Services</h3>
            <div className="space-y-2">
              <Link to="/services" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Individual Therapy
              </Link>
              <Link to="/services" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Couple Counseling
              </Link>
              <Link to="/eap" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Corporate EAP
              </Link>
              <Link to="/blog" className="block text-sm text-gray-300 hover:text-white transition-colors">
                Mental Health Blog
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4 text-bsmile-teal" />
                <span className="text-sm text-gray-300">+91 9207626932</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-bsmile-teal" />
                <span className="text-sm text-gray-300">hello@bsmile.com</span>
              </div>
              
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm text-gray-300 mb-4 md:mb-0">
            © 2024 bSmile. All rights reserved.
          </div>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-sm text-gray-300 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link to="/terms" className="text-sm text-gray-300 hover:text-white transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;