import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

const exploreItems = [
  { label: "About Us", href: "#about" },
  { label: "News", href: "#news" },
  { label: "Community", href: "#core-values" },
  { label: "Contact", href: "#footer" },
];

export function Navigation({ onLoginClick }: { onLoginClick: () => void }) {
  const [isExploreOpen, setIsExploreOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsExploreOpen(false);
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-sm shadow-sm border-b border-[#ff2ec4]/20"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Negative Space Cutout Logo */}
          <motion.div
            className="flex items-center gap-3 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="relative w-14 h-14">
              {/* Pink glow background */}
              <div className="absolute inset-0 rounded-full bg-[#ff2ec4] blur-md opacity-60"></div>
              
              {/* Solid black circle with cutout text */}
              <div className="relative w-14 h-14 rounded-full bg-[#0a0a0a] shadow-lg flex items-center justify-center overflow-hidden">
                <svg width="56" height="56" viewBox="0 0 56 56" className="absolute inset-0">
                  <defs>
                    <mask id="logo-mask">
                      <rect width="56" height="56" fill="white"/>
                      <text
                        x="28"
                        y="38"
                        textAnchor="middle"
                        fill="black"
                        style={{
                          fontFamily: "'Arial Black', 'Helvetica', sans-serif",
                          fontSize: "22px",
                          fontWeight: "900",
                          letterSpacing: "-1px"
                        }}
                      >
                        NSC
                      </text>
                    </mask>
                    
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  {/* Pink glow behind cutout */}
                  <circle cx="28" cy="28" r="28" fill="#ff2ec4" opacity="0.8" filter="url(#glow)"/>
                  
                  {/* Black circle with text cutout */}
                  <circle cx="28" cy="28" r="28" fill="#0a0a0a" mask="url(#logo-mask)"/>
                </svg>
              </div>
            </div>
            <span className="text-2xl text-[#f5f5f5] hidden sm:inline">Nairobi Startup Club</span>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <div className="relative">
              <Button
                variant="ghost"
                className="relative group flex items-center gap-1 text-[#f5f5f5] hover:text-[#ff2ec4]"
                onClick={() => setIsExploreOpen(!isExploreOpen)}
                onMouseEnter={() => setIsExploreOpen(true)}
              >
                <span>Explore</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isExploreOpen ? "rotate-180" : ""}`} />
                <motion.div
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#ff2ec4]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </Button>

              <AnimatePresence>
                {isExploreOpen && (
                  <motion.div
                    className="absolute top-full mt-2 left-0 bg-[#1a1a1a] border border-[#ff2ec4]/30 rounded-2xl shadow-2xl p-2 min-w-[200px] z-50"
                    initial={{ opacity: 0, y: -10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    onMouseLeave={() => setIsExploreOpen(false)}
                  >
                    {exploreItems.map((item, index) => (
                      <motion.button
                        key={item.href}
                        onClick={() => scrollToSection(item.href)}
                        className="block w-full text-left px-4 py-3 hover:bg-[#ff2ec4]/20 rounded-lg transition-colors text-[#f5f5f5]"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        whileHover={{ x: 5 }}
                      >
                        {item.label}
                      </motion.button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Members Login Button */}
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={onLoginClick}
                className="bg-[#0a0a0a] hover:bg-[#ff2ec4] text-[#f5f5f5] border-2 border-[#ff2ec4] rounded-full px-6 shadow-md"
              >
                Members Login
              </Button>
            </motion.div>
          </div>

          {/* Mobile Members Login */}
          <div className="md:hidden">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                onClick={onLoginClick}
                className="bg-[#0a0a0a] hover:bg-[#ff2ec4] text-[#f5f5f5] border-2 border-[#ff2ec4] rounded-full px-4 shadow-md text-sm"
              >
                Login
              </Button>
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-[#ff2ec4]/20 transition-colors text-[#f5f5f5]"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-[#1a1a1a] border-t border-[#ff2ec4]/30"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-4 py-4 space-y-2">
              {exploreItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left px-4 py-3 hover:bg-[#ff2ec4]/20 rounded-lg transition-colors text-[#f5f5f5]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  {item.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}