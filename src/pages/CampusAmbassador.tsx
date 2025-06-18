
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share, Check } from "lucide-react";

const CampusAmbassador = () => {
  const whyJoinReasons = [
    "Access to exclusive STEM for Society opportunities and a chance to win a Campus Ambassador Points",
    "Certificates of recognition for your contributions",
    "Opportunities to network with fellow participants and free access to Stem for Society Conference",
    "30% discount in all the program offered by Stem for Society"
  ];

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
          <h1 className="text-4xl font-bold text-center mb-8">Campus Ambassador Program!</h1>
          
          {/* Hero Image Section */}
          <div className="relative rounded-lg overflow-hidden mb-8">
            <img 
              src="/lovable-uploads/e8d0b0d6-5a56-4d20-b87c-8fcab909cdff.png" 
              alt="Campus Ambassador Program"
              className="w-full h-96 object-cover"
            />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-lg font-medium">
                Embrace the role of a Stem For Society Initiated to Support students with ambassador at 
                your college or university and help us spread the excitement far and wide! As a Campus 
                Ambassador, you will be instrumental in promoting the festival, engaging with fellow 
                students, and infusing the spirit of Stem for Society into your campus community.
              </p>
            </div>
          </div>

          {/* Why Join Section */}
          <div className="mb-8">
            <div className="bg-blue-100 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-blue-900">Why Join?</h2>
              <ul className="space-y-3">
                {whyJoinReasons.map((reason, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-green-500 mt-0.5" />
                    <span className="text-gray-700">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Ready to Apply Section */}
          <div className="mb-8">
            <div className="bg-blue-100 rounded-lg p-6">
              <h2 className="text-xl font-semibold mb-4 text-blue-900">Ready to apply?</h2>
              <p className="text-gray-700">
                Sign up today to embark on this exciting journey. Let's make Stem for Society unforgettable together!
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button className="bg-blue-600 text-white hover:bg-blue-700 px-8 py-3 rounded-lg text-lg">
              REGISTER NOW
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CampusAmbassador;
