
import { useState, useEffect } from "react";

export type AnimationStage = 'initial' | 'textFadeOut' | 'logoTransition' | 'logoSettled' | 'finalLayout';

interface LoginStagesProps {
  children: (stage: AnimationStage) => React.ReactNode;
}

const LoginStages = ({ children }: LoginStagesProps) => {
  const [stage, setStage] = useState<AnimationStage>('initial');

  useEffect(() => {
    const timer1 = setTimeout(() => setStage('textFadeOut'), 3000);   // Text starts fading at 3s
    const timer2 = setTimeout(() => setStage('logoTransition'), 4000); // Logo starts moving at 4s
    const timer3 = setTimeout(() => setStage('logoSettled'), 7000);    // Logo settles at 7s (3 seconds movement)
    const timer4 = setTimeout(() => setStage('finalLayout'), 8000);    // Form appears at 8s

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, []);

  return <>{children(stage)}</>;
};

export default LoginStages;
