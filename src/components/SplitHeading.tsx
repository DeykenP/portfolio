import { motion } from "framer-motion";

type SplitHeadingProps = {
  text: string;
  accentWords?: string[];
  as?: "h1" | "h2" | "h3";
  className?: string;
  delayStart?: number;
};

const wordVariants = {
  hidden: { y: "110%" },
  visible: (i: number) => ({
    y: "0%",
    transition: { duration: 0.7, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export function SplitHeading({ text, accentWords = [], as = "h2", className, delayStart = 0 }: SplitHeadingProps) {
  const words = text.split(" ");
  const Component = motion[as];

  return (
    <Component
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      transition={{ delayChildren: delayStart }}
    >
      {words.map((word, i) => {
        const isAccent = accentWords.includes(word.replace(/[.,]/g, ""));
        return (
          <span key={i} className="inline-block overflow-hidden align-top mr-[0.28em] last:mr-0">
            <motion.span
              className={`inline-block ${isAccent ? "font-accent italic text-gradient" : ""}`}
              custom={i}
              variants={wordVariants}
            >
              {word}
            </motion.span>
          </span>
        );
      })}
    </Component>
  );
}
