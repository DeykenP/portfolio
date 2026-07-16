type MarqueeProps = {
  items: string[];
};

export function Marquee({ items }: MarqueeProps) {
  const track = [...items, ...items];

  return (
    <div className="relative w-full overflow-hidden border-y border-border py-4" aria-hidden="true">
      <div className="flex w-max animate-marquee">
        {track.map((item, i) => (
          <span key={i} className="flex items-center text-sm md:text-base text-muted whitespace-nowrap px-4">
            {item}
            <span className="text-accent ml-4">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
