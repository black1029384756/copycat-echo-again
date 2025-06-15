
import { useState, useEffect } from "react";

export type AnimationStage = 'initial' | 'logoTransition' | 'logoSettled' | 'finalLayout';

interface LoginStagesProps {
  children: (stage: AnimationStage) => React.ReactNode;
}

const LoginStages = ({ children }: LoginStagesProps) => {
  const [stage, setStage] = useState<AnimationStage>('initial');

  useEffect(() => {
    const timer1 = setTimeout(() => setStage('logoTransition'), 3000);
    const timer2 = setTimeout(() => setStage('logoSettled'), 5000);
    const timer3 = setTimeout(() => setStage('finalLayout'), 6000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, []);

  return <>{children(stage)}</>;
};

export default LoginStages;
