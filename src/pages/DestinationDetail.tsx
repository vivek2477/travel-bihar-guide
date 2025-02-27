
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import destinations, { Destination } from "@/data/destinations";
import { ArrowLeft, MapPin, Clock, CalendarDays, MapIcon, Train, Plane, Car } from "lucide-react";

const DestinationDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [destination, setDestination] = useState<Destination | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("about");
  const [imageLoaded, setImageLoaded] = useState(false);
  
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Simulate data loading
    setTimeout(() => {
      const foundDestination = destinations.find(d => d.id === id) || null;
      setDestination(foundDestination);
      setIsLoading(false);
    }, 500);
  }, [id]);
  
  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-bold flex items-center mb-4">
            <span className="text-primary mr-1">Bihar</span>
            <span>Tourism</span>
          </h2>
          <div className="w-16 h-1 bg-primary/30 relative overflow-hidden rounded">
            <div className="absolute inset-y-0 left-0 bg-primary w-16 animate-[slide_1.5s_ease-in-out_infinite]"></div>
          </div>
        </div>
      </div>
    );
  }
  
  if (!destination) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Destination Not Found</h2>
            <p className="text-bihar-600 mb-6">The destination you're looking for doesn't exist or has been removed.</p>
            <Link 
              to="/" 
              className="inline-flex items-center px-6 py-3 bg-primary text-white rounded-md font-medium hover:bg-primary/90 transition-all"
            >
              <ArrowLeft size={18} className="mr-2" />
              Back to Home
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-16">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[400px]">
          <div className="absolute inset-0">
            <img 
              src={destination.imageSrc} 
              alt={destination.imageAlt}
              className={`w-full h-full object-cover transition-all duration-700 ${
                imageLoaded ? "img-loaded" : "img-loading"
              }`}
              onLoad={() => setImageLoaded(true)}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
          </div>
          
          <div className="relative z-10 container mx-auto px-6 h-full flex flex-col justify-end pb-16">
            <Link 
              to="/" 
              className="inline-flex items-center text-white/90 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft size={18} className="mr-2" />
              Back to all destinations
            </Link>
            
            <div className="flex items-center mb-4">
              <div className="px-3 py-1 bg-primary/90 rounded-full text-white text-xs font-medium mr-3">
                {destination.tags[0]}
              </div>
              <div className="flex items-center text-white/80">
                <MapPin size={16} className="mr-1" />
                <span className="text-sm">{destination.location}</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              {destination.name}
            </h1>
            
            <p className="text-white/90 text-lg max-w-3xl">
              {destination.shortDescription}
            </p>
          </div>
        </section>
        
        {/* Tabs Navigation */}
        <section className="sticky top-16 z-20 bg-white shadow-sm">
          <div className="container mx-auto px-6">
            <div className="flex overflow-x-auto py-2 space-x-6 no-scrollbar">
              {[
                { id: "about", label: "About" },
                { id: "directions", label: "How to Reach" },
                { id: "facilities", label: "Facilities" }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`font-medium whitespace-nowrap py-3 px-1 border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? "border-primary text-primary"
                      : "border-transparent text-bihar-600 hover:text-bihar-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </section>
        
        {/* Content Sections */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            {/* About Section */}
            <div className={`${activeTab === "about" ? "block animate-fade-in" : "hidden"}`}>
              <div className="max-w-4xl">
                <div className="prose prose-lg">
                  <h2 className="text-3xl font-bold mb-6">About {destination.name}</h2>
                  <p className="text-bihar-600 whitespace-pre-line">{destination.fullDescription}</p>
                </div>
                
                <div className="mt-12">
                  <div className="flex items-center mb-4">
                    <CalendarDays size={20} className="text-primary mr-3" />
                    <h3 className="text-xl font-semibold">Best Time to Visit</h3>
                  </div>
                  <p className="text-bihar-600 pl-9">{destination.bestTimeToVisit}</p>
                </div>
                
                <div className="mt-8">
                  <h3 className="text-xl font-semibold mb-4">Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {destination.tags.map((tag, index) => (
                      <span 
                        key={index} 
                        className="px-4 py-2 bg-bihar-50 text-bihar-700 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            {/* Directions Section */}
            <div className={`${activeTab === "directions" ? "block animate-fade-in" : "hidden"}`}>
              <div className="max-w-4xl">
                <h2 className="text-3xl font-bold mb-6">How to Reach {destination.name}</h2>
                <p className="text-bihar-600 mb-10">
                  {destination.name} is well-connected through various modes of transportation. Here's how you can reach this beautiful destination.
                </p>
                
                <div className="space-y-10">
                  {/* By Road */}
                  <div className="bg-white p-8 border border-bihar-100 rounded-xl">
                    <div className="flex items-start">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mr-6">
                        <Car className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3">By Road</h3>
                        <p className="text-bihar-600">
                          {destination.directions.byRoad}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* By Rail */}
                  <div className="bg-white p-8 border border-bihar-100 rounded-xl">
                    <div className="flex items-start">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mr-6">
                        <Train className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3">By Rail</h3>
                        <p className="text-bihar-600">
                          {destination.directions.byRail}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* By Air */}
                  <div className="bg-white p-8 border border-bihar-100 rounded-xl">
                    <div className="flex items-start">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mr-6">
                        <Plane className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3">By Air</h3>
                        <p className="text-bihar-600">
                          {destination.directions.byAir}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-12 p-8 bg-primary/5 rounded-xl">
                  <div className="flex items-center mb-4">
                    <MapIcon className="text-primary mr-3" size={20} />
                    <h3 className="text-xl font-semibold">Local Transportation</h3>
                  </div>
                  <p className="text-bihar-600">
                    Once in {destination.name}, you can use auto-rickshaws, cycle rickshaws, and taxis for local travel. Many tourist spots are also within walking distance of each other. For group travel, consider hiring a local taxi for the day.
                  </p>
                </div>
              </div>
            </div>
            
            {/* Facilities Section */}
            <div className={`${activeTab === "facilities" ? "block animate-fade-in" : "hidden"}`}>
              <div className="max-w-4xl">
                <h2 className="text-3xl font-bold mb-6">Facilities in {destination.name}</h2>
                <p className="text-bihar-600 mb-10">
                  {destination.name} offers various facilities to ensure a comfortable and enjoyable visit for tourists from around the world.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {destination.facilities.map((facility, index) => (
                    <div key={index} className="bg-white p-8 border border-bihar-100 rounded-xl">
                      <h3 className="text-xl font-semibold mb-4">{facility.name}</h3>
                      <p className="text-bihar-600 mb-0">
                        {facility.description}
                      </p>
                    </div>
                  ))}
                  
                  {/* Additional Common Facilities */}
                  <div className="bg-white p-8 border border-bihar-100 rounded-xl">
                    <h3 className="text-xl font-semibold mb-4">Shopping</h3>
                    <p className="text-bihar-600 mb-0">
                      Local markets offer traditional handicrafts, religious artifacts, and souvenirs specific to the region.
                    </p>
                  </div>
                  
                  <div className="bg-white p-8 border border-bihar-100 rounded-xl">
                    <h3 className="text-xl font-semibold mb-4">Information Centers</h3>
                    <p className="text-bihar-600 mb-0">
                      Tourist information centers are available to provide maps, brochures, and guidance about local attractions and services.
                    </p>
                  </div>
                </div>
                
                <div className="mt-12 p-8 bg-primary/5 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">Best Practices for Visitors</h3>
                  <ul className="space-y-3 text-bihar-600 list-disc pl-5">
                    <li>Respect religious customs and traditions, especially at temples and monasteries.</li>
                    <li>Dress modestly when visiting religious sites.</li>
                    <li>Always carry drinking water, especially during summer months.</li>
                    <li>Consider hiring a local guide for rich historical context and better navigation.</li>
                    <li>Most places accept cash only, so carry sufficient Indian currency.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Related Destinations */}
        <section className="py-12 bg-bihar-50">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold mb-10">More Destinations to Explore</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {destinations
                .filter(d => d.id !== destination.id)
                .slice(0, 3)
                .map((relatedDest, index) => (
                  <div 
                    key={relatedDest.id}
                    className="destination-card bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={relatedDest.imageSrc} 
                        alt={relatedDest.imageAlt}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center text-bihar-300 mb-3">
                        <MapPin size={16} className="mr-1" />
                        <span className="text-sm">{relatedDest.location.split(',')[0]}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{relatedDest.name}</h3>
                      <p className="text-bihar-600 mb-4 line-clamp-2 text-sm">{relatedDest.shortDescription}</p>
                      
                      <Link 
                        to={`/destination/${relatedDest.id}`}
                        className="inline-flex items-center text-primary font-medium"
                      >
                        View Details
                        <ArrowLeft size={16} className="ml-1 transform rotate-180" />
                      </Link>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DestinationDetail;
