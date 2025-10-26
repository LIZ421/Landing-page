import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Calendar } from "lucide-react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [statusMessage, setStatusMessage] = useState<string>("");

  useEffect(() => {
    const eventStart = new Date("2025-11-30T11:00:00+03:00");
    const eventEnd = new Date("2025-11-30T16:00:00+03:00");

    const timer = setInterval(() => {
      const now = new Date();

      if (now < eventStart) {
        const distance = eventStart.getTime() - now.getTime();
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
        setStatusMessage("Starts in");
      } else if (now >= eventStart && now <= eventEnd) {
        setStatusMessage("Happening now");
      } else {
        setStatusMessage("Event ended");
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative rounded-[30px] p-8 shadow-xl mb-20 overflow-hidden text-black"
    >
      {/* Gradient background with radial overlay */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0077ff] to-[#00bfa6] before:absolute before:inset-0 before:bg-gradient-radial before:from-[#ff2ec4]/30 before:to-transparent before:z-0" />

      {/* Content */}
      <div className="relative z-10">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Calendar className="w-8 h-8 text-black" />
          <h3 className="text-3xl font-semibold text-black">The Arts Festival</h3>
        </div>

        {statusMessage === "Happening now" ? (
          <motion.div
            className="text-center text-4xl font-bold text-[#ff2ec4] mt-4"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
          >
            🔴 Happening now
          </motion.div>
        ) : statusMessage === "Event ended" ? (
          <div className="text-center text-2xl font-semibold text-gray-800 mt-4">
            🎉 Thanks for joining us!
          </div>
        ) : (
          <>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <motion.div
                  key={unit}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                >
                  <motion.div
                    key={value}
                    initial={{ scale: 1.2, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-4xl md:text-6xl mb-2 font-bold text-black"
                  >
                    {value.toString().padStart(2, "0")}
                  </motion.div>
                  <div className="text-sm md:text-base uppercase text-gray-700">
                    {unit}
                  </div>
                </motion.div>
              ))}
            </div>
            <p className="text-center mt-6 text-lg text-black">{statusMessage}</p>
          </>
        )}
      </div>
    </motion.div>
  );
}
