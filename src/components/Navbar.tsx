
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Destinations", path: "/#destinations" },
    { name: "About Bihar", path: "/#about" },
    { name: "Travel Tips", path: "/#travel-tips" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-white/90 backdrop-blur-md shadow-sm py-3" 
          : "bg-transparent py-5"
      )}
    >
      <nav className="container mx-auto px-6 flex items-center justify-between">
        <Link 
          to="/" 
          className="text-2xl font-semibold flex items-center"
        >
          <span className="text-primary mr-1">Bihar</span>
          <span>Tourism</span>
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "relative font-medium text-base transition-colors hover:text-primary",
                location.pathname === link.path && "text-primary"
              )}
            >
              {link.name}
            </Link>
          ))}
          
          <Link 
            to="/contact" 
            className="px-6 py-2 rounded-md bg-primary text-white font-medium transition-all hover:bg-primary/90 active:scale-95"
          >
            Contact Us
          </Link>
        </div>
        
        <button 
          className="md:hidden text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
      
      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in">
          <div className="py-4 px-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "font-medium text-base transition-colors py-2 hover:text-primary",
                  location.pathname === link.path && "text-primary"
                )}
              >
                {link.name}
              </Link>
            ))}
            
            <Link 
              to="/contact" 
              className="px-6 py-2 rounded-md bg-primary text-white font-medium transition-all text-center hover:bg-primary/90 active:scale-95"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
