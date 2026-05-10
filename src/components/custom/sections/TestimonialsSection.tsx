import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO at TechFlow",
    company: "TechFlow",
    avatar: "👩‍💼",
    content: "Devver transformed our deployment process. What used to take hours now takes minutes. Our team can iterate faster and ship with confidence.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Lead Developer at StartupXYZ",
    company: "StartupXYZ",
    avatar: "👨‍💻",
    content: "The preview URLs are a game-changer. Our clients can test features before they go live, and the feedback loop is instant. Absolutely love it!",
    rating: 5,
  },
  {
    name: "Emma Thompson",
    role: "Product Manager at InnovateCo",
    company: "InnovateCo",
    avatar: "👩‍🎨",
    content: "As a PM, I can finally see features in action before release. No more staging environment chaos. Devver makes collaboration seamless.",
    rating: 5,
  },
  {
    name: "David Park",
    role: "Engineering Manager at CloudBase",
    company: "CloudBase",
    avatar: "👨‍🔧",
    content: "Security was our main concern, but Devver handles it perfectly. SSO integration, RBAC, and automatic SSL - everything we needed.",
    rating: 5,
  },
  {
    name: "Lisa Anderson",
    role: "Frontend Lead at DesignHub",
    company: "DesignHub",
    avatar: "👩‍🚀",
    content: "The speed is incredible. Deploy in under a minute, and the real-time sync with Git means our previews are always up to date. Perfect!",
    rating: 5,
  },
  {
    name: "James Wilson",
    role: "DevOps Engineer at ScaleUp",
    company: "ScaleUp",
    avatar: "👨‍🏭",
    content: "Best developer experience I've had with any deployment tool. The CLI is intuitive, the docs are great, and support is responsive.",
    rating: 5,
  },
];

const stats = [
  { value: "10K+", label: "Developers" },
  { value: "1M+", label: "Deployments" },
  { value: "99.99%", label: "Uptime" },
  { value: "4.9/5", label: "Rating" },
];

export default function TestimonialsSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-border bg-card/70 text-xs font-medium text-muted-foreground"
          >
            Loved by Developers
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Trusted by 10,000+ Teams
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-muted-foreground max-w-2xl mx-auto"
          >
            See what developers are saying about their experience with Devver
          </motion.p>
        </div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 + index * 0.07 }}
              className="glass-surface rounded-2xl py-6 px-6 text-center"
            >
              <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-xs text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.07 }}
              whileHover={{ y: -3 }}
              className="glass-surface rounded-2xl py-6 px-6 relative"
            >
              {/* Rating stars */}
              <div className="flex gap-0.5 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.svg
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.2, delay: 0.4 + index * 0.07 + i * 0.04 }}
                    className="w-4 h-4 text-foreground/50"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-xs text-muted-foreground leading-relaxed mb-5">"{testimonial.content}"</p>

              {/* Author info */}
              <div className="flex items-center gap-3 pt-4 border-t border-glass-border">
                <div className="w-9 h-9 rounded-lg border border-border bg-muted flex items-center justify-center text-lg flex-shrink-0">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">{testimonial.name}</div>
                  <div className="text-xs text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>

              {/* Company badge */}
              <div className="absolute top-5 right-5">
                <span className="rounded-full px-2 py-0.5 text-xs font-medium border border-border bg-muted/50 text-muted-foreground">
                  {testimonial.company}
                </span>
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
          <p className="text-xs text-muted-foreground mb-4">Join thousands of developers shipping faster</p>
          <motion.a
            href="https://app.devver.app"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground rounded-md h-9 px-4 text-sm font-medium hover:opacity-90 transition-all"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            Start Your Free Trial
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
