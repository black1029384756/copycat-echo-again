
interface AuthLayoutProps {
  children: React.ReactNode;
  backgroundImage: string;
  showLogo?: boolean;
  showAnimation?: boolean;
}

const AuthLayout = ({ children, backgroundImage, showLogo = false, showAnimation = false }: AuthLayoutProps) => {
  return (
    <div className="min-h-screen flex">
      {/* Left Section - Background Image with Logo */}
      <div 
        className="hidden lg:flex lg:w-1/2 relative"
        style={{
          backgroundImage: `url("${backgroundImage}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        {showLogo && (
          <div className="relative z-10 flex flex-col justify-center items-center w-full text-white p-8">
            <div className="mb-8">
              <img 
                src="/lovable-uploads/a42a1abc-16cd-4410-8cf7-324a6c97ac20.png" 
                alt="STEM for Society Logo" 
                className="h-32 w-32 mx-auto mb-4 opacity-50"
              />
            </div>
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4">STEM FOR SOCIETY</h1>
              <p className="text-xl">Join us to Innovate, Incubate and Impact the world together!</p>
            </div>
          </div>
        )}
      </div>

      {/* Right Section - Form with White Transparent Background and Curved Left Corner */}
      <div className="w-full lg:w-1/2 relative">
        {/* White transparent overlay with curved left corner */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm lg:rounded-l-3xl"></div>
        
        {/* Form Container with scroll */}
        <div className="relative z-10 h-full max-h-screen overflow-y-auto flex items-center justify-center px-4 md:px-8 py-8">
          <div className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg">
            {children}
          </div>
        </div>
      </div>

      {/* Mobile Layout with proper transparency and curved corners */}
      <div className="lg:hidden absolute inset-0 flex flex-col"
        style={{
          backgroundImage: `url("${backgroundImage}")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center bottom',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
        
        {showLogo && (
          <div className="flex-1 flex items-center justify-center pt-16 relative z-10">
            <div className="text-center text-white">
              <img 
                src="/lovable-uploads/a42a1abc-16cd-4410-8cf7-324a6c97ac20.png" 
                alt="STEM for Society Logo" 
                className="h-24 w-24 mx-auto mb-4 opacity-50"
              />
              <h1 className="text-2xl font-bold mb-2">STEM FOR SOCIETY</h1>
              <p className="text-sm">Join us to Innovate, Incubate and Impact!</p>
            </div>
          </div>
        )}
        
        {/* Mobile Content with white overlay and curved corners */}
        <div className="flex-1 relative">
          <div className="absolute inset-0 bg-white/60 backdrop-blur-sm rounded-t-3xl"></div>
          <div className="relative z-10 max-h-[60vh] overflow-y-auto flex items-start justify-center px-4 pt-8 pb-4">
            <div className="w-full max-w-sm bg-white/80 backdrop-blur-sm rounded-lg p-4 shadow-lg">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;
