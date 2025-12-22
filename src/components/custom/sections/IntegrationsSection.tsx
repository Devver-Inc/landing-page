import { motion } from "framer-motion";
import IntegrationCard from "../cards/IntegrationCard";

const integrations = [
  {
    name: "GitHub",
    logo: "🐙",
    category: "Version Control",
    gradient: "from-slate-700 to-slate-900",
  },
  {
    name: "GitLab",
    logo: "🦊",
    category: "Version Control",
    gradient: "from-orange-500 to-red-600",
  },
  {
    name: "Bitbucket",
    logo: "🪣",
    category: "Version Control",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    name: "Slack",
    logo: "💬",
    category: "Communication",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Discord",
    logo: "🎮",
    category: "Communication",
    gradient: "from-indigo-500 to-purple-600",
  },
  {
    name: "Linear",
    logo: "📐",
    category: "Project Management",
    gradient: "from-violet-500 to-purple-700",
  },
  {
    name: "Jira",
    logo: "📋",
    category: "Project Management",
    gradient: "from-blue-600 to-cyan-600",
  },
  {
    name: "Vercel",
    logo: "▲",
    category: "Hosting",
    gradient: "from-black to-slate-800",
  },
  {
    name: "AWS",
    logo: "☁️",
    category: "Cloud",
    gradient: "from-orange-400 to-yellow-500",
  },
  {
    name: "Docker",
    logo: "🐳",
    category: "Container",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Kubernetes",
    logo: "☸️",
    category: "Orchestration",
    gradient: "from-blue-600 to-indigo-600",
  },
  {
    name: "Datadog",
    logo: "🐕",
    category: "Monitoring",
    gradient: "from-purple-600 to-pink-600",
  },
];

export default function IntegrationsSection() {
  return (
    <section id="integrations" className="relative py-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-100 opacity-30"></div>

      <motion.div
        className="absolute top-20 left-20 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply opacity-30"
        style={{ filter: "blur(24px)" }}
        animate={{
          scale: [1, 1.2, 1],
          x: [0, 50, 0],
          y: [0, -30, 0],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm border border-indigo-500/20"
          >
            <span className="text-2xl">🔌</span>
            <span className="text-sm font-semibold text-indigo-600">Seamless Integrations</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-slate-900 mb-6"
          >
            Works with <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">Your Stack</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-600 max-w-3xl mx-auto"
          >
            Connect Devver with your favorite tools and platforms. No complex setup required.
          </motion.p>
        </div>

        {/* Integrations Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">
          {integrations.map((integration, index) => (
            <IntegrationCard key={integration.name} name={integration.name} logo={integration.logo} category={integration.category} gradient={integration.gradient} index={index} />
          ))}
        </div>

        {/* Feature highlights */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            {
              icon: "⚡",
              title: "One-Click Setup",
              description: "Connect your tools in seconds with OAuth integration",
            },
            {
              icon: "🔄",
              title: "Auto-Sync",
              description: "Real-time synchronization across all platforms",
            },
            {
              icon: "🔒",
              title: "Secure",
              description: "Enterprise-grade security with encrypted connections",
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-white border border-slate-200 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
              <p className="text-slate-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center mt-16"
        >
          <p className="text-slate-600 mb-6">Don't see your tool? We're constantly adding new integrations.</p>
          <a href="#contact" className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-semibold transition-colors group">
            Request an integration
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
