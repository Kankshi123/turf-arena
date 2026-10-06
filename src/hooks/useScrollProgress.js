import { useEffect, useRef } from 'react';

export function useScrollProgress() {
  const barRef = useRef(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    const onScroll = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / docHeight) * 100;
      bar.style.width = `${progress}%`;
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return barRef;
}

export function useCountUp(end, duration = 2000, decimals = 0, trigger = true) {
  const ref = useRef(null);
  const hasRun = useRef(false);

  useEffect(() => {
    if (!trigger || hasRun.current || !ref.current) return;
    hasRun.current = true;

    const start = 0;
    const step = (end - start) / (duration / 16);
    let current = start;

    const interval = setInterval(() => {
      current += step;
      if (current >= end) {
        current = end;
        clearInterval(interval);
      }
      if (ref.current) {
        ref.current.textContent = current.toFixed(decimals);
      }
    }, 16);

    return () => clearInterval(interval);
  }, [end, duration, decimals, trigger]);

  return ref;
}
