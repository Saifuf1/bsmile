import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, MessageCircle, Sun, Moon } from "lucide-react";
import { useTheme } from "@/contexts/ThemeContext";
const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const {
    theme,
    toggleTheme
  } = useTheme();
  return <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            
            
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-foreground hover:text-primary transition-colors">
              Home
            </Link>
            <Link to="/services" className="text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link to="/counselors" className="text-foreground hover:text-primary transition-colors">
              Counselors
            </Link>
            <Link to="/eap" className="text-foreground hover:text-primary transition-colors">
              For Organization
            </Link>
            <Link to="/blog" className="text-foreground hover:text-primary transition-colors">
              Blog
            </Link>
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Button variant="outline" size="sm" onClick={toggleTheme}>
              {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
            </Button>
            
            <Button size="sm">Book a Session</Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-3">
              <Link to="/" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Home
              </Link>
              <Link to="/services" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Services
              </Link>
              <Link to="/counselors" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Counselors
              </Link>
              <Link to="/eap" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                For Organization
              </Link>
              <Link to="/blog" className="text-foreground hover:text-primary transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                Blog
              </Link>
              <div className="flex flex-col space-y-2 pt-2">
                <Button variant="outline" size="sm" onClick={toggleTheme}>
                  {theme === 'light' ? <Moon className="w-4 h-4 mr-2" /> : <Sun className="w-4 h-4 mr-2" />}
                  {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
                </Button>
                <Button variant="outline" size="sm">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
                <Button size="sm">Book a Session</Button>
              </div>
            </nav>
          </div>}
      </div>
    </header>;
};
export default Header;