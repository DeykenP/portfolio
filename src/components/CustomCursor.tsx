import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";
import { useIsTouch } from "../hooks/useIsTouch";

export function CustomCursor() {
  const isTouch = useIsTouch();
  const [isPointer, setIsPointer] = useState(false);
  const [visible, setVisible] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const ringX = useSpring(x, { stiffness: 300, damping: 30 });
  const ringY = useSpring(y, { stiffness: 300, damping: 30 });

  useEffect(() => {
    if (isTouch) return;

    function handleMove(e: MouseEvent) {
      x.set(e.clientX - 4);
      y.set(e.clientY - 4);
      setVisible(true);
      const target = e.target as HTMLElement;
      setIsPointer(!!target.closest("a, button, [data-cursor-hover]"));
    }
    function handleLeave() {
      setVisible(false);
    }

    window.addEventListener("mousemove", handleMove);
    document.addEventListener("mouseleave", handleLeave);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      document.removeEventListener("mouseleave", handleLeave);
    };
  }, [isTouch, x, y]);

  if (isTouch) return null;

  return (
    <>
      <motion.div
        className="cursor-dot fixed top-0 left-0 w-2 h-2 rounded-full bg-accent pointer-events-none z-[100]"
        style={{ x, y, opacity: visible ? 1 : 0 }}
      />
      <motion.div
        className="cursor-ring fixed top-0 left-0 rounded-full border border-accent/60 pointer-events-none z-[100]"
        style={{
          x: ringX,
          y: ringY,
          opacity: visible ? 1 : 0,
        }}
        animate={{
          width: isPointer ? 56 : 32,
          height: isPointer ? 56 : 32,
          marginLeft: isPointer ? -24 : -12,
          marginTop: isPointer ? -24 : -12,
        }}
        transition={{ duration: 0.25, ease: "easeOut" }}
      />
    </>
  );
}
