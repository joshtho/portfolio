import { useEffect, useState } from "react";
import Meteors from "@/components/ui/meteors";

const Starfield = ({ starCount = 120, meteorCount = 6 }) => {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const generated = [...new Array(starCount)].map(() => ({
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      size: Math.random() * 2 + 1,
      opacity: Math.random() * 0.6 + 0.3,
      animationDelay: Math.random() * 5 + "s",
      animationDuration: Math.random() * 3 + 2 + "s",
    }));
    setStars(generated);
  }, [starCount]);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Nebula glow */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.12),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(147,51,234,0.1),transparent_60%)]" />

      {/* Twinkling stars */}
      {stars.map((star, idx) => (
        <span
          key={idx}
          className="absolute rounded-full bg-white animate-twinkle"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            opacity: star.opacity,
            animationDelay: star.animationDelay,
            animationDuration: star.animationDuration,
          }}
        />
      ))}

      {/* Occasional shooting stars */}
      <Meteors number={meteorCount} />
    </div>
  );
};

export default Starfield;
