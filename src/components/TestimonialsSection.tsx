import { motion } from "motion/react";
import { Quote } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  quote: string;
  initials: string;
}

const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Sarah Wanjiru",
    role: "CEO",
    company: "Healthhub",
    quote:
      "Joining Nairobi Startup Club was a game-changer for my healthcare startup. The mentorship and connections I've made here have been invaluable.",
    initials: "SW",
  },
  {
    id: "2",
    name: "David Omondi",
    role: "Co-founder",
    company: "AgriConnect",
    quote:
      "The community support and networking opportunities at NSC helped us secure our first round of funding. Truly grateful for this ecosystem.",
    initials: "DO",
  },
  {
    id: "3",
    name: "Michael Otieno",
    role: "Founder",
    company: "Finserve",
    quote:
      "From attending workshops to pitching at demo days, NSC has been instrumental in scaling our fintech solution across East Africa.",
    initials: "MO",
  },
  {
    id: "4",
    name: "Amina Hassan",
    role: "Founder",
    company: "EduTech Kenya",
    quote:
      "The collaborative spirit at Nairobi Startup Club is unmatched. I've found co-founders, advisors, and lifelong friends through this community.",
    initials: "AH",
  },
];

function TestimonialCard({ testimonial, index }: { testimonial: Testimonial; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.2,
        ease: "easeOut",
      }}
      className="bg-[#1a1a1a] border-2 border-[#ff2ec4]/30 rounded-[40px] p-8 shadow-lg mb-6 flex items-start gap-6"
    >
      {/* Avatar */}
      <div className="flex-shrink-0 w-24 h-24 rounded-full bg-white flex items-center justify-center">
        <span className="text-[#0a0a0a] text-3xl font-bold">{testimonial.initials}</span>
      </div>

      {/* Content */}
      <div className="flex-1">
        <Quote className="w-8 h-8 text-[#00e0ff] mb-4" />
        <p className="text-[#a0a0a0] mb-4 italic">"{testimonial.quote}"</p>
        <div>
          <h4 className="text-xl text-[#f5f5f5]">{testimonial.name}</h4>
          <p className="text-[#a0a0a0]">
            {testimonial.role}, {testimonial.company}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function TestimonialsSection() {
  return (
    <section className="py-20 bg-[#0a0a0a] relative overflow-hidden" id="community">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 left-40 w-80 h-80 bg-[#ff2ec4] rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-40 w-96 h-96 bg-[#00e0ff] rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4 text-[#f5f5f5]">
            What our <span className="text-[#ff2ec4]">members</span> are saying
          </h2>
        </motion.div>

        {/* Scrolling testimonials container */}
        <div className="space-y-6">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
