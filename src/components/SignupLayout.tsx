
import React from "react";

interface SignupLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  formBackgroundColor?: boolean;
}

const SignupLayout = ({ children, title, subtitle, formBackgroundColor = false }: SignupLayoutProps) => {
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

      {/* Desktop Layout */}
      <div className="hidden lg:flex relative z-10 min-h-screen">
        {/* Left Section - Logo */}
        <div className="w-1/2 flex items-center justify-center">
          <div className="text-center text-white">
            <img 
              src="/lovable-uploads/a42a1abc-16cd-4410-8cf7-324a6c97ac20.png" 
              alt="STEM for Society Logo" 
              className="h-40 w-40 md:h-56 md:w-56 lg:h-72 lg:w-72 opacity-50 mx-auto mb-8 animate-pulse-glow-delayed"
            />
            <h1 className="text-4xl font-bold mb-4">STEM FOR SOCIETY</h1>
            <p className="text-xl">
              {title ? `Join us to ${title}` : "Let's Innovate, Incubate and Impact the world together!"}
            </p>
          </div>
        </div>

        {/* Right Section - Form */}
        <div className="w-1/2 relative">
          <div className="absolute inset-0 bg-white/90 rounded-l-3xl"></div>
          <div className="relative z-10 h-full overflow-y-auto flex items-center justify-center px-8 py-8">
            {formBackgroundColor ? (
              <div className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
                {children}
              </div>
            ) : (
              <div className="w-full max-w-md">
                {children}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden relative z-10 min-h-screen flex flex-col">
        {/* Mobile Logo Section */}
        <div className="flex-shrink-0 flex items-center justify-center pt-8 pb-4">
          <div className="text-center text-white">
            <img 
              src="/lovable-uploads/a42a1abc-16cd-4410-8cf7-324a6c97ac20.png" 
              alt="STEM for Society Logo" 
              className="h-20 w-20 mx-auto mb-2 opacity-50"
            />
            <h1 className="text-xl font-bold mb-1">STEM FOR SOCIETY</h1>
            <p className="text-xs">
              {subtitle || "Join us to Innovate, Incubate and Impact!"}
            </p>
          </div>
        </div>
        
        {/* Mobile Form Section */}
        <div className="flex-1 relative">
          <div className="absolute inset-0 bg-white/90 rounded-t-3xl"></div>
          <div className="relative z-10 h-full overflow-y-auto px-4 pt-6 pb-8">
            {formBackgroundColor ? (
              <div className="w-full max-w-sm mx-auto bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg">
                {children}
              </div>
            ) : (
              <div className="w-full max-w-sm mx-auto">
                {children}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupLayout;
