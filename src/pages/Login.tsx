
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
              <div className={`absolute top-1/2 -translate-y-1/2 transition-all duration-[2500ms] ${
                stage === 'initial' || stage === 'textFadeOut'
                  ? 'left-1/2 -translate-x-1/2' 
                  : 'left-[25%] -translate-x-1/2'
              }`}
              style={{
                transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
                transform: 'translate3d(var(--tw-translate-x), var(--tw-translate-y), 0)'
              }}>
                <img 
                  src="/lovable-uploads/a42a1abc-16cd-4410-8cf7-324a6c97ac20.png" 
                  alt="STEM for Society Logo" 
                  className={`object-contain transition-all duration-[2500ms] ${
                    stage === 'initial' || stage === 'textFadeOut'
                      ? 'h-32 w-32 md:h-48 md:w-48 lg:h-64 lg:w-64' 
                      : 'h-40 w-40 md:h-56 md:w-56 lg:h-72 lg:w-72 opacity-50'
                  } ${stage === 'logoTransition' ? 'animate-pulse-glow-delayed' : ''}`}
                  style={{
                    transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)'
                  }}
                />
              </div>

              {/* Text Element */}
              <div className={`absolute inset-0 flex items-center justify-center transition-all duration-1000 ease-out ${
                stage === 'initial' 
                  ? 'opacity-100 translate-y-24 md:translate-y-32 lg:translate-y-40' 
                  : 'opacity-0 -translate-y-5'
              }`}>
                <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white text-center px-4 leading-tight">
                  Let's Innovate, Incubate and Impact the world together!
                </h1>
              </div>

              {/* Login Form with White Transparent Background and Curved Left Corner */}
              <div className={`absolute right-0 top-0 h-full w-1/2 transition-all duration-[2500ms] ${
                stage === 'logoTransition' 
                  ? 'translate-x-0 opacity-100' 
                  : 'translate-x-full opacity-0'
              }`}
              style={{
                transitionTimingFunction: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
                transform: 'translate3d(var(--tw-translate-x), var(--tw-translate-y), 0)'
              }}>
                {/* White transparent overlay with curved left corner */}
                <div className="absolute inset-0 bg-white/90 rounded-l-3xl"></div>
                
                {/* Form Container */}
                <div className="relative z-10 h-full flex items-center justify-center px-4 md:px-8">
                  <LoginForm />
                </div>
              </div>

              {/* Mobile Layout */}
              <div className={`md:hidden absolute inset-0 transition-all duration-1000 ease-out ${
                stage === 'logoTransition' ? 'opacity-100' : 'opacity-0'
              }`}>
                {/* Mobile Logo */}
                <div className="flex-1 flex items-center justify-center pt-16">
                  <img 
                    src="/lovable-uploads/a42a1abc-16cd-4410-8cf7-324a6c97ac20.png" 
                    alt="STEM for Society Logo" 
                    className="h-24 w-24 object-contain animate-pulse-glow-delayed opacity-50"
                  />
                </div>
                
                {/* Mobile Form with white overlay and curved corners */}
                <div className="flex-1 relative">
                  <div className="absolute inset-0 bg-white/90 rounded-t-3xl"></div>
                  <div className="relative z-10 flex items-start justify-center px-4 pt-8">
                    <div className="w-full max-w-sm">
                      <LoginForm />
                    </div>
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
