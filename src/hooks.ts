import { animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export function useAnimatedCounter(
  maxValue: number,
  initialValue = 0,
  duration = 1
) {
  const [counter, setCounter] = useState<number>(initialValue);

  useEffect(() => {
    const controls = animate(initialValue, maxValue, {
      duration,
      onUpdate(value) {
        setCounter(value);
      },
    });
    return () => controls.stop();
  }, [initialValue, maxValue, duration]);

  return counter;
}

export function usePrevious<T>(value: T): T | undefined {
  const ref = useRef<T>();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}
