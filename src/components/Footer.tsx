
import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-bihar-800 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Column 1: About */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-6">Bihar Tourism</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Experience the rich cultural heritage, spiritual significance, and historical wonders of Bihar. From the enlightenment of Buddha to the ancient universities, embark on a journey through time.
            </p>
            <div className="flex space-x-4 pt-4">
              <a href="#" className="text-gray-300 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-primary transition-colors" aria-label="YouTube">
                <Youtube size={20} />
              </a>
            </div>
          </div>
          
          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-3">
              {["Home", "Destinations", "About Bihar", "Travel Tips", "FAQs", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-gray-300 hover:text-primary transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 3: Popular Destinations */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Popular Destinations</h3>
            <ul className="space-y-3">
              {["Bodh Gaya", "Nalanda", "Rajgir", "Patna", "Vaishali", "Gaya"].map((item) => (
                <li key={item}>
                  <Link to="#" className="text-gray-300 hover:text-primary transition-colors text-sm">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Column 4: Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-primary mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-sm">Bihar Tourism Development Corporation, Hotel Kautilya Vihar, Beer Chand Patel Path, Patna, Bihar 800001</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-primary mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">+91 612 222 2622</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-primary mr-3 flex-shrink-0" />
                <span className="text-gray-300 text-sm">info@bihartourism.gov.in</span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Bihar Tourism. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link to="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
              Terms of Service
            </Link>
            <Link to="#" className="text-gray-400 hover:text-primary transition-colors text-sm">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
