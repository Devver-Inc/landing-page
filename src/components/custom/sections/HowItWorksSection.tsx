import { motion } from "framer-motion";
import { useState } from "react";

const steps = [
  {
    number: "01",
    title: "Connect Your Repository",
    description: "Link your GitHub, GitLab, or Bitbucket in seconds. No complex setup required.",
    code: `# Install Devver CLI
npm install -g @devver/cli

# Login to your account
devver login

# Connect your repo
devver init`,
    icon: "🔗",
  },
  {
    number: "02",
    title: "Deploy with One Command",
    description: "Push your code and deploy instantly. Automatic builds on every commit.",
    code: `# Deploy to preview environment
devver deploy --preview

# Or use GitHub Actions
- uses: devver/deploy@v1
  with:
    preview: true`,
    icon: "🚀",
  },
  {
    number: "03",
    title: "Share & Get Feedback",
    description: "Send preview URLs to anyone. Collect feedback and approve changes instantly.",
    code: `# Preview URL generated
✓ https://pr-123.devver.app

# Share with team
devver share --email team@company.com

# Enable comments
devver comments enable`,
    icon: "💬",
  },
];

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="relative py-24 overflow-hidden">
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
            Simple Process
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-foreground mb-4"
          >
            Deploy in 3 Easy Steps
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-base text-muted-foreground max-w-2xl mx-auto"
          >
            From code to production-ready preview in less than a minute
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Steps Navigation */}
          <div className="space-y-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => setActiveStep(index)}
                className="relative cursor-pointer"
              >
                {index < steps.length - 1 && (
                  <div className="absolute left-6 top-16 w-px h-8 bg-border"></div>
                )}

                <div
                  className={`glass-surface rounded-2xl py-5 px-5 transition-all duration-200 ${
                    activeStep === index ? "border-primary/30" : ""
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl border border-border bg-muted flex items-center justify-center text-xl">
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-medium text-muted-foreground">{step.number}</span>
                        <h3 className="text-sm font-semibold text-foreground">{step.title}</h3>
                      </div>
                      <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                    {activeStep === index && (
                      <div className="flex-shrink-0 w-2 h-2 rounded-full bg-foreground/60 mt-1.5"></div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Code Preview */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="sticky top-28"
          >
            <div className="glass-surface rounded-2xl overflow-hidden">
              {/* Terminal header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-glass-border">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400/70"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400/70"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400/70"></div>
                </div>
                <div className="flex-1 text-center">
                  <span className="text-xs text-muted-foreground font-mono">Step {steps[activeStep].number}</span>
                </div>
                <span className="rounded-full px-2 py-0.5 text-xs font-medium border border-border bg-muted text-muted-foreground">Active</span>
              </div>

              {/* Terminal content */}
              <div className="p-6 font-mono text-xs min-h-[260px]">
                <motion.div key={activeStep} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
                  <pre className="text-muted-foreground whitespace-pre-wrap leading-relaxed">{steps[activeStep].code}</pre>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-5 flex items-center gap-2 text-foreground/70 text-xs"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Step completed successfully</span>
                  </motion.div>
                </motion.div>
              </div>

              {/* Progress bar */}
              <div className="h-px bg-border">
                <motion.div
                  className="h-full bg-foreground/20"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  key={activeStep}
                  transition={{ duration: 2, ease: "easeInOut" }}
                />
              </div>
            </div>

            {/* Navigation buttons */}
            <div className="flex items-center justify-between mt-4">
              <button
                type="button"
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                disabled={activeStep === 0}
                className={`border border-border rounded-md h-9 px-4 text-sm font-medium transition-all ${
                  activeStep === 0
                    ? "opacity-40 cursor-not-allowed bg-card/70 text-muted-foreground"
                    : "bg-card/70 text-foreground hover:bg-accent cursor-pointer"
                }`}
              >
                ← Previous
              </button>
              <div className="flex gap-1.5">
                {steps.map((_, index) => (
                  <button
                    type="button"
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`h-2 rounded-full transition-all cursor-pointer ${
                      activeStep === index ? "bg-foreground w-6" : "bg-border w-2 hover:bg-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                disabled={activeStep === steps.length - 1}
                className={`border border-border rounded-md h-9 px-4 text-sm font-medium transition-all ${
                  activeStep === steps.length - 1
                    ? "opacity-40 cursor-not-allowed bg-card/70 text-muted-foreground"
                    : "bg-primary text-primary-foreground hover:opacity-90 cursor-pointer border-transparent"
                }`}
              >
                Next →
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
