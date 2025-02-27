
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, MapPin } from "lucide-react";
import { Destination } from "@/data/destinations";

interface FeaturedDestinationProps {
  destination: Destination;
  index: number;
}

const FeaturedDestination: React.FC<FeaturedDestinationProps> = ({ destination, index }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  
  const animationDelay = `${0.1 + index * 0.1}s`;
  
  return (
    <div 
      className="destination-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all opacity-0 animate-fade-up"
      style={{ animationDelay, animationFillMode: "forwards" }}
    >
      <div className="relative h-56 overflow-hidden">
        <img 
          src={destination.imageSrc} 
          alt={destination.imageAlt}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isImageLoaded ? "img-loaded" : "img-loading"
          }`}
          onLoad={() => setIsImageLoaded(true)}
        />
        <div className="absolute top-4 left-4 z-10">
          <div className="px-3 py-1 bg-primary/90 rounded-full text-white text-xs font-medium">
            {destination.tags[0]}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center text-bihar-300 mb-3">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{destination.location.split(',')[0]}</span>
        </div>
        <h3 className="text-xl font-semibold mb-2 line-clamp-1">{destination.name}</h3>
        <p className="text-bihar-600 mb-4 line-clamp-2 text-sm">{destination.shortDescription}</p>
        
        <div className="flex items-center justify-between mt-2">
          <div className="flex">
            {destination.tags.slice(0, 2).map((tag, i) => (
              <span key={i} className="mr-2 text-xs bg-bihar-50 text-bihar-600 px-2 py-1 rounded-full">
                {tag}
              </span>
            ))}
            {destination.tags.length > 2 && (
              <span className="text-xs bg-bihar-50 text-bihar-600 px-2 py-1 rounded-full">
                +{destination.tags.length - 2}
              </span>
            )}
          </div>
          
          <Link 
            to={`/destination/${destination.id}`}
            className="flex items-center text-primary font-medium text-sm group"
          >
            View Details
            <ArrowRight size={16} className="ml-1 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedDestination;
