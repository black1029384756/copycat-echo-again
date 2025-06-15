
import { useState, useEffect } from "react";

export type AnimationStage = 'initial' | 'logoTransition' | 'finalLayout';

interface LoginStagesProps {
  children: (stage: AnimationStage) => React.ReactNode;
}

const LoginStages = ({ children }: LoginStagesProps) => {
  const [stage, setStage] = useState<AnimationStage>('initial');

  useEffect(() => {
    const timer1 = setTimeout(() => setStage('logoTransition'), 2500);
    const timer2 = setTimeout(() => setStage('finalLayout'), 4000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return <>{children(stage)}</>;
};

export default LoginStages;
