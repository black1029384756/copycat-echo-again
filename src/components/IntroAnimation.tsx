
import { useEffect, useState } from "react";

const IntroAnimation = ({ onComplete }: { onComplete: () => void }) => {
  const [isVisible, setIsVisible] = useState(true);
  const [animationStage, setAnimationStage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setAnimationStage(1), 200);
    const timer2 = setTimeout(() => setAnimationStage(2), 1500);
    const timer3 = setTimeout(() => {
      setIsVisible(false);
      onComplete();
    }, 2000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  if (!isVisible) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url("/lovable-uploads/c96202c2-70b0-4f3e-8b73-9a36a845c7e3.png")`,
      }}
    >
      {/* Logo Animation */}
      <div 
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${
          animationStage >= 1 ? 'opacity-50 scale-100' : 'opacity-0 scale-50'
        }`}
      >
        <img 
          src="/lovable-uploads/59d4420d-7b78-4de5-bb75-88bf67aad1b0.png" 
          alt="STEM for Society Logo" 
          className="h-24 w-24 object-contain"
        />
      </div>

      {/* Fade out animation */}
      <div 
        className={`absolute inset-0 bg-white transition-opacity duration-500 ${
          animationStage >= 2 ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
};

export default IntroAnimation;
