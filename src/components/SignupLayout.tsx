
import React from "react";

interface SignupLayoutProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

const SignupLayout = ({ children, title, subtitle }: SignupLayoutProps) => {
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
        {/* Left Section - Logo (Desktop Only) */}
        <div className="hidden lg:flex lg:w-1/2 relative items-center justify-center">
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

        {/* Right Section - Form with White Transparent Background and Curved Left Corner */}
        <div className="w-full lg:w-1/2 relative">
          {/* White transparent overlay with curved left corner */}
          <div className="absolute inset-0 bg-white/90 backdrop-blur-sm lg:rounded-l-3xl"></div>
          
          {/* Form Container with scroll */}
          <div className="relative z-10 h-full max-h-screen overflow-y-auto flex items-center justify-center px-4 md:px-8 py-8">
            {children}
          </div>
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden absolute inset-0 flex flex-col"
        style={{
          backgroundImage: `url("/lovable-uploads/89cbe888-d974-42ee-a6ee-9ce3e9b60fb4.png")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        
        {/* Mobile Logo */}
        <div className="flex-1 flex items-center justify-center pt-16 relative z-10">
          <div className="text-center text-white">
            <img 
              src="/lovable-uploads/a42a1abc-16cd-4410-8cf7-324a6c97ac20.png" 
              alt="STEM for Society Logo" 
              className="h-24 w-24 mx-auto mb-4 opacity-50"
            />
            <h1 className="text-2xl font-bold mb-2">STEM FOR SOCIETY</h1>
            <p className="text-sm">
              {subtitle || "Join us to Innovate, Incubate and Impact!"}
            </p>
          </div>
        </div>
        
        {/* Mobile Content with white overlay and curved corners */}
        <div className="flex-1 relative">
          <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-t-3xl"></div>
          <div className="relative z-10 max-h-[60vh] overflow-y-auto flex items-start justify-center px-4 pt-8 pb-4">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupLayout;
