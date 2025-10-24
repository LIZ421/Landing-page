import { motion } from "motion/react";
import { Heart, Users, Target } from "lucide-react";

const coreValues = [
  {
    icon: Heart,
    title: "Integrity",
    description:
      "We uphold the highest standards of honesty and transparency in all our interactions. Trust is the foundation of our community.",
  },
  {
    icon: Users,
    title: "Community-First",
    description:
      "We prioritize the collective success of our members. By supporting each other, we create a thriving ecosystem for all.",
  },
  {
    icon: Target,
    title: "Purpose-Driven",
    description:
      "We're committed to creating meaningful impact. Every action we take is guided by our mission to empower entrepreneurs.",
  },
];

export function CoreValuesSection() {
  return (
    <section className="py-20 bg-[#0a0a0a]" id="core-values">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4 text-[#f5f5f5]">
            Our Core <span className="text-[#ff2ec4]">Values</span>
          </h2>
          <p className="text-xl text-[#a0a0a0] max-w-2xl mx-auto">
            The principles that guide everything we do at Nairobi Startup Club
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-[#1a1a1a] border-2 border-[#ff2ec4]/30 rounded-[30px] p-8 shadow-lg hover:shadow-2xl hover:border-[#00e0ff] transition-all"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#ff2ec4] to-[#00e0ff] rounded-2xl flex items-center justify-center mb-6">
                <value.icon className="w-8 h-8 text-[#0a0a0a]" />
              </div>
              <h3 className="text-2xl mb-4 text-[#ff2ec4]">{value.title}</h3>
              <p className="text-[#f5f5f5] leading-relaxed">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
