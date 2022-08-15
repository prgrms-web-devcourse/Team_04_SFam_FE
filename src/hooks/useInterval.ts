import { useEffect, useRef } from 'react';

interface UseInterval {
  (callback: () => void, interval: number): void;
}

export const useInterval: UseInterval = (callback, interval) => {
  const savedCallback = useRef<(() => void) | null>(null);

  useEffect(() => {
    savedCallback.current = callback;
  });

  useEffect(() => {
    function tick() {
      if (savedCallback.current) {
        savedCallback.current();
      }
    }

    const id = setInterval(tick, interval);
    return () => clearInterval(id);
  }, [interval]);
};
