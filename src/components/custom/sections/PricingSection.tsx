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
    <section id="pricing" className="relative py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full border border-border bg-card/70 text-xs font-medium text-muted-foreground">
            Pricing
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">Simple, transparent pricing</h2>
          <p className="text-base text-muted-foreground mb-8 max-w-xl mx-auto">Start free and scale as you grow. No hidden fees, no surprises.</p>

          {/* Billing toggle */}
          <div className="inline-flex items-center gap-1 p-1 glass-surface rounded-full">
            <button
              type="button"
              onClick={() => setIsAnnual(false)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer ${
                !isAnnual ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Monthly
            </button>
            <button
              type="button"
              onClick={() => setIsAnnual(true)}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all cursor-pointer flex items-center gap-2 ${
                isAnnual ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Annual
              <span className={`text-xs rounded-full px-1.5 py-0.5 font-medium ${isAnnual ? "bg-primary-foreground/20 text-primary-foreground" : "border border-border bg-muted text-muted-foreground"}`}>
                -20%
              </span>
            </button>
          </div>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-4 max-w-5xl mx-auto">
          {pricingTiers.map((tier, index) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-10">
                  <span className="rounded-full px-3 py-1 text-xs font-medium bg-primary text-primary-foreground">
                    Most Popular
                  </span>
                </div>
              )}

              <div
                className={`relative h-full rounded-2xl py-6 px-6 transition-all duration-300 ${
                  tier.highlight
                    ? "glass-surface-strong border-primary/30"
                    : "glass-surface"
                }`}
              >
                <h3 className="text-sm font-semibold text-foreground mb-1">{tier.name}</h3>
                <p className="text-xs text-muted-foreground mb-5">{tier.description}</p>

                <div className="mb-6">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                    {tier.price !== "Free" && tier.price !== "Custom" && (
                      <span className="text-xs text-muted-foreground">/month</span>
                    )}
                  </div>
                  {isAnnual && tier.price !== "Free" && tier.price !== "Custom" && (
                    <p className="text-xs mt-1 text-muted-foreground">$23/month billed annually</p>
                  )}
                </div>

                <motion.a
                  href={tier.name === "Enterprise" ? "#contact" : "https://app.devver.app"}
                  className={`w-full rounded-md h-9 text-sm font-medium transition-all mb-6 inline-flex items-center justify-center ${
                    tier.highlight
                      ? "bg-primary text-primary-foreground hover:opacity-90"
                      : "border border-border bg-card/70 text-foreground hover:bg-accent"
                  }`}
                >
                  {tier.cta}
                </motion.a>

                <ul className="space-y-3">
                  {tier.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-foreground/50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-xs text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* FAQ Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-10"
        >
          <p className="text-xs text-muted-foreground mb-3">Need help choosing? We're here to help!</p>
          <div className="flex items-center justify-center gap-4 text-sm">
            <a href="#contact" className="text-muted-foreground font-medium hover:text-foreground transition-colors">
              Contact Sales →
            </a>
            <span className="text-border">•</span>
            <a href="#faq" className="text-muted-foreground font-medium hover:text-foreground transition-colors">
              View FAQ →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
