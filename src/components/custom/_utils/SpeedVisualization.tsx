import { motion } from "framer-motion";

export default function SpeedVisualization() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#818cf810_1px,transparent_1px),linear-gradient(to_bottom,#818cf810_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

      {/* Horizontal Data Streams - Indigo (Background traffic) */}
      {[...Array(15)].map((_, i) => {
        // Deterministic pseudo-random based on index for consistent rendering
        const top = (i * 7) % 100;
        const width = 100 + ((i * 30) % 200);
        const duration = 2 + (i % 3);
        const delay = i * 0.2;

        return (
          <motion.div
            key={i}
            className="absolute h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"
            style={{
              top: `${top}%`,
              width: width,
              left: -width,
            }}
            animate={{
              x: ["0vw", "100vw"],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: duration,
              repeat: Infinity,
              delay: delay,
              ease: "linear",
            }}
          />
        );
      })}

      {/* Fast "Success" Particles - Emerald (Active deployment) */}
      {[...Array(5)].map((_, i) => {
        const top = (((i + 5) * 13) % 90) + 5;
        const delay = i * 0.7;

        return (
          <motion.div
            key={`p-${i}`}
            className="absolute h-0.5 w-24 rounded-full bg-gradient-to-r from-transparent via-emerald-400 to-transparent blur-[1px]"
            style={{
              top: `${top}%`,
              left: -100,
            }}
            animate={{
              x: ["0vw", "120vw"],
            }}
            transition={{
              duration: 1.2,
              repeat: Infinity,
              delay: delay,
              ease: "linear",
            }}
          />
        );
      })}

      {/* Side Vignettes to fade out lines smoothly */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/50 via-transparent to-slate-900/50" />
    </div>
  );
}
