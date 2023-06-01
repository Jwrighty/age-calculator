import { animate } from "framer-motion";
import { useEffect, useRef } from "react";

interface CounterProps {
  from: number | undefined;
  to: number | undefined;
}

export default function Counter({ from, to }: CounterProps) {
  const nodeRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    if (!to) {
      node.textContent = "- -";
      return;
    }

    const controls = animate(from, to, {
      duration: 1,
      onUpdate(value) {
        node.textContent = value ? Math.round(value).toString() : "- -";
      },
    });

    return () => controls.stop();
  }, [from, to]);

  return <span className="mr-4 text-purple-500" ref={nodeRef} />;
}
