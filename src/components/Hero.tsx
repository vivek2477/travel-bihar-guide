
import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToDestinations = () => {
    const destinationsSection = document.getElementById("destinations");
    if (destinationsSection) {
      destinationsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1590077428593-a55bb07c4665?q=80&w=2942&auto=format&fit=crop"
          alt="Mahabodhi Temple at Bodh Gaya, Bihar"
          className={`w-full h-full object-cover transition-all duration-700 ${
            isLoaded ? "img-loaded" : "img-loading"
          }`}
          onLoad={() => setIsLoaded(true)}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-center items-center text-center text-white">
        <span className={`inline-block px-4 py-1.5 bg-primary/90 rounded-full text-sm font-medium mb-6 animate-fade-up opacity-0 ${
          isLoaded ? "opacity-100" : ""
        }`} style={{ animationDelay: "0.2s" }}>
          Discover the Heart of Ancient India
        </span>
        
        <h1 className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl animate-fade-up opacity-0 ${
          isLoaded ? "opacity-100" : ""
        }`} style={{ animationDelay: "0.4s" }}>
          Experience the Spiritual &amp; Historical Wonders of Bihar
        </h1>
        
        <p className={`text-lg md:text-xl max-w-2xl mb-10 text-white/90 animate-fade-up opacity-0 ${
          isLoaded ? "opacity-100" : ""
        }`} style={{ animationDelay: "0.6s" }}>
          From the enlightenment of Buddha to the ancient universities of Nalanda, embark on a journey through time in the land of spiritual awakening.
        </p>
        
        <div className={`flex flex-col sm:flex-row gap-4 animate-fade-up opacity-0 ${
          isLoaded ? "opacity-100" : ""
        }`} style={{ animationDelay: "0.8s" }}>
          <button 
            className="px-8 py-3 rounded-md bg-primary text-white font-medium transition-all hover:bg-primary/90 active:scale-95"
            onClick={scrollToDestinations}
          >
            Explore Destinations
          </button>
          <a 
            href="#travel-tips" 
            className="px-8 py-3 rounded-md bg-white/10 backdrop-blur-sm text-white font-medium transition-all hover:bg-white/20 active:scale-95"
          >
            Travel Guide
          </a>
        </div>
      </div>
      
      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <button 
          onClick={scrollToDestinations}
          aria-label="Scroll down"
          className="flex flex-col items-center text-white/80 hover:text-white transition-colors"
        >
          <span className="text-sm font-medium mb-2">Scroll Down</span>
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
};

export default Hero;
