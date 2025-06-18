
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share } from "lucide-react";

const JoinCommunity = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Navigation buttons */}
      <div className="flex justify-between items-center p-4 max-w-6xl mx-auto">
        <Button variant="outline" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back
        </Button>
        <Button variant="outline" className="flex items-center gap-2">
          <Share className="h-4 w-4" />
          Share
        </Button>
      </div>

      <main className="py-8">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-6">Join our community!</h1>
          </div>

          {/* WhatsApp Group Section */}
          <div className="bg-green-50 rounded-2xl p-8 mb-8 flex flex-col md:flex-row items-center gap-6">
            <div className="flex-shrink-0">
              <div className="w-32 h-32 bg-white rounded-lg flex items-center justify-center p-4">
                <img 
                  src="/lovable-uploads/23bfbd17-dd0b-414b-9969-333e7b0e4606.png" 
                  alt="QR Code" 
                  className="w-full h-full object-contain"
                />
              </div>
              <p className="text-center text-sm text-gray-600 mt-2">Stem for Society</p>
            </div>
            
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-2xl font-bold text-green-600 mb-2">
                Stem for Society<br />WhatsApp group
              </h2>
              <p className="text-gray-600 mb-4">
                to get update related to upcoming<br />
                Events, trainings, workshop
              </p>
              <a 
                href="https://chat.whatsapp.com" 
                className="text-blue-500 hover:text-blue-700 underline inline-flex items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                chat.whatsapp.com
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Community Image Section */}
          <div className="relative rounded-2xl overflow-hidden mb-8">
            <img 
              src="/lovable-uploads/67328f51-8d07-4749-915c-0ea3dfac6080.png" 
              alt="Community" 
              className="w-full h-64 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="text-white text-lg font-medium">
                Join our vibrant community and connect with like-minded individuals 
                passionate about innovation and collaboration!
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="text-center mb-8">
            <p className="text-gray-700 leading-relaxed">
              Engage in enriching discussions, share ideas, and access valuable resources that empower 
              personal and professional growth. Together, we can create impactful solutions! Become part of our journey today!
            </p>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default JoinCommunity;
