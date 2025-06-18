
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Share, Check } from "lucide-react";

const InstitutionalPlanPricing = () => {
  const basicFeatures = [
    "Career Counselling",
    "Psychology Counselling", 
    "Time Management Training",
    "Personality Development"
  ];

  const premiumFeatures = [
    "Career Counselling",
    "Psychology Counselling",
    "Sst Education",
    "Entrepreneurship Training",
    "Personality Development",
    "Industrial Visit"
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
          <h1 className="text-4xl font-bold text-center mb-8">Institution Plans & Pricing</h1>
          
          {/* Hero Image Section */}
          <div className="relative rounded-lg overflow-hidden mb-8">
            <img 
              src="/lovable-uploads/9271cd40-0895-4359-9c4c-8d8192bf918b.png" 
              alt="Institution Plans & Pricing"
              className="w-full h-96 object-cover"
            />
            <div className="absolute bottom-6 left-6 text-white">
              <p className="text-lg font-medium">
                Plans for Schools, Institutions and Universities STEM for Society initiatives in 
                universities and institutions aim to enhance the skill development.
              </p>
            </div>
          </div>

          {/* Description */}
          <div className="mb-8">
            <p className="text-gray-700 leading-relaxed">
              By fostering collaboration between academia and industry, these programs encourage innovation 
              and practical learning. They focus on diverse outreach, mentorship opportunities, and hands-on 
              projects, preparing students for future careers in STEM by addressing societal challenges.
            </p>
          </div>

          {/* Pricing Plans */}
          <div className="grid md:grid-cols-2 gap-8 mb-8 max-w-4xl mx-auto">
            {/* Basic Plan */}
            <div className="border rounded-lg p-8 text-center">
              <h3 className="text-2xl font-semibold mb-2">Basics</h3>
              <p className="text-gray-600 mb-4">Essential Skills to Shape a Promising Future</p>
              <div className="text-3xl font-bold mb-6">₹ 20,000.00 <span className="text-lg font-normal text-gray-500">/ Per Year</span></div>
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 mb-6 py-3">
                GET STARTED
              </Button>
              <ul className="space-y-3 text-left">
                {basicFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Premium Plan */}
            <div className="border rounded-lg p-8 text-center">
              <h3 className="text-2xl font-semibold mb-2">Premium</h3>
              <p className="text-gray-600 mb-4">Comprehensive Training for a Brighter Tomorrow</p>
              <div className="text-3xl font-bold mb-6">₹ 40,000.00 <span className="text-lg font-normal text-gray-500">/ Per Year</span></div>
              <Button className="w-full bg-blue-600 text-white hover:bg-blue-700 mb-6 py-3">
                GET STARTED
              </Button>
              <ul className="space-y-3 text-left">
                {premiumFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <Check className="h-5 w-5 text-green-500" />
                    <span>{feature}</span>
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

export default InstitutionalPlanPricing;
