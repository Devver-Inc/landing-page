import { motion } from "framer-motion";

const features = [
  {
    icon: "⚡",
    title: "Lightning Fast",
    description: "Deploy in under 60 seconds. No complex setup, no waiting.",
    stats: "< 1 min",
    detail: "Average deploy time",
  },
  {
    icon: "🔒",
    title: "Secure by Default",
    description: "SSO, RBAC, and automatic SSL. Your code stays protected.",
    stats: "99.99%",
    detail: "Security uptime",
  },
  {
    icon: "🌐",
    title: "Global CDN",
    description: "Lightning-fast delivery with edge locations worldwide.",
    stats: "< 40ms",
    detail: "Average latency",
  },
  {
    icon: "🔄",
    title: "Auto-Sync",
    description: "Push to Git and watch your preview update automatically.",
    stats: "Real-time",
    detail: "Git integration",
  },
  {
    icon: "💬",
    title: "Team Collaboration",
    description: "Comment, review, and approve directly on previews.",
    stats: "10K+",
    detail: "Active teams",
  },
  {
    icon: "📊",
    title: "Analytics Built-in",
    description: "Track usage, performance, and user behavior out of the box.",
    stats: "Real-time",
    detail: "Metrics tracking",
  },
];

export default function FeaturesShowcase() {
  return (
    <section id="features" className="relative py-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-border bg-card/70 text-xs font-medium text-muted-foreground"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-foreground/40 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-foreground/60"></span>
            </span>
            Powerful Features
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Everything You Need to Ship with Confidence
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-muted-foreground max-w-2xl mx-auto"
          >
            Built for developers who demand speed, security, and simplicity
          </motion.p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              className="glass-surface rounded-2xl py-6 px-6 group"
            >
              {/* Icon */}
              <div className="mb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl border border-border bg-muted text-xl">
                  {feature.icon}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-sm font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed mb-5">{feature.description}</p>

              {/* Stats */}
              <div className="pt-4 border-t border-glass-border">
                <div className="text-2xl font-bold text-foreground">{feature.stats}</div>
                <div className="text-xs text-muted-foreground mt-0.5">{feature.detail}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-10"
        >
          <a href="#pricing" className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group">
            See all features
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
