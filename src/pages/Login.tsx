
import LoginStages from "@/components/LoginStages";
import LoginForm from "@/components/LoginForm";

const Login = () => {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center animate-subtle-zoom"
        style={{
          backgroundImage: `url("/lovable-uploads/89cbe888-d974-42ee-a6ee-9ce3e9b60fb4.png")`,
        }}
      />
      
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      
      {/* Main Content Container */}
      <div className="relative z-10 min-h-screen">
        <LoginStages>
          {(stage) => (
            <>
              {/* Logo Element */}
              <div className={`absolute transition-all duration-2000 ease-out ${
                stage === 'initial' 
                  ? 'inset-0 flex items-center justify-center opacity-100' 
                  : 'left-[30%] top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-100'
              }`}>
                <img 
                  src="/lovable-uploads/a42a1abc-16cd-4410-8cf7-324a6c97ac20.png" 
                  alt="STEM for Society Logo" 
                  className={`object-contain transition-all duration-2000 ease-out ${
                    stage === 'initial' 
                      ? 'h-32 w-32 md:h-48 md:w-48 lg:h-64 lg:w-64' 
                      : 'h-40 w-40 md:h-56 md:w-56 lg:h-72 lg:w-72'
                  } ${stage === 'finalLayout' ? 'animate-pulse-glow-delayed' : ''}`}
                />
              </div>

              {/* Text Element */}
              <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1500 ease-out ${
                stage === 'initial' 
                  ? 'opacity-100 translate-y-24 md:translate-y-32 lg:translate-y-40' 
                  : 'opacity-0 -translate-y-10'
              }`}>
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white text-center px-4 leading-tight">
                  Let's Innovate, Incubate and Impact the world together!
                </h1>
              </div>

              {/* Login Form */}
              <div className={`absolute right-0 top-0 h-full w-1/2 flex items-center justify-center px-4 md:px-8 transition-all duration-1500 ease-out ${
                stage === 'finalLayout' 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 translate-x-full'
              }`}>
                <LoginForm />
              </div>

              {/* Mobile Layout */}
              <div className={`md:hidden absolute inset-0 transition-all duration-1500 ease-out ${
                stage === 'finalLayout' ? 'opacity-100' : 'opacity-0'
              }`}>
                {/* Mobile Logo */}
                <div className="flex-1 flex items-center justify-center pt-16">
                  <img 
                    src="/lovable-uploads/a42a1abc-16cd-4410-8cf7-324a6c97ac20.png" 
                    alt="STEM for Society Logo" 
                    className="h-24 w-24 object-contain animate-pulse-glow-delayed"
                  />
                </div>
                
                {/* Mobile Form */}
                <div className="flex-1 flex items-start justify-center px-4 pt-8">
                  <div className="w-full max-w-sm">
                    <LoginForm />
                  </div>
                </div>
              </div>
            </>
          )}
        </LoginStages>
      </div>
    </div>
  );
};

export default Login;
