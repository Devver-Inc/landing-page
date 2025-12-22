import { motion } from "framer-motion";

const features = [
  {
    icon: "⚡",
    title: "Lightning Fast",
    description: "Deploy in under 60 seconds. No complex setup, no waiting.",
    gradient: "from-yellow-500 to-orange-500",
    stats: "< 1 min",
    detail: "Average deploy time",
  },
  {
    icon: "🔒",
    title: "Secure by Default",
    description: "SSO, RBAC, and automatic SSL. Your code stays protected.",
    gradient: "from-emerald-500 to-teal-500",
    stats: "99.99%",
    detail: "Security uptime",
  },
  {
    icon: "🌐",
    title: "Global CDN",
    description: "Lightning-fast delivery with edge locations worldwide.",
    gradient: "from-blue-500 to-cyan-500",
    stats: "< 40ms",
    detail: "Average latency",
  },
  {
    icon: "🔄",
    title: "Auto-Sync",
    description: "Push to Git and watch your preview update automatically.",
    gradient: "from-purple-500 to-pink-500",
    stats: "Real-time",
    detail: "Git integration",
  },
  {
    icon: "💬",
    title: "Team Collaboration",
    description: "Comment, review, and approve directly on previews.",
    gradient: "from-indigo-500 to-purple-500",
    stats: "10K+",
    detail: "Active teams",
  },
  {
    icon: "📊",
    title: "Analytics Built-in",
    description: "Track usage, performance, and user behavior out of the box.",
    gradient: "from-rose-500 to-red-500",
    stats: "Real-time",
    detail: "Metrics tracking",
  },
];

export default function FeaturesShowcase() {
  return (
    <section id="features" className="relative py-32 bg-slate-950 overflow-hidden">
      {/* Simplified background - optimized for Safari performance */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-grid-slate-800 opacity-20"></div>
        <motion.div
          className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-indigo-600/10 rounded-full"
          style={{ filter: "blur(30px)" }}
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-indigo-500/10 backdrop-blur-sm border border-indigo-500/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
            </span>
            <span className="text-sm font-semibold text-indigo-300">Powerful Features</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Everything You Need to
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Ship with Confidence</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto"
          >
            Built for developers who demand speed, security, and simplicity
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group relative"
            >
              {/* Card glow effect - reduced blur for Safari */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-r ${feature.gradient} rounded-2xl opacity-0 group-hover:opacity-20 transition duration-500`}
                style={{ filter: "blur(4px)" }}
              ></div>

              {/* Card content */}
              <div className="relative h-full bg-slate-900/90 backdrop-blur-xl rounded-2xl border border-slate-800 p-8 hover:border-slate-700 transition-all duration-300">
                {/* Icon */}
                <div className="mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} shadow-lg group-hover:scale-105 transition-transform duration-300`}
                  >
                    <span className="text-3xl">{feature.icon}</span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-slate-300 transition-all">
                  {feature.title}
                </h3>
                <p className="text-slate-400 leading-relaxed mb-6">{feature.description}</p>

                {/* Stats */}
                <div className="pt-6 border-t border-slate-800">
                  <div className="flex items-end justify-between">
                    <div>
                      <div className={`text-3xl font-bold bg-gradient-to-r ${feature.gradient} bg-clip-text text-transparent`}>{feature.stats}</div>
                      <div className="text-sm text-slate-500 mt-1">{feature.detail}</div>
                    </div>
                    <motion.div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.gradient} opacity-10 group-hover:opacity-20`}
                      whileHover={{ rotate: 90 }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                </div>

                {/* Hover arrow - simplified for performance */}
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <svg className="w-6 h-6 text-indigo-400" fill="currentColor" viewBox="0 0 20 20">
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-16"
        >
          <a href="#pricing" className="inline-flex items-center gap-2 text-indigo-400 hover:text-indigo-300 font-semibold transition-colors group">
            See all features
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
