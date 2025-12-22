import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function DeploymentTimer() {
  const [count, setCount] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    // Animate from 0 to 38 over 1.5 seconds
    const duration = 1500;
    const startTime = Date.now();
    const target = 38;

    const timer = setInterval(() => {
      const now = Date.now();
      const elapsed = now - startTime;

      if (elapsed >= duration) {
        setCount(target);
        setIsComplete(true);
        clearInterval(timer);
        return;
      }

      // Ease out quart
      const progress = 1 - Math.pow(1 - elapsed / duration, 4);
      setCount(Math.floor(progress * target));
    }, 16);

    return () => clearInterval(timer);
  }, [isInView]);

  return (
    <div ref={ref} className="text-center space-y-4 z-10 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center gap-3 px-6 py-3 bg-slate-900/90 rounded-full border border-slate-700 backdrop-blur-sm"
      >
        <span className="relative flex h-3 w-3">
          {!isComplete && <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>}
          <span className={`relative inline-flex rounded-full h-3 w-3 ${isComplete ? "bg-emerald-400" : "bg-emerald-500"}`}></span>
        </span>
        <span className="text-white font-semibold min-w-[90px] text-left">{isComplete ? "Deployed" : "Deploying..."}</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="text-7xl md:text-8xl font-bold tracking-tight"
      >
        <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent tabular-nums">{count}s</span>
      </motion.div>

      <motion.p initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 0.2 }} className="text-xl text-slate-300">
        Average deployment time
      </motion.p>
    </div>
  );
}
