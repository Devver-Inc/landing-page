import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";

export default function FloatingNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  const navbarBackground = useTransform(scrollY, [0, 100], ["rgba(15, 23, 42, 0)", "rgba(15, 23, 42, 0.95)"]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Integrations", href: "#integrations" },
    { label: "Pricing", href: "#pricing" },
    { label: "Docs", href: "#docs" },
  ];

  return (
    <>
      <motion.nav className="fixed top-0 left-0 right-0 z-50" initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }}>
        <div className="mx-auto max-w-7xl px-4 py-4">
          <motion.div
            style={{
              backgroundColor: navbarBackground,
            }}
            className={`rounded-2xl border transition-all duration-300 ${isScrolled ? "border-white/20 shadow-2xl shadow-indigo-500/10" : "border-white/10"}`}
          >
            <div className="flex items-center justify-between px-6 py-4">
              {/* Logo */}
              <motion.a href="#" className="flex items-center gap-3 group" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <div className="relative">
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl opacity-20 group-hover:opacity-40 transition-opacity"
                    style={{ filter: "blur(8px)" }}
                  ></div>
                  <img src="/favicon.png" alt="Devver Logo" className="relative h-10 w-10 rounded-xl" />
                </div>
                <div>
                  <span className="text-xl font-bold text-white">Devver</span>
                  <span className="ml-2 text-xs px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded-full border border-emerald-500/30">Beta</span>
                </div>
              </motion.a>

              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-1">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/10 transition-all"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="hidden md:flex items-center gap-3">
                <motion.a
                  href="#login"
                  className="px-4 py-2 text-sm font-semibold text-white rounded-lg hover:bg-white/10 transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Sign In
                </motion.a>
                <motion.a
                  href="#waitlist"
                  className="group relative px-5 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold rounded-lg overflow-hidden shadow-lg shadow-indigo-500/50"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Start Free
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              </div>

              {/* Mobile Menu Button */}
              <button className="md:hidden p-2 text-white hover:bg-white/10 rounded-lg transition-colors" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  {isMobileMenuOpen ? (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  ) : (
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  )}
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          height: isMobileMenuOpen ? "auto" : 0,
        }}
        className="fixed top-24 left-0 right-0 z-40 md:hidden overflow-hidden"
      >
        <div className="mx-4 bg-slate-900/98 rounded-2xl border border-white/20 shadow-2xl">
          <div className="p-4 space-y-2">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block px-4 py-3 text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="pt-4 border-t border-white/10 space-y-2">
              <a
                href="#login"
                className="block px-4 py-3 text-sm font-semibold text-white text-center rounded-lg hover:bg-white/10 transition-all"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Sign In
              </a>
              <a
                href="#waitlist"
                className="block px-4 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-semibold text-center rounded-lg shadow-lg shadow-indigo-500/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start Free
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
