
import { useState, useEffect } from 'react';

interface UseTypingAnimationProps {
  text: string;
  speed?: number;
  delay?: number;
  trigger?: boolean;
}

export const useTypingAnimation = ({ 
  text, 
  speed = 100, 
  delay = 0, 
  trigger = true 
}: UseTypingAnimationProps) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    if (!trigger) {
      setDisplayedText('');
      setIsComplete(false);
      return;
    }

    const timeoutId = setTimeout(() => {
      let currentIndex = 0;
      
      const typingInterval = setInterval(() => {
        if (currentIndex <= text.length) {
          setDisplayedText(text.slice(0, currentIndex));
          currentIndex++;
        } else {
          setIsComplete(true);
          clearInterval(typingInterval);
        }
      }, speed);

      return () => clearInterval(typingInterval);
    }, delay);

    return () => clearTimeout(timeoutId);
  }, [text, speed, delay, trigger]);

  return { displayedText, isComplete };
};
