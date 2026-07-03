import { motion } from "framer-motion";
import { useState } from "react";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  cta: string;
  highlight?: boolean;
  popular?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "Free",
    description: "Perfect for small teams and side projects",
    features: ["3 concurrent environments", "Public & private URLs", "Basic analytics", "Community support", "7-day environment retention"],
    cta: "Start Free",
    highlight: false,
  },
  {
    name: "Pro",
    price: "$29",
    description: "For growing teams shipping fast",
    features: ["Unlimited environments", "Custom domains", "Advanced analytics & logs", "SSO & RBAC", "Priority support", "30-day retention", "Slack & GitHub integration"],
    cta: "Start Pro Trial",
    highlight: true,
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Advanced features and dedicated support",
    features: [
      "Everything in Pro",
      "Self-hosted option",
      "SLA guarantees 99.99%",
      "Dedicated account manager",
      "Custom integrations",
      "Audit logs & compliance",
      "Unlimited retention",
    ],
    cta: "Contact Sales",
    highlight: false,
  },
];

export default function PricingSection() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <section id="pricing" className="relative py-32 bg-neutral-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-neutral-800 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)] opacity-30"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-emerald-600/10 rounded-full" style={{ filter: "blur(80px)" }}></div>

      <div className="relative max-w-7xl mx-auto px-4">
        {/* Section header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Simple, <span className="bg-gradient-to-r from-emerald-400 via-green-400 to-emerald-400 bg-clip-text text-transparent">transparent</span> pricing
          </h2>
          <p className="text-xl text-neutral-400 mb-8 max-w-2xl mx-auto">Start free and scale as you grow. No hidden fees, no surprises.</p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-1 p-1 bg-neutral-900 rounded-full border border-neutral-800">
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full font-medium transition-all cursor-pointer ${!isAnnual ? "bg-white text-neutral-900" : "text-neutral-400 hover:text-white"}`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full font-medium transition-all cursor-pointer ${isAnnual ? "bg-white text-neutral-900" : "text-neutral-400 hover:text-white"}`}
            >
              <span className="flex items-center gap-2">
                Annual
                <span className={`text-xs px-2 py-0.5 rounded-full ${isAnnual ? "bg-emerald-500 text-white" : "bg-emerald-500/15 text-emerald-300"}`}>Save 20%</span>
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative group"
            >
              {tier.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="inline-flex items-center px-4 py-1 bg-gradient-to-r from-emerald-600 to-green-600 text-white text-sm font-semibold rounded-full shadow-lg shadow-emerald-500/40">
                    ⭐ Most Popular
                  </span>
                </div>
              )}

              {tier.highlight && (
                <div
                  className="absolute -inset-0.5 bg-gradient-to-br from-emerald-600 via-green-600 to-emerald-600 rounded-2xl opacity-40 group-hover:opacity-60 transition duration-500"
                  style={{ filter: "blur(10px)" }}
                ></div>
              )}

              <div
                className={`relative h-full rounded-2xl p-8 transition-all duration-300 ${
                  tier.highlight
                    ? "bg-neutral-900 text-white shadow-2xl scale-105 border border-emerald-500/60"
                    : "bg-neutral-900/60 text-white shadow-lg hover:shadow-xl border border-neutral-800 hover:border-neutral-700"
                }`}
              >
                <div className="relative">
                  <h3 className="text-2xl font-bold mb-2 text-white">{tier.name}</h3>
                  <p className="text-sm mb-6 text-neutral-400">{tier.description}</p>

                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-white">{tier.price}</span>
                      {tier.price !== "Free" && tier.price !== "Custom" && <span className="text-sm text-neutral-400">/month</span>}
                    </div>
                    {isAnnual && tier.price !== "Free" && tier.price !== "Custom" && <p className="text-sm mt-2 text-emerald-400">$23/month billed annually</p>}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all mb-8 ${
                      tier.highlight
                        ? "bg-gradient-to-r from-emerald-600 to-green-600 text-white hover:opacity-90 shadow-lg shadow-emerald-500/30"
                        : "bg-white text-neutral-900 hover:bg-neutral-200"
                    }`}
                  >
                    {tier.cta}
                  </motion.button>

                  <ul className="space-y-4">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-sm text-neutral-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Link */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.5 }} className="text-center mt-16">
          <p className="text-neutral-400 mb-4">Need help choosing? We're here to help!</p>
          <div className="flex items-center justify-center gap-4">
            <a href="#contact" className="text-emerald-400 font-medium hover:text-emerald-300 transition-colors">
              Contact Sales →
            </a>
            <span className="text-neutral-700">•</span>
            <a href="#faq" className="text-emerald-400 font-medium hover:text-emerald-300 transition-colors">
              View FAQ →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
