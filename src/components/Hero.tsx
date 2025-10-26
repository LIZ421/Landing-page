import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0a]">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            "linear-gradient(45deg, #ff2ec4, #00e0ff)",
            "linear-gradient(90deg, #00e0ff, #ff2ec4)",
            "linear-gradient(135deg, #ff2ec4, #00e0ff)",
            "linear-gradient(45deg, #ff2ec4, #00e0ff)",
          ],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      {/* COMMUNITY IMAGE */}
      <motion.div
         className="absolute top-[100px] md:top-[85px] left-0 right-0 w-full z-10"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.05 }}
      
      >
        <img 
          src="https://imgur.com/jP8n5bj.png" 
          alt="Our Community" 
          className="w-full h-auto object-cover max-h-[400px]"
        />
      </motion.div>
      {/* Hero content */}
      <motion.div
        className="relative z-10 text-center px-4 max-w-4xl mt-[500px] md:mt-[520px]"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.h1
           className="text-6xl md:text-7xl mb-6 text-[#f5f5f5]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Transforming ideas. Building Futures.
        </motion.h1>
        <motion.p
          className="text-5xl md:text-6xl mb-12 text-[#f5f5f5]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
        >
          The future is <span className="text-[#ff2ec4]">NOW</span>.
        </motion.p>
      </motion.div>
    </section>
  );
}