import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO at TechFlow",
    company: "TechFlow",
    avatar: "👩‍💼",
    content: "Devver transformed our deployment process. What used to take hours now takes minutes. Our team can iterate faster and ship with confidence.",
    rating: 5,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Marcus Rodriguez",
    role: "Lead Developer at StartupXYZ",
    company: "StartupXYZ",
    avatar: "👨‍💻",
    content: "The preview URLs are a game-changer. Our clients can test features before they go live, and the feedback loop is instant. Absolutely love it!",
    rating: 5,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    name: "Emma Thompson",
    role: "Product Manager at InnovateCo",
    company: "InnovateCo",
    avatar: "👩‍🎨",
    content: "As a PM, I can finally see features in action before release. No more staging environment chaos. Devver makes collaboration seamless.",
    rating: 5,
    gradient: "from-emerald-500 to-teal-500",
  },
  {
    name: "David Park",
    role: "Engineering Manager at CloudBase",
    company: "CloudBase",
    avatar: "👨‍🔧",
    content: "Security was our main concern, but Devver handles it perfectly. SSO integration, RBAC, and automatic SSL - everything we needed.",
    rating: 5,
    gradient: "from-orange-500 to-red-500",
  },
  {
    name: "Lisa Anderson",
    role: "Frontend Lead at DesignHub",
    company: "DesignHub",
    avatar: "👩‍🚀",
    content: "The speed is incredible. Deploy in under a minute, and the real-time sync with Git means our previews are always up to date. Perfect!",
    rating: 5,
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    name: "James Wilson",
    role: "DevOps Engineer at ScaleUp",
    company: "ScaleUp",
    avatar: "👨‍🏭",
    content: "Best developer experience I've had with any deployment tool. The CLI is intuitive, the docs are great, and support is responsive.",
    rating: 5,
    gradient: "from-pink-500 to-rose-500",
  },
];

const stats = [
  { value: "10K+", label: "Developers", icon: "👥" },
  { value: "1M+", label: "Deployments", icon: "🚀" },
  { value: "99.99%", label: "Uptime", icon: "⚡" },
  { value: "4.9/5", label: "Rating", icon: "⭐" },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-32 bg-gradient-to-b from-slate-950 via-indigo-950 to-slate-950 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full opacity-20"
          style={{ filter: "blur(30px)" }}
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.2, 0.15],
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
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-slate-800/80 border border-slate-700"
          >
            <span className="text-2xl">💬</span>
            <span className="text-sm font-semibold text-white">Loved by Developers</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Trusted by <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">10,000+ Teams</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto"
          >
            See what developers are saying about their experience with Devver
          </motion.p>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative group"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-50 transition duration-500"
                style={{ filter: "blur(4px)" }}
              ></div>
              <div className="relative bg-slate-900/90 rounded-2xl border border-slate-800 p-6 text-center hover:border-slate-700 transition-all">
                <div className="text-4xl mb-2">{stat.icon}</div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-slate-400">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative"
            >
              {/* Card glow */}
              <div
                className={`absolute -inset-0.5 bg-gradient-to-br ${testimonial.gradient} rounded-2xl opacity-0 group-hover:opacity-30 transition duration-500`}
                style={{ filter: "blur(4px)" }}
              ></div>

              {/* Card content */}
              <div className="relative h-full bg-slate-900/95 rounded-2xl border border-slate-800 p-6 hover:border-slate-700 transition-all">
                {/* Rating stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <motion.svg
                      key={i}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.2, delay: 0.5 + index * 0.1 + i * 0.05 }}
                      className="w-5 h-5 text-yellow-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </motion.svg>
                  ))}
                </div>

                {/* Testimonial text */}
                <p className="text-slate-300 leading-relaxed mb-6 text-sm">"{testimonial.content}"</p>

                {/* Author info */}
                <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-2xl shadow-lg`}>{testimonial.avatar}</div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-slate-400">{testimonial.role}</div>
                  </div>
                </div>

                {/* Company badge */}
                <div className="absolute top-6 right-6">
                  <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-400">{testimonial.company}</div>
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
          <p className="text-slate-400 mb-6">Join thousands of developers shipping faster</p>
          <motion.a
            href="#waitlist"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-full shadow-lg shadow-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/70 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start Your Free Trial
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
