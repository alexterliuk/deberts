import { useRef, useEffect } from 'react';

// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
export default function useInterval(cb: () => void, delay: number) {
  const savedCb = useRef(() => {});

  // Remember the latest callback.
  useEffect(() => {
    savedCb.current = cb;
  }, [cb]);

  // Set up the interval.
  useEffect(() => {
    const tick = () => {
      savedCb.current();
    };

    if (delay !== null) {
      const id = setInterval(tick, delay);
      return () => clearInterval(id);
    }

    return undefined;
  }, [delay]);
}
