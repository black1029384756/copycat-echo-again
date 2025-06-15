
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const PartnerRole = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 bg-cover animate-subtle-zoom"
        style={{
          backgroundImage: `url("/lovable-uploads/89cbe888-d974-42ee-a6ee-9ce3e9b60fb4.png")`,
          backgroundPosition: 'center bottom',
        }}
      />
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen flex">
        {/* Left Section - Logo */}
        <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center">
          <div className="text-center text-white">
            <img 
              src="/lovable-uploads/a42a1abc-16cd-4410-8cf7-324a6c97ac20.png" 
              alt="STEM for Society Logo" 
              className="h-40 w-40 md:h-56 md:w-56 lg:h-72 lg:w-72 opacity-50 mx-auto mb-8"
            />
            <h1 className="text-4xl font-bold mb-4">STEM FOR SOCIETY</h1>
            <p className="text-xl">Let's Innovate, Incubate and Impact the world together!</p>
          </div>
        </div>

        {/* Right Section - Role Selection */}
        <div className="w-full lg:w-1/2 relative">
          {/* White transparent overlay with curved left corner */}
          <div className="absolute inset-0 bg-white/90 lg:rounded-l-3xl"></div>
          
          {/* Content Container with scroll */}
          <div className="relative z-10 h-full max-h-screen overflow-y-auto flex items-center justify-center px-4 md:px-8 py-8">
            <div className="w-full max-w-md">
              {/* Header */}
              <div className="text-center mb-8">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                  Select your Role
                </h1>
                <p className="text-gray-600 text-lg">
                  Log in as a student, ambassador, or partner institution.
                </p>
              </div>

              {/* Role Selection Cards */}
              <div className="space-y-4">
                {/* Partner - Individual */}
                <Link to="/signup" className="block">
                  <div className="bg-white border border-gray-200 rounded-lg p-6 hover:bg-gray-50 hover:border-blue-300 transition-all duration-200 hover:shadow-md cursor-pointer group">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          Partner - Individual
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Become a Campus Ambassador
                        </p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                  </div>
                </Link>

                {/* Partner - Institution */}
                <Link to="/signup" className="block">
                  <div className="bg-white border border-gray-200 rounded-lg p-6 hover:bg-gray-50 hover:border-blue-300 transition-all duration-200 hover:shadow-md cursor-pointer group">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                          Partner - Institution
                        </h3>
                        <p className="text-gray-600 text-sm">
                          Partner Institution Portal
                        </p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
                    </div>
                  </div>
                </Link>
              </div>

              {/* Back to Login */}
              <div className="text-center mt-8">
                <p className="text-sm text-gray-600">
                  Already have an account?{" "}
                  <Link to="/login" className="text-blue-600 hover:text-blue-700 hover:underline font-semibold">
                    Login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden absolute inset-0 flex flex-col">
          {/* Mobile Logo */}
          <div className="flex-1 flex items-center justify-center pt-16">
            <div className="text-center text-white">
              <img 
                src="/lovable-uploads/a42a1abc-16cd-4410-8cf7-324a6c97ac20.png" 
                alt="STEM for Society Logo" 
                className="h-24 w-24 mx-auto mb-4 opacity-50"
              />
              <h1 className="text-2xl font-bold mb-2">STEM FOR SOCIETY</h1>
              <p className="text-sm">Let's Innovate, Incubate and Impact!</p>
            </div>
          </div>
          
          {/* Mobile Content with white overlay and curved corners */}
          <div className="flex-1 relative">
            <div className="absolute inset-0 bg-white/90 rounded-t-3xl"></div>
            <div className="relative z-10 max-h-[60vh] overflow-y-auto flex items-start justify-center px-4 pt-8 pb-4">
              <div className="w-full max-w-sm">
                <div className="text-center mb-6">
                  <h1 className="text-2xl font-bold text-gray-800 mb-1">
                    Select your Role
                  </h1>
                  <p className="text-gray-600 text-sm">
                    Choose your partner type
                  </p>
                </div>

                <div className="space-y-3">
                  <Link to="/signup" className="block">
                    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-800 text-sm">Partner - Individual</h3>
                          <p className="text-gray-600 text-xs">Campus Ambassador</p>
                        </div>
                        <ArrowRight className="h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                  </Link>

                  <Link to="/signup" className="block">
                    <div className="bg-white border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-gray-800 text-sm">Partner - Institution</h3>
                          <p className="text-gray-600 text-xs">Institution Portal</p>
                        </div>
                        <ArrowRight className="h-4 w-4 text-gray-400" />
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="text-center mt-6">
                  <Link to="/login" className="text-blue-600 hover:text-blue-700 hover:underline font-semibold text-sm">
                    Back to Login
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PartnerRole;
