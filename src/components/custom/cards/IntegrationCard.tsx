import { motion } from "framer-motion";

interface IntegrationCardProps {
  name: string;
  logo: string;
  category: string;
  gradient: string;
  index: number;
}

export default function IntegrationCard({ name, logo, category, gradient, index }: IntegrationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className="group relative"
    >
      {/* Glow effect - optimized for Safari */}
      <div className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-2xl opacity-0 group-hover:opacity-40 transition duration-500`} style={{ filter: "blur(12px)" }}></div>

      {/* Card */}
      <div className="relative h-full bg-white rounded-2xl border-2 border-slate-200 p-6 hover:border-slate-300 transition-all shadow-lg hover:shadow-2xl">
        {/* Logo/Icon */}
        <div className="mb-4 flex items-center justify-center">
          <motion.div
            className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center text-4xl shadow-lg`}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            {logo}
          </motion.div>
        </div>

        {/* Name */}
        <h3 className="text-lg font-bold text-slate-900 text-center mb-2 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-slate-900 group-hover:to-slate-600 transition-all">
          {name}
        </h3>

        {/* Category */}
        <div className="text-center">
          <span className={`inline-block px-3 py-1 rounded-full bg-gradient-to-r ${gradient} bg-opacity-10 text-xs font-semibold text-slate-600`}>{category}</span>
        </div>

        {/* Hover indicator */}
        <motion.div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity" initial={{ scale: 0 }} whileHover={{ scale: 1 }}>
          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${gradient}`}></div>
        </motion.div>

        {/* Connected badge */}
        <motion.div className="absolute bottom-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity" initial={{ x: -10 }} whileHover={{ x: 0 }}>
          <div className="flex items-center gap-1 px-2 py-1 bg-emerald-100 rounded-full">
            <svg className="w-3 h-3 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span className="text-xs font-semibold text-emerald-600">Ready</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
