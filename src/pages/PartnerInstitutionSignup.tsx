import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import SignupLayout from "@/components/SignupLayout";
import StepIndicator from "@/components/StepIndicator";

const PartnerInstitutionSignup = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    institutionName: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    pincode: "",
    gstNumber: "",
    instructorName: "",
    country: "India",
    instructorMobile: "",
    otp: "",
    email: "",
    teachingTopic: "",
    sector: "",
    acceptTerms: false
  });

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Partner Institution signup:", formData);
  };

  const sendOTP = () => {
    console.log("Sending OTP to:", formData.instructorMobile);
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="text-right text-xs lg:text-sm text-gray-600 mb-4">
              Institution Information
            </div>
            
            <div>
              <Input
                placeholder="Enter the institution name"
                value={formData.institutionName}
                onChange={(e) => handleInputChange('institutionName', e.target.value)}
                className="bg-white/80 text-sm"
              />
            </div>
            
            <div>
              <Input
                placeholder="Address line 1"
                value={formData.addressLine1}
                onChange={(e) => handleInputChange('addressLine1', e.target.value)}
                className="bg-white/80 text-sm"
              />
            </div>
            
            <div>
              <Input
                placeholder="Address line 2"
                value={formData.addressLine2}
                onChange={(e) => handleInputChange('addressLine2', e.target.value)}
                className="bg-white/80 text-sm"
              />
            </div>
            
            <div>
              <Input
                placeholder="City"
                value={formData.city}
                onChange={(e) => handleInputChange('city', e.target.value)}
                className="bg-white/80 text-sm"
              />
            </div>
            
            <div>
              <Input
                placeholder="Pincode"
                value={formData.pincode}
                onChange={(e) => handleInputChange('pincode', e.target.value)}
                className="bg-white/80 text-sm"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div className="text-right text-xs lg:text-sm text-gray-600 mb-4">
              Instructor Details
            </div>
            
            <div>
              <Input
                placeholder="GST number"
                value={formData.gstNumber}
                onChange={(e) => handleInputChange('gstNumber', e.target.value)}
                className="bg-white/80 text-sm"
              />
            </div>
            
            <div>
              <Input
                placeholder="Instructor name"
                value={formData.instructorName}
                onChange={(e) => handleInputChange('instructorName', e.target.value)}
                className="bg-white/80 text-sm"
              />
            </div>
            
            <div className="flex gap-2">
              <div className="w-24">
                <Input
                  placeholder="Country"
                  value={formData.country}
                  onChange={(e) => handleInputChange('country', e.target.value)}
                  className="bg-white/80 text-sm"
                />
              </div>
              <div className="flex-1">
                <Input
                  placeholder="Instructor Mobile Number"
                  value={formData.instructorMobile}
                  onChange={(e) => handleInputChange('instructorMobile', e.target.value)}
                  className="bg-white/80 text-sm"
                />
              </div>
            </div>
            
            <div className="bg-yellow-100 p-3 rounded-md flex items-center justify-between">
              <span className="text-sm">⚠️ OTP sent to entered number</span>
              <Button 
                type="button" 
                size="sm" 
                onClick={sendOTP}
                className="bg-blue-600 hover:bg-blue-700"
              >
                Send OTP
              </Button>
            </div>
            
            <div>
              <Input
                placeholder="Send OTP"
                value={formData.otp}
                onChange={(e) => handleInputChange('otp', e.target.value)}
                className="bg-white/80 text-sm"
              />
            </div>
            
            <div>
              <Input
                placeholder="Email"
                type="email"
                value={formData.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
                className="bg-white/80 text-sm"
              />
            </div>
            
            <div className="text-center text-sm text-gray-600">
              — or sign up with —
            </div>
            
            <div className="flex justify-center gap-4">
              <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                G
              </button>
              <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                @
              </button>
              <button className="w-10 h-10 rounded-full bg-white flex items-center justify-center shadow-md">
                f
              </button>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div className="text-right text-xs lg:text-sm text-gray-600 mb-4">
              Title & sector
            </div>
            
            <div>
              <Input
                placeholder="Topic you will be teaching?"
                value={formData.teachingTopic}
                onChange={(e) => handleInputChange('teachingTopic', e.target.value)}
                className="bg-white/80 text-sm"
              />
            </div>
            
            <div>
              <Input
                placeholder="Sector"
                value={formData.sector}
                onChange={(e) => handleInputChange('sector', e.target.value)}
                className="bg-white/80 text-sm"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              <Checkbox
                id="terms"
                checked={formData.acceptTerms}
                onCheckedChange={(checked) => handleInputChange('acceptTerms', checked)}
              />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I accept{" "}
                <Link to="/terms" className="text-blue-600 hover:underline">
                  the terms and conditions
                </Link>
                .
              </label>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <SignupLayout 
      title="Partner with us to make an impact" 
      subtitle="Let's Partner and Impact!"
    >
      <div className="w-full">
        <div className="text-center mb-4 lg:mb-6">
          <h1 className="text-xl lg:text-2xl font-bold text-gray-800 mb-2">Partner with us</h1>
          <p className="text-gray-600 text-xs lg:text-sm">
            {currentStep === 1 && "Enter your details to proceed further"}
            {currentStep === 2 && "Enter your credentials to proceed further"}
            {currentStep === 3 && "Enter your credentials to proceed further"}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4 lg:space-y-6">
          <StepIndicator currentStep={currentStep} totalSteps={3} />
          
          {renderStepContent()}

          <div className="space-y-4">
            {currentStep < 3 ? (
              <Button
                type="button"
                onClick={handleNext}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 lg:py-3 text-sm"
              >
                CONTINUE
              </Button>
            ) : (
              <Button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 lg:py-3 text-sm"
                disabled={!formData.acceptTerms}
              >
                SIGN UP
              </Button>
            )}
          </div>

          <div className="text-center">
            <p className="text-xs lg:text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-600 hover:text-blue-700 hover:underline font-semibold">
                login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </SignupLayout>
  );
};

export default PartnerInstitutionSignup;
