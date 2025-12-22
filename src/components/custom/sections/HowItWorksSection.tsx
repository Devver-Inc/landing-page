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
    color: "from-blue-500 to-cyan-500",
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
    color: "from-purple-500 to-pink-500",
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
    color: "from-emerald-500 to-teal-500",
  },
];

export default function HowItWorksSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section id="how-it-works" className="relative py-20 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-grid-slate-800 opacity-20"></div>

      <motion.div
        className="absolute top-20 right-20 w-72 h-72 bg-indigo-600/10 rounded-full opacity-20"
        style={{ filter: "blur(20px)" }}
        animate={{
          scale: [1, 1.05, 1],
          opacity: [0.15, 0.2, 0.15],
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
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-slate-800/80 border border-slate-700"
          >
            <span className="text-2xl">⚡</span>
            <span className="text-sm font-semibold text-white">Simple Process</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Deploy in <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">3 Easy Steps</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-slate-400 max-w-3xl mx-auto"
          >
            From code to production-ready preview in less than a minute
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Steps Navigation */}
          <div className="space-y-6">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveStep(index)}
                className={`relative cursor-pointer group transition-all duration-300 ${activeStep === index ? "scale-105" : "hover:scale-102"}`}
              >
                {/* Connection line */}
                {index < steps.length - 1 && <div className="absolute left-8 top-20 w-0.5 h-16 bg-gradient-to-b from-slate-600 to-transparent"></div>}

                {/* Card */}
                <div
                  className={`relative rounded-2xl border-2 p-6 transition-all duration-300 ${
                    activeStep === index
                      ? "bg-slate-800 border-indigo-500 shadow-2xl shadow-indigo-500/20"
                      : "bg-slate-900/50 border-slate-700 hover:border-slate-600 hover:shadow-lg"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    {/* Step number icon */}
                    <div
                      className={`flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-2xl shadow-lg transition-transform duration-300 ${
                        activeStep === index ? "scale-110" : "group-hover:scale-105"
                      }`}
                    >
                      {step.icon}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className={`text-sm font-bold bg-gradient-to-r ${step.color} bg-clip-text text-transparent`}>{step.number}</span>
                        <h3 className="text-xl font-bold text-white">{step.title}</h3>
                      </div>
                      <p className="text-slate-400 leading-relaxed">{step.description}</p>
                    </div>

                    {/* Active indicator */}
                    {activeStep === index && (
                      <motion.div layoutId="activeIndicator" className="absolute right-4 top-1/2 -translate-y-1/2">
                        <div className="w-3 h-3 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 animate-pulse"></div>
                      </motion.div>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Code Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="sticky top-32 z-10"
          >
            <div className="relative group">
              {/* Glow effect - optimized for Safari */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${steps[activeStep].color} rounded-3xl opacity-20 group-hover:opacity-30 transition duration-500 pointer-events-none`}
                style={{ filter: "blur(12px)" }}
              ></div>

              {/* Terminal */}
              <div className="relative bg-slate-900 rounded-3xl border border-slate-700 shadow-2xl overflow-hidden z-10">
                {/* Terminal header */}
                <div className="flex items-center gap-2 px-6 py-4 bg-slate-800 border-b border-slate-700">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-sm text-slate-400 font-mono">Step {steps[activeStep].number} - Terminal</span>
                  </div>
                  <div className="flex gap-2">
                    <div className={`px-3 py-1 rounded-full bg-gradient-to-r ${steps[activeStep].color} text-white text-xs font-semibold`}>Active</div>
                  </div>
                </div>

                {/* Terminal content */}
                <div className="p-8 font-mono text-sm min-h-[300px]">
                  <motion.div key={activeStep} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                    <pre className="text-slate-300 whitespace-pre-wrap leading-relaxed">{steps[activeStep].code}</pre>

                    {/* Success indicator */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.4 }}
                      className="mt-6 flex items-center gap-2 text-emerald-400"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>Step completed successfully</span>
                    </motion.div>
                  </motion.div>
                </div>

                {/* Progress bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-800 pointer-events-none">
                  <motion.div
                    className={`h-full bg-gradient-to-r ${steps[activeStep].color}`}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                  />
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex items-center justify-between mt-6 relative z-20">
                <button
                  type="button"
                  onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                  disabled={activeStep === 0}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all relative z-30 ${
                    activeStep === 0
                      ? "bg-slate-800 text-slate-600 cursor-not-allowed border border-slate-700"
                      : "bg-slate-800 text-white hover:bg-slate-700 border border-slate-600 cursor-pointer"
                  }`}
                >
                  ← Previous
                </button>
                <div className="flex gap-2 relative z-30">
                  {steps.map((_, index) => (
                    <button
                      type="button"
                      key={index}
                      onClick={() => setActiveStep(index)}
                      className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                        activeStep === index ? "bg-gradient-to-r from-indigo-500 to-purple-500 w-8" : "bg-slate-600 hover:bg-slate-500"
                      }`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={() => setActiveStep(Math.min(steps.length - 1, activeStep + 1))}
                  disabled={activeStep === steps.length - 1}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all relative z-30 ${
                    activeStep === steps.length - 1
                      ? "bg-slate-800 text-slate-600 cursor-not-allowed border border-slate-700"
                      : "bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:shadow-indigo-500/50 cursor-pointer"
                  }`}
                >
                  Next →
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
