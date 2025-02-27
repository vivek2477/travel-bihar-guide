
import { useState, useEffect } from "react";
import FeaturedDestination from "./FeaturedDestination";
import destinations from "@/data/destinations";
import { Search } from "lucide-react";

const Destinations = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");
  const [isVisible, setIsVisible] = useState(false);
  
  // Extract unique tags from all destinations
  const allTags = ["All", ...Array.from(new Set(destinations.flatMap(dest => dest.tags)))];
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    
    const element = document.getElementById("destinations");
    if (element) {
      observer.observe(element);
    }
    
    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);
  
  // Filter destinations based on search term and selected tag
  const filteredDestinations = destinations.filter(destination => {
    const matchesSearch = destination.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         destination.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesTag = selectedTag === "All" || destination.tags.includes(selectedTag);
    
    return matchesSearch && matchesTag;
  });

  return (
    <section id="destinations" className="py-20 bg-bihar-50">
      <div className="container mx-auto px-6">
        <div className={`text-center mb-12 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Explore Bihar
          </span>
          <h2 className="text-4xl font-bold mb-6">Popular Destinations</h2>
          <p className="max-w-2xl mx-auto text-bihar-600">
            Discover the spiritual and historical wonders that make Bihar a must-visit destination for travelers seeking cultural enrichment and spiritual awakening.
          </p>
        </div>
        
        <div className={`mb-10 transition-all duration-700 delay-100 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}>
          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-6 items-center justify-between">
            <div className="relative w-full md:w-96">
              <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-bihar-300" />
              <input 
                type="text"
                placeholder="Search destinations..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-lg border border-bihar-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center md:justify-end">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                    selectedTag === tag 
                      ? "bg-primary text-white" 
                      : "bg-white text-bihar-600 hover:bg-bihar-100"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Destinations Grid */}
        {filteredDestinations.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination, index) => (
              <FeaturedDestination 
                key={destination.id} 
                destination={destination} 
                index={index}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-xl">
            <h3 className="text-xl font-medium mb-2">No destinations found</h3>
            <p className="text-bihar-600">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Destinations;
