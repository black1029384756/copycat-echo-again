
import { useEffect, useState } from "react";

const IntroAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationStage(1), 100);
    const timer2 = setTimeout(() => setAnimationStage(2), 800);
    const timer3 = setTimeout(() => setAnimationStage(3), 1500);
    const timer4 = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 2200);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white flex items-center justify-center">
      <div className="relative">
        {/* Logo Animation */}
        <div 
          className={`transition-all duration-700 ${
            animationStage >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`}
        >
          <img 
            src="/lovable-uploads/59d4420d-7b78-4de5-bb75-88bf67aad1b0.png" 
            alt="STEM for Society Logo" 
            className="h-20 w-20 mx-auto mb-4"
          />
        </div>

        {/* Text Animation */}
        <div 
          className={`text-center transition-all duration-700 delay-300 ${
            animationStage >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <h1 className="text-2xl font-bold text-gray-900 mb-2">STEM FOR SOCIETY</h1>
          <p className="text-blue-600 text-sm">Empowering Future Innovators</p>
        </div>

        {/* Loading Animation */}
        <div 
          className={`mt-8 flex justify-center transition-all duration-500 delay-700 ${
            animationStage >= 3 ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-100"></div>
            <div className="w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-200"></div>
          </div>
        </div>

        {/* Ripple Effect */}
        <div 
          className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
            animationStage >= 1 ? 'scale-150 opacity-0' : 'scale-0 opacity-100'
          }`}
        >
          <div className="w-32 h-32 border-2 border-blue-300 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default IntroAnimation;
