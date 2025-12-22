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
    <section id="pricing" className="relative py-24 bg-slate-50 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Simple, transparent pricing</h2>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">Start free and scale as you grow. No hidden fees, no surprises.</p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-4 p-1 bg-white rounded-full shadow-sm border border-slate-200">
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={`px-6 py-2 rounded-full font-medium transition-all cursor-pointer ${!isAnnual ? "bg-slate-900 text-white" : "text-slate-600 hover:text-slate-900"}`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className={`px-6 py-2 rounded-full font-medium transition-all cursor-pointer ${isAnnual ? "bg-slate-900 text-white" : "text-slate-600 hover:text-slate-900"}`}
            >
              <span className="flex items-center gap-2">
                Annual
                <span className={`text-xs px-2 py-0.5 rounded-full ${isAnnual ? "bg-emerald-500 text-white" : "bg-emerald-100 text-emerald-700"}`}>Save 20%</span>
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
                  <span className="inline-flex items-center px-4 py-1 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold rounded-full shadow-lg">
                    ⭐ Most Popular
                  </span>
                </div>
              )}

              <div
                className={`relative h-full rounded-2xl p-8 transition-all duration-300 ${
                  tier.highlight
                    ? "bg-slate-900 text-white shadow-2xl scale-105 border-2 border-indigo-500"
                    : "bg-white text-slate-900 shadow-lg hover:shadow-xl border border-slate-200"
                }`}
              >
                {tier.highlight && (
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-indigo-600/20 via-purple-600/20 to-pink-600/20 rounded-2xl opacity-50"
                    style={{ filter: "blur(12px)" }}
                  ></div>
                )}

                <div className="relative">
                  <h3 className={`text-2xl font-bold mb-2 ${tier.highlight ? "text-white" : "text-slate-900"}`}>{tier.name}</h3>
                  <p className={`text-sm mb-6 ${tier.highlight ? "text-slate-300" : "text-slate-600"}`}>{tier.description}</p>

                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className={`text-5xl font-bold ${tier.highlight ? "text-white" : "text-slate-900"}`}>{tier.price}</span>
                      {tier.price !== "Free" && tier.price !== "Custom" && <span className={`text-sm ${tier.highlight ? "text-slate-300" : "text-slate-600"}`}>/month</span>}
                    </div>
                    {isAnnual && tier.price !== "Free" && tier.price !== "Custom" && (
                      <p className={`text-sm mt-2 ${tier.highlight ? "text-emerald-300" : "text-emerald-600"}`}>$23/month billed annually</p>
                    )}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-3 px-6 rounded-xl font-semibold transition-all mb-8 ${
                      tier.highlight ? "bg-white text-slate-900 hover:bg-slate-100 shadow-lg" : "bg-slate-900 text-white hover:bg-slate-800"
                    }`}
                  >
                    {tier.cta}
                  </motion.button>

                  <ul className="space-y-4">
                    {tier.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <svg
                          className={`w-5 h-5 mt-0.5 flex-shrink-0 ${tier.highlight ? "text-emerald-400" : "text-emerald-600"}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className={`text-sm ${tier.highlight ? "text-slate-300" : "text-slate-600"}`}>{feature}</span>
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
          <p className="text-slate-600 mb-4">Need help choosing? We're here to help!</p>
          <div className="flex items-center justify-center gap-4">
            <a href="#contact" className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors">
              Contact Sales →
            </a>
            <span className="text-slate-300">•</span>
            <a href="#faq" className="text-indigo-600 font-medium hover:text-indigo-700 transition-colors">
              View FAQ →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
