import { createContext, useState, useEffect } from 'react';

export default function useScroll() {
  const [data, setData] = useState({
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0,
  });

  // set up event listeners
  useEffect(() => {
    const handleScroll = () => {
      setData((previous) => {
        return {
          x: window.scrollX,
          y: window.scrollY,
          lastX: previous.x,
          lastY: previous.y,
        };
      });
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return data;
}

export const ScrollContext = createContext(null);
