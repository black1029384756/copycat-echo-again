
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share } from "lucide-react";

const PsychologyCounselling = () => {
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
        <div className="container mx-auto px-4 max-w-6xl">
          <h1 className="text-4xl font-bold text-center mb-8">Psychology Counselling</h1>
          
          {/* Hero Image Section */}
          <div className="relative rounded-lg overflow-hidden mb-8">
            <img 
              src="/lovable-uploads/05bc780b-f734-4c86-9b5a-429ec42a4617.png" 
              alt="Psychology Counselling"
              className="w-full h-96 object-cover"
            />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-lg font-medium">
                Stem For Society Initiated to Support students with psychological problems is 
                essential for their well-being and academic success.
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed">
              Stem For Society, establishing open communication channels allows students to express their 
              feelings and seek help without stigma. Providing access to counselling services ensures that 
              students receive professional support tailored to their needs.
            </p>
          </div>

          {/* Service Details */}
          <div className="bg-gray-50 rounded-lg p-8 mb-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <span className="w-4 h-4 bg-yellow-400 rounded-full"></span>
                  <span className="text-sm text-gray-600">Your identity will be 100% confidential</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">Psychology Counselling for Students</h3>
                <p className="text-gray-600">
                  Talk to trained experts about your mental health, academics, or stress - safely and without judgment.
                </p>
              </div>
              
              <div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-gray-800">₹ 2,000.00 <span className="text-lg font-normal text-gray-500">/ For 30 mins</span></div>
                  <div className="flex items-center justify-end gap-2 mt-2">
                    <span className="w-4 h-4 bg-green-400 rounded-full"></span>
                    <span className="text-sm text-gray-600">
                      If you have a Valid student (UG/PG/Ph.D) ID card 75% fee will be waived off by Stem for Society.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-lg text-lg">
              BOOK YOUR SESSION
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default PsychologyCounselling;
