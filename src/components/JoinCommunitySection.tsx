import { useState } from "react";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner";

export function JoinCommunitySection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for reaching out! We'll be in touch soon 😊");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-20 bg-[#0a0a0a]" id="contact">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl mb-4 text-[#f5f5f5]">
            Join Our <span className="text-[#ff2ec4]">Community</span>
          </h2>
          <p className="text-xl text-[#a0a0a0]">
            We'd love to hear from you! Drop us a message and explore what we're building together.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.3, delay: 0.05 }}
          onSubmit={handleSubmit}
          className="bg-[#1a1a1a] border-2 border-[#ff2ec4]/30 rounded-[30px] p-8 md:p-12 shadow-xl"
        >
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              <label htmlFor="name" className="block mb-2 text-[#f5f5f5]">
                Name
              </label>
              <Input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                className="w-full bg-[#0a0a0a] border-2 border-[#ff2ec4]/30 focus:border-[#00e0ff] text-[#f5f5f5] rounded-lg p-3 transition-colors"
                placeholder="Your full name"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              <label htmlFor="email" className="block mb-2 text-[#f5f5f5]">
                Email
              </label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
                className="w-full bg-[#0a0a0a] border-2 border-[#ff2ec4]/30 focus:border-[#00e0ff] text-[#f5f5f5] rounded-lg p-3 transition-colors"
                placeholder="your.email@example.com"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.05 }}
            >
              <label htmlFor="message" className="block mb-2 text-[#f5f5f5]">
                Message
              </label>
              <Textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
                rows={5}
                className="w-full bg-[#0a0a0a] border-2 border-[#ff2ec4]/30 focus:border-[#00e0ff] text-[#f5f5f5] rounded-lg p-3 transition-colors resize-none"
                placeholder="Tell us about yourself or your startup..."
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.15 }}
              className="flex justify-center"
            >
              <Button
                type="submit"
                className="bg-[#0a0a0a] hover:bg-[#ff2ec4] text-[#f5f5f5] border-2 border-[#ff2ec4] rounded-[21px] py-6 px-8 transition-all hover:scale-105"
              >
                Send Message
              </Button>
            </motion.div>
          </div>
        </motion.form>
      </div>
    </section>
  );
}