
import { useTypingAnimation } from '@/hooks/useTypingAnimation';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

interface TypingHeadingProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const TypingHeading = ({ 
  text, 
  className = '', 
  speed = 80, 
  delay = 300,
  as: Component = 'h2'
}: TypingHeadingProps) => {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.3 });
  const { displayedText, isComplete } = useTypingAnimation({ 
    text, 
    speed, 
    delay, 
    trigger: isIntersecting 
  });

  return (
    <Component 
      ref={ref as any} 
      className={`${className} ${!isComplete ? 'after:content-["|"] after:animate-pulse after:ml-1' : ''}`}
    >
      {displayedText || (isIntersecting ? '' : text)}
    </Component>
  );
};
