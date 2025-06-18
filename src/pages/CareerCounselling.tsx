
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share, Check } from "lucide-react";

const CareerCounselling = () => {
  const basicFeatures = [
    "Career advice",
    "CV/Resume critique",
    "Post Job application",
    "One-to-one application guidance"
  ];

  const standardFeatures = [
    "CV/Resume prep",
    "Network mapping advice",
    "Enhancing IDP & LCR",
    "Referral research proposal"
  ];

  const premiumFeatures = [
    "LCO/SOP writing & preparation",
    "Resume review",
    "Extensive complete profile review",
    "Networking of links & University",
    "Enhancing IDP & LCR",
    "Referral Research proposal",
    "Guidance for applications",
    "Interview feedback Program",
    "Guidance for Funding"
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
          <h1 className="text-4xl font-bold text-center mb-8">Career Counselling</h1>
          
          {/* Hero Image Section */}
          <div className="relative rounded-lg overflow-hidden mb-8">
            <img 
              src="/lovable-uploads/5fc0d173-4211-4921-bda4-16e8ab3e507c.png" 
              alt="Career Counselling"
              className="w-full h-96 object-cover"
            />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-lg font-medium">
                Stem For Society provide career counselling services by subject experts in 
                making career choices by assessing their interests, skills, and goals.
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed">
              These services offer personalized advice, resources, and support to navigate education paths, job 
              opportunities, and industry trends. By addressing career-related concerns, they empower 
              individuals to build fulfilling careers and achieve long-term professional success. Stem for Society 
              has 200+ subject experts as mentor across globally.
            </p>
          </div>

          {/* Pricing Plans */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Basic Plan */}
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Basic</h3>
              <p className="text-sm text-gray-600 mb-4">Just a specific service-1</p>
              <div className="text-2xl font-bold mb-4">₹ 2,000.00 <span className="text-sm font-normal">/ services</span></div>
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 mb-4">
                GET STARTED
              </Button>
              <ul className="space-y-2">
                {basicFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Standard Plan */}
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Standard</h3>
              <p className="text-sm text-gray-600 mb-4">Essential to guide training for a Future</p>
              <div className="text-2xl font-bold mb-4">₹ 30,000.00 <span className="text-sm font-normal">/ Per Year</span></div>
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 mb-4">
                GET STARTED
              </Button>
              <ul className="space-y-2">
                {standardFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Premium Plan */}
            <div className="border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-2">Premium</h3>
              <p className="text-sm text-gray-600 mb-4">Comprehensive Training for a Brighter Tomorrow</p>
              <div className="text-2xl font-bold mb-4">₹ 50,000.00 <span className="text-sm font-normal">/ Per Year</span></div>
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 mb-4">
                GET STARTED
              </Button>
              <ul className="space-y-2">
                {premiumFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CareerCounselling;
