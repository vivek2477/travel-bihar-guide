
import { useEffect, useState } from "react";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Destinations from "@/components/Destinations";
import Footer from "@/components/Footer";
import { MapPin, Calendar, Star, ThumbsUp, HelpCircle, Lightbulb } from "lucide-react";

const Index = () => {
  const [showLoader, setShowLoader] = useState(true);
  
  useEffect(() => {
    // Simulate loading assets
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Page Loader */}
      {showLoader && (
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
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
      )}
      
      <div className="relative">
        <Navbar />
        <Hero />
        <Destinations />
        
        {/* About Bihar Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="order-2 lg:order-1">
                <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  About Bihar
                </span>
                <h2 className="text-4xl font-bold mb-6">The Land of Spiritual Enlightenment</h2>
                <p className="text-bihar-600 mb-6">
                  Bihar, located in eastern India, is one of the oldest inhabited places in the world with a history spanning 3,000 years. The state takes its name from the Sanskrit and Pali word "Vihara," meaning monastery, reflecting its rich Buddhist heritage.
                </p>
                
                <div className="space-y-4 mb-8">
                  <div className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                      <Star size={14} className="text-primary" />
                    </div>
                    <p className="text-bihar-600">
                      <span className="font-medium text-bihar-700">Historical Significance:</span> Home to the Maurya Empire, one of the world's largest empires in its time, and Ashoka the Great, who spread Buddhism across Asia.
                    </p>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                      <Star size={14} className="text-primary" />
                    </div>
                    <p className="text-bihar-600">
                      <span className="font-medium text-bihar-700">Spiritual Heritage:</span> Birthplace of Buddhism, Jainism, and the sacred pilgrimage site for Hindus, attracting visitors from across the globe.
                    </p>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center mr-3 mt-1">
                      <Star size={14} className="text-primary" />
                    </div>
                    <p className="text-bihar-600">
                      <span className="font-medium text-bihar-700">Educational Legacy:</span> Home to Nalanda and Vikramshila, among the world's oldest universities, attracting scholars from far and wide.
                    </p>
                  </div>
                </div>
                
                <button className="px-8 py-3 rounded-md bg-primary text-white font-medium transition-all hover:bg-primary/90 active:scale-95">
                  Learn More About Bihar
                </button>
              </div>
              
              <div className="order-1 lg:order-2 relative animate-fade-in">
                <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl h-80 lg:h-full">
                  <img 
                    src="https://images.unsplash.com/photo-1623770789392-9e31e49fe15b?q=80&w=2940&auto=format&fit=crop" 
                    alt="Ancient Nalanda University Ruins" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-48 h-48 rounded-2xl bg-primary/10 -z-10"></div>
                <div className="absolute -top-6 -left-6 w-32 h-32 rounded-2xl bg-bihar-100 -z-10"></div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Travel Tips Section */}
        <section id="travel-tips" className="py-20 bg-bihar-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Useful Information
              </span>
              <h2 className="text-4xl font-bold mb-6">Travel Tips for Bihar</h2>
              <p className="max-w-2xl mx-auto text-bihar-600">
                Make the most of your journey through Bihar with these essential tips and practical information to help you plan your visit.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Calendar className="text-primary" size={24} />,
                  title: "Best Time to Visit",
                  description: "October to March offers the most pleasant weather with temperatures ranging from 5°C to 30°C, making it ideal for exploring outdoor attractions."
                },
                {
                  icon: <MapPin className="text-primary" size={24} />,
                  title: "Getting Around",
                  description: "Auto-rickshaws and taxis are common in cities. For intercity travel, buses, trains, and private taxis are convenient options."
                },
                {
                  icon: <ThumbsUp className="text-primary" size={24} />,
                  title: "Local Etiquette",
                  description: "Dress modestly when visiting religious sites. Remove shoes before entering temples and religious monuments. Ask permission before taking photos of people."
                },
                {
                  icon: <Lightbulb className="text-primary" size={24} />,
                  title: "Cuisine Highlights",
                  description: "Try local specialties like Litti Chokha, Sattu Paratha, Khaja (sweet), and Tilkut. Vegetarian food is widely available across the state."
                },
                {
                  icon: <HelpCircle className="text-primary" size={24} />,
                  title: "Safety Tips",
                  description: "Keep important documents secure. Avoid traveling alone at night in unfamiliar areas. Stay hydrated and carry basic medications."
                },
                {
                  icon: <Star className="text-primary" size={24} />,
                  title: "Festivals & Events",
                  description: "Chhath Puja (October/November) and Buddha Purnima (May) are major celebrations. Check local festival dates when planning your trip."
                }
              ].map((tip, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                    {tip.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{tip.title}</h3>
                  <p className="text-bihar-600">{tip.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <div className="bg-bihar-800 rounded-2xl p-12 relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <img 
                  src="https://images.unsplash.com/photo-1590077428593-a55bb07c4665?q=80&w=2942&auto=format&fit=crop" 
                  alt="Background pattern" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between">
                <div className="mb-8 lg:mb-0 text-center lg:text-left">
                  <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Explore Bihar?</h2>
                  <p className="text-white/80 max-w-xl">
                    Start your journey through the spiritual and historical wonders of Bihar with our comprehensive travel guides and personalized assistance.
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <button className="px-8 py-3 rounded-md bg-primary text-white font-medium transition-all hover:bg-primary/90 active:scale-95">
                    Plan Your Trip
                  </button>
                  <button className="px-8 py-3 rounded-md bg-white/10 backdrop-blur-sm text-white font-medium transition-all hover:bg-white/20 active:scale-95">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
