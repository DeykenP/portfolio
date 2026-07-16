import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode, MouseEvent } from "react";
import { useRef } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  as?: "a" | "button";
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
};

export function MagneticButton({ children, className, as = "button", href, onClick, target, rel }: MagneticButtonProps) {
  const ref = useRef<HTMLElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 });

  function handleMouseMove(e: MouseEvent<HTMLElement>) {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.35);
    y.set(relY * 0.35);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const Component = motion[as] as typeof motion.button;

  return (
    <Component
      // @ts-expect-error - polymorphic ref
      ref={ref}
      href={href}
      target={target}
      rel={rel}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </Component>
  );
}
