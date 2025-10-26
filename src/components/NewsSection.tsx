import { useState } from "react";
import { motion } from "motion/react";
import { Calendar, ArrowRight, ArrowLeft, Quote } from "lucide-react";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  summary: string;
  content: {
    paragraphs: string[];
    pullQuote?: string;
    keyTakeaways?: string[];
  };
}

const newsItems: NewsItem[] = [
  {
    id: "1",
    title: "Founders' Brunch",
    excerpt:
      "Founders co-created wireframes and refined logos for remote-ready visibility and brand clarity.",
    date: "July 20, 2025",
    category: "Community Events",
    image: "https://i.imgur.com/rgBCo0p.png",
    summary: "An immersive morning where Nairobi's boldest founders gathered to co-create, refine, and elevate their brand identities. From wireframe sketching to logo refinement, every session was designed to empower remote-ready visibility.",
    content: {
      paragraphs: [
        "The energy was electric as founders from across Nairobi converged for an intimate brunch session that went far beyond networking. This wasn't just about exchanging business cards—it was about building brands that could scale globally while staying rooted in authenticity.",
        "Throughout the morning, participants engaged in hands-on workshops led by brand strategists and design mentors. Each founder walked away with tangible deliverables: refined wireframes, polished logo concepts, and a clearer understanding of how to communicate their unique value proposition in the digital-first economy.",
        "The collaborative atmosphere fostered unexpected partnerships and sparked conversations that continued long after the last plate was cleared. Founders shared candid stories about their journeys, from early struggles to breakthrough moments, creating a safe space for vulnerability and growth.",
        "As the session wrapped up, the consensus was clear: this wasn't just an event—it was the beginning of a movement. A community of builders committed to elevating each other, one brand story at a time."
      ],
      pullQuote: "This wasn't just an event—it was the beginning of a movement committed to elevating each other.",
      keyTakeaways: [
        "Co-created wireframes and brand frameworks in real-time collaborative sessions",
        "Refined visual identities with guidance from seasoned brand strategists",
        "Built meaningful connections with fellow founders navigating similar challenges",
        "Developed actionable roadmaps for remote-ready brand visibility"
      ]
    }
  },
  {
    id: "2",
    title: "Minting Money Remotely",
    excerpt:
      "Workshop focused on brand messaging, testimonial integration, and conversion-ready digital assets.",
    date: "August 15, 2025",
    category: "Brand Strategy",
    image: "https://i.imgur.com/ioNS8Uo.png",
    summary: "A deep-dive workshop where founders learned to craft brand narratives that convert, integrate powerful testimonials, and build digital assets that work while they sleep.",
    content: {
      paragraphs: [
        "In today's remote-first world, your brand is your storefront. This intensive workshop brought together ambitious founders ready to transform their digital presence into a revenue-generating machine.",
        "Participants learned the art of storytelling that sells—how to weave customer testimonials into compelling narratives, design conversion-optimized landing pages, and create brand assets that resonate across time zones and cultures.",
        "The workshop wasn't just theory. Founders left with concrete deliverables: updated brand messaging frameworks, testimonial integration strategies, and a suite of digital assets ready for immediate deployment.",
        "By the end of the day, every participant had a clear roadmap for building a brand that works remotely—one that attracts clients, builds trust, and generates revenue without requiring their constant presence."
      ],
      pullQuote: "Your brand should work while you sleep, converting prospects into clients across every time zone.",
      keyTakeaways: [
        "Mastered brand storytelling techniques that drive conversions",
        "Learned strategic testimonial integration for maximum trust-building",
        "Created conversion-ready digital assets for remote selling",
        "Developed automated brand touchpoints for 24/7 visibility"
      ]
    }
  },
  {
    id: "3",
    title: "Featured in Nairobi Innovation Digest",
    excerpt:
      "Nairobi Startup Club spotlighted for empowering remote-first founders with scalable branding systems.",
    date: "September 5, 2025",
    category: "Media Recognition",
    image: "https://i.imgur.com/p7A5TkN.png",
    summary: "Nairobi Startup Club earned recognition from the Nairobi Innovation Digest for pioneering a new approach to founder support—one that prioritizes brand clarity and remote-ready systems over traditional startup advice.",
    content: {
      paragraphs: [
        "The Nairobi Innovation Digest, Kenya's leading voice on entrepreneurship and innovation, featured Nairobi Startup Club in their September edition, highlighting our unique approach to founder development.",
        "Unlike traditional startup accelerators that focus solely on pitch decks and funding, we're building a community that understands the modern reality: most founders need strong brands and remote-ready systems more than they need another pitch competition.",
        "The article spotlighted several success stories—founders who transformed their businesses by investing in brand clarity, digital presence, and scalable systems. These weren't overnight successes; they were strategic builders who understood that sustainable growth starts with a solid foundation.",
        "This recognition validates what we've known all along: the future of entrepreneurship is remote, brand-driven, and community-powered. And Nairobi is leading the way."
      ],
      pullQuote: "Nairobi Startup Club is redefining what founder support looks like in the remote-first era.",
      keyTakeaways: [
        "Recognition as a pioneer in remote-first founder development",
        "Featured case studies of founders who scaled through brand clarity",
        "Validation of community-driven approach to startup growth",
        "Positioned as Kenya's leading voice for modern entrepreneurship"
      ]
    }
  },
];

function NewsCard({ 
  item, 
  index, 
  onReadMore 
}: { 
  item: NewsItem; 
  index: number;
  onReadMore: (id: string) => void;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-[#1a1a1a] rounded-[30px] overflow-hidden shadow-lg hover:shadow-2xl transition-all border-2 border-[#ff2ec4]/30 hover:border-[#00e0ff]"
    >
      <div className="relative h-64 overflow-hidden">
        <ImageWithFallback
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-[#0a0a0a]/90 backdrop-blur-sm px-4 py-2 rounded-full border border-[#ff2ec4]">
          <span className="text-[#00e0ff]">{item.category}</span>
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center gap-2 text-[#a0a0a0] mb-3">
          <Calendar className="w-4 h-4" />
          <span>{item.date}</span>
        </div>
        <h3 className="text-xl mb-3 text-[#f5f5f5]">{item.title}</h3>
        <p className="text-[#a0a0a0] mb-4">{item.excerpt}</p>
        <Button 
          variant="ghost" 
          className="text-[#ff2ec4] hover:text-[#00e0ff] p-0 h-auto"
          onClick={() => onReadMore(item.id)}
        >
          Read more
          <ArrowRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </motion.article>
  );
}

function DetailView({ item, onGoBack }: { item: NewsItem; onGoBack: () => void }) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="py-20 bg-[#0a0a0a] relative overflow-hidden min-h-screen"
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 left-10 w-96 h-96 bg-[#ff2ec4] rounded-full blur-3xl" />
        <div className="absolute bottom-40 right-10 w-96 h-96 bg-[#00e0ff] rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 relative z-10">
        {/* Hero Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          {/* Category Badge */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-block mb-6"
          >
            <div className="bg-[#1a1a1a]/80 backdrop-blur-md px-6 py-3 rounded-full border-2 border-[#ff2ec4]">
              <span className="text-[#00e0ff] font-medium">{item.category}</span>
            </div>
          </motion.div>

          {/* Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-5xl md:text-6xl lg:text-7xl mb-6 text-[#f5f5f5] leading-tight"
          >
            {item.title}
          </motion.h1>

          {/* Date */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-3 text-[#a0a0a0] text-lg"
          >
            <Calendar className="w-5 h-5 text-[#ff2ec4]" />
            <span>{item.date}</span>
          </motion.div>
        </motion.div>

        {/* Summary Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-12 bg-[#1a1a1a]/60 backdrop-blur-lg rounded-[30px] p-8 border-2 border-[#00e0ff]/30"
        >
          <p className="text-xl text-[#f5f5f5] leading-relaxed">
            {item.summary}
          </p>
        </motion.div>

        {/* Full Content Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="space-y-8 mb-12"
        >
          {/* Paragraphs */}
          {item.content.paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
              className="text-lg text-[#d0d0d0] leading-relaxed"
            >
              {paragraph}
            </motion.p>
          ))}

          {/* Pull Quote */}
          {item.content.pullQuote && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="my-12 relative"
            >
              <div className="bg-gradient-to-br from-[#ff2ec4]/10 to-[#00e0ff]/10 backdrop-blur-md rounded-[30px] p-8 border-2 border-[#ff2ec4]/40">
                <Quote className="w-12 h-12 text-[#ff2ec4] mb-4 opacity-60" />
                <blockquote className="text-2xl md:text-3xl text-[#f5f5f5] font-light italic leading-relaxed">
                  {item.content.pullQuote}
                </blockquote>
              </div>
            </motion.div>
          )}

          {/* Key Takeaways */}
          {item.content.keyTakeaways && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="bg-[#1a1a1a]/60 backdrop-blur-lg rounded-[30px] p-8 border-2 border-[#00e0ff]/30"
            >
              <h3 className="text-2xl text-[#f5f5f5] mb-6 font-semibold">
                Key <span className="text-[#ff2ec4]">Takeaways</span>
              </h3>
              <ul className="space-y-4">
                {item.content.keyTakeaways.map((takeaway, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 1.5 + index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-2 h-2 rounded-full bg-[#00e0ff] mt-2 flex-shrink-0" />
                    <span className="text-lg text-[#d0d0d0] leading-relaxed">{takeaway}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          )}
        </motion.div>

        {/* Go Back CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          className="flex justify-center pt-8"
        >
          <Button
            onClick={onGoBack}
            size="lg"
            className="bg-[#0a0a0a] hover:bg-[#ff2ec4] text-[#00e0ff] hover:text-[#f5f5f5] border-2 border-[#00e0ff] hover:border-[#ff2ec4] px-8 py-6 rounded-[21px] shadow-lg hover:shadow-xl transition-all hover:scale-105 text-lg group"
          >
            <ArrowLeft className="w-5 h-5 mr-2 transition-transform group-hover:-translate-x-1" />
            Go Back
          </Button>
        </motion.div>
      </div>
    </motion.section>
  );
}

export function NewsSection() {
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  // Find the selected item
  const selectedItem = newsItems.find(item => item.id === selectedItemId);

  // Show detail view if an item is selected
  if (selectedItem) {
    return <DetailView item={selectedItem} onGoBack={() => setSelectedItemId(null)} />;
  }

  // Show grid view
  return (
    <section className="py-20 bg-[#0a0a0a] relative overflow-hidden" id="news">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-[#ff2ec4] rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-[#00e0ff] rounded-full blur-3xl" />
      </div>
      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl mb-4 text-[#f5f5f5]">
            Latest <span className="text-[#ff2ec4]">News</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsItems.map((item, index) => (
            <NewsCard 
              key={item.id} 
              item={item} 
              index={index}
              onReadMore={setSelectedItemId}
            />
          ))}
        </div>
      </div>
    </section>
  );
}