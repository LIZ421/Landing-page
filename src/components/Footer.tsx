import { motion } from "motion/react";
import { Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { FaTiktok } from "react-icons/fa"; 

const quickLinks = [
  { label: "About us", href: "#about" },
  { label: "Events", href: "#events" },
  { label: "Latest news", href: "#news" },
  { label: "Community", href: "#community" },
];

const socialLinks = [
  { icon: Twitter, href: "https://twitter.com/nairobistartup", label: "Twitter" },
  { icon: Instagram, href: "https://www.instagram.com/nairobi_startup_club/tagged/", label: "Instagram" },
  { icon: Linkedin, href: "https://ke.linkedin.com/company/nairobi-startup-club", label: "LinkedIn" },
  { icon: FaTiktok, href: "https://www.tiktok.com/@minting_money_online", label: "TikTok" }, 
];

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-[#ff2ec4]/30 text-[#f5f5f5] py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl text-[#ff2ec4] mb-4">Nairobi Startup Club</h3>
            <p className="text-[#a0a0a0] mb-4">
              Building the future of entrepreneurship in East Africa, one startup at a time.
            </p>
            <div className="space-y-2 text-[#a0a0a0]">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#00e0ff]" />
                <span>Nairobi, Kenya</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#00e0ff]" />
                <span>nairobistartupclub@gmail.com</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#00e0ff]" />
                <span>+254 799 482 833</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-2xl mb-6 text-[#ff2ec4]">Quick links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[#a0a0a0] hover:text-[#00e0ff] transition-colors inline-block hover:translate-x-1"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl mb-6 text-[#ff2ec4]">Connect with us</h3>
            <div className="flex gap-4 flex-wrap">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-[#1a1a1a] border-2 border-[#ff2ec4]/30 rounded-full flex items-center justify-center hover:bg-gradient-to-br hover:from-[#ff2ec4] hover:to-[#00e0ff] hover:border-transparent transition-all"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-[#ff2ec4]/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#a0a0a0] text-center">
              © 2025 Nairobi Startup Club. All rights reserved.
            </p>
            <div className="flex gap-6 text-[#a0a0a0]">
              <a href="#" className="hover:text-[#00e0ff] transition-colors">
                Privacy policy
              </a>
              <a href="#" className="hover:text-[#00e0ff] transition-colors">
                Terms of service
              </a>
            </div>
          </div>
          <p className="text-[#ff2ec4] text-center mt-6">Made with ❤️ in Nairobi</p>
        </div>
      </div>
    </footer>
  );
}
