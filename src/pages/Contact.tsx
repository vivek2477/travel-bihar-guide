
import { FormEvent, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""
      });
      
      toast({
        title: "Message Sent",
        description: "We've received your message and will get back to you soon.",
        duration: 5000,
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-1 pt-24">
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="text-center mb-16 animate-fade-up">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Get in Touch
              </span>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="max-w-2xl mx-auto text-bihar-600">
                Have questions or need assistance planning your trip to Bihar? We're here to help you make the most of your journey.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
              {/* Contact Information */}
              <div className="lg:col-span-1 animate-fade-up" style={{ animationDelay: "0.2s" }}>
                <div className="bg-white p-8 rounded-xl shadow-sm h-full">
                  <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
                  
                  <div className="space-y-8">
                    <div className="flex">
                      <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <MapPin className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Our Office</h3>
                        <p className="text-bihar-600">
                          Bihar Tourism Development Corporation<br />
                          Hotel Kautilya Vihar, Beer Chand Patel Path<br />
                          Patna, Bihar 800001
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <Phone className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Phone</h3>
                        <p className="text-bihar-600">+91 612 222 2622</p>
                        <p className="text-bihar-600">+91 612 222 2634</p>
                      </div>
                    </div>
                    
                    <div className="flex">
                      <div className="flex-shrink-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mr-4">
                        <Mail className="text-primary" size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Email</h3>
                        <p className="text-bihar-600">info@bihartourism.gov.in</p>
                        <p className="text-bihar-600">support@bihartourism.gov.in</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-10">
                    <h3 className="font-semibold text-lg mb-4">Office Hours</h3>
                    <p className="text-bihar-600">Monday - Friday: 9:00 AM - 5:00 PM</p>
                    <p className="text-bihar-600">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-bihar-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-2 animate-fade-up" style={{ animationDelay: "0.4s" }}>
                <div className="bg-white p-8 rounded-xl shadow-sm">
                  <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-bihar-700 mb-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-md border border-bihar-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-bihar-700 mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-md border border-bihar-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-bihar-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-md border border-bihar-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                          placeholder="+91 9876543210"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-bihar-700 mb-2">
                          Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-md border border-bihar-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        >
                          <option value="">Select a subject</option>
                          <option value="General Inquiry">General Inquiry</option>
                          <option value="Tour Package">Tour Package</option>
                          <option value="Hotel Booking">Hotel Booking</option>
                          <option value="Transportation">Transportation</option>
                          <option value="Feedback">Feedback</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-bihar-700 mb-2">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-md border border-bihar-200 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                        placeholder="How can we help you?"
                      ></textarea>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center px-8 py-3 rounded-md bg-primary text-white font-medium transition-all hover:bg-primary/90 active:scale-95 disabled:opacity-70 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send size={18} className="mr-2" />
                            Send Message
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-20 bg-bihar-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Frequently Asked Questions
              </span>
              <h2 className="text-4xl font-bold mb-6">Have Questions?</h2>
              <p className="max-w-2xl mx-auto text-bihar-600">
                Find answers to some of the most common questions about traveling in Bihar.
              </p>
            </div>
            
            <div className="max-w-4xl mx-auto">
              {[
                {
                  question: "What is the best time to visit Bihar?",
                  answer: "The best time to visit Bihar is during the winter months from October to March when the weather is pleasant and ideal for sightseeing. Summers (April to June) can be very hot, and the monsoon season (July to September) brings heavy rainfall."
                },
                {
                  question: "How many days are sufficient to explore Bihar?",
                  answer: "A comprehensive tour of Bihar's major attractions typically requires 7-10 days. However, if you're focusing on specific areas like the Buddhist circuit or historical sites, 4-5 days may be sufficient."
                },
                {
                  question: "Is Bihar safe for tourists?",
                  answer: "Yes, tourist areas in Bihar are generally safe. As with any travel destination, it's advisable to take standard precautions, stay aware of your surroundings, and keep valuables secure."
                },
                {
                  question: "What languages are spoken in Bihar?",
                  answer: "The official language is Hindi, but Bhojpuri, Maithili, and Magahi are also widely spoken. English is understood in tourist areas, major hotels, and by guides."
                },
                {
                  question: "Do I need a permit to visit Bihar?",
                  answer: "No, foreign tourists do not need a special permit to visit Bihar. A valid Indian visa is sufficient for travel in the state."
                }
              ].map((faq, index) => (
                <div 
                  key={index} 
                  className="bg-white mb-4 rounded-lg shadow-sm overflow-hidden"
                >
                  <details className="group">
                    <summary className="flex justify-between items-center font-medium cursor-pointer p-6">
                      <span className="text-lg">{faq.question}</span>
                      <span className="transition group-open:rotate-180">
                        <svg fill="none" height="24" width="24" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <polyline points="6 9 12 15 18 9"></polyline>
                        </svg>
                      </span>
                    </summary>
                    <div className="px-6 pb-6 text-bihar-600">
                      <p>{faq.answer}</p>
                    </div>
                  </details>
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

export default Contact;
