import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Calendar, MapPin, ArrowLeft, Lightbulb, Sparkles, X } from "lucide-react";
import { Button } from "./ui/button";

interface Event {
  id: string;
  title: string;
  category: string;
  date: string;
  location: string;
  image: string;
  isPast?: boolean;
}

interface EventDetail {
  id: string;
  title: string;
  tagline: string;
  date: string;
  location: string;
  highlights: string[];
  learnings: string[];
  photos: string[];
  mainImage: string;
}
interface EventCategory {
  id: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  learnings: string[];
  mainImage: string;
}

const upcomingEvents: Event[] = [
  {
    id: "1",
    title: "The Arts festival",
    category: "Fundraiser",
    date: "Nov 30, 2025",
    location: "Kahoffee",
    image: "https://i.imgur.com/vfCXwvS.png",
  },
  {
    id: "2",
    title: "Startup Grind Nairobi",
    category: "Workshop",
    date: "Nov 22, 2025",
    location: "KICC",
    image: "https://i.imgur.com/FnmxKf8.png",
  },
  {
    id: "3",
    title: " Workshop",
    category: "Education",
    date: "Dec 5, 2025",
    location: "Nairobi Garage",
    image: "https://i.imgur.com/cjCMFgJ.png",
  },
];

const pastEvents: Event[] = [
  {
    id: "4",
    title: "Nairobi Startup Club Hackathon 2025",
    category: "Hackathon",
    date: "Sep 30, 2025",
    location: "Nairobi Innovation Hub",
    image: "https://i.imgur.com/Qr60yZG.png",
    isPast: true,
  },
  {
    id: "5",
    title: "Coworking session",
    category: "Coworking",
    date: "Aug 6, 2025",
    location: "Kesh Kesh Coffee Roasters & Cafe",
    image: "https://i.imgur.com/GCmO36W.png",
    isPast: true,
  },
  {
    id: "6",
    title: "Coffee Session",
    category: "Networking",
    date: "Aug 30, 2025",
    location: "Kesh Kesh Coffee Roasters & Cafe",
    image: "https://i.imgur.com/9fyhkbq.png",
    isPast: true,
  },
  {
    id: "7",
    title: "Coworking Session",
    category: "Coworking",
    date: "Oct 15, 2025",
    location: "Kahoffee",
    image: "https://i.imgur.com/9fyhkbq.png",
    isPast: true,
  },
];

const eventDetails: { [key: string]: EventDetail } = {
  "4": {
    id: "4",
    title: "Nairobi Startup Club Hackathon 2025",
    tagline: "Hackathon 2025 was electric.",
    date: "Sep 30, 2025",
    location: "Nairobi Innovation Hub",
    highlights: [
      "Mentorship from Nairobi tech leaders",
      "Winning team built a modular invoicing tool",
      "Lightning talks from OnGroundKe and NSC alumni"
    ],
    learnings: [
      "Remote-first tools need better onboarding for African freelancers.",
      "Collaborative prototyping accelerates clarity and founder confidence."
    ],
    photos: [
      "https://i.imgur.com/cboc5bt.png",
      "https://i.imgur.com/yTQFEGb.png",
      "https://i.imgur.com/ajnzauE.png",
      "https://i.imgur.com/ceXcTqH.png",
      "https://i.imgur.com/7pwbdxb.png",
      "https://i.imgur.com/lxtk0hO.png",
      "https://i.imgur.com/ukPhCR5.png",
      "https://i.imgur.com/HSHYiR7.png",
      "https://i.imgur.com/bPyb0NN.png",
      "https://i.imgur.com/dtaJs4n.png",
      "https://i.imgur.com/QQeMXtW.png",
      "https://i.imgur.com/DTTGmgM.png",
      "https://i.imgur.com/6lagmkS.png",
      "https://i.imgur.com/UHnNRcJ.png",
      "https://i.imgur.com/7RPTqoW.png",
      "https://i.imgur.com/wcznZMH.png",
      "https://i.imgur.com/urBpVzL.png"
    ],
    mainImage: "https://i.imgur.com/Qr60yZG.png"
  },
  "5": {
    id: "5",
    title: "Coworking Session",
    tagline: "Midweek clarity, coffee, and founder feedback all in one table.",
    date: "Aug 6, 2025",
    location: "Kesh Kesh Coffee Roasters & Cafe",
    highlights: [
      "Branding and testimonial layout feedback",
      "Breakout tables for homepage copy",
      "Surprise investor drop-in",
      "Curated ambient playlist"
    ],
    learnings: [
      "Casual coworking fosters spontaneous collaboration.",
      "Light feedback loops help refine brand clarity."
    ],
    photos: [
      "https://i.imgur.com/xv1uWRa.png",
      "https://i.imgur.com/bD2yKXj.png",
      "https://i.imgur.com/SehfdtS.png",
      "https://i.imgur.com/R1l4WkO.png"
    ],
    mainImage: "https://i.imgur.com/GCmO36W.png"
  },
  "6": {
    id: "6",
    title: "Coffee Session",
    tagline: "Coffee, clarity, and community",
    date: "Aug 30, 2025",
    location: "Kesh Kesh Coffee Roasters & Cafe",
    highlights: [
      "Icebreaker: \"What's one thing you've shipped this month?\"",
      "Updates on remote clients and launches",
      "Live testimonial recording booth",
      "Community shoutouts and teasers"
    ],
    learnings: [
      "Founders thrive in low-pressure, high-trust environments.",
      "Sharing wins builds momentum and credibility."
    ],
    photos: [
      "https://i.imgur.com/LG1ayl7.png",
      "https://i.imgur.com/Qet9tSW.png",
      "https://i.imgur.com/Bp9sXNk.png"
    ],
    mainImage: "https://i.imgur.com/9fyhkbq.png"
  },
  "7": {
    id: "7",
    title: "Coworking session",
    tagline: "Connection and collaboration",
    date: "Oct 15, 2025",
    location: "Kahoffee",
    highlights: [
      "Project sharing",
      "Skills mapping",
      "Live feedback"
    ],
    learnings: [
      "Sharing your skills and current challenges opens doors to collaboration.",
      "Sharing ideas live helps clarify direction and speed up iteration."
    ],
    photos: [
      "https://i.imgur.com/pe41kjV.png",
      "https://i.imgur.com/lL1lUrY.png",
      "https://i.imgur.com/Ao25Cyf.png"
    ],
    mainImage: "https://i.imgur.com/9fyhkbq.png"
  }
};

const eventCategories: EventCategory[] = [
  {
    id: "coworking",
    title: "Coworking Sessions",
    tagline: "Build, brainstorm together.",
    description: "Nairobi Startup Club's coworking sessions are high-energy, low-pressure spaces where founders, creatives, and coders plug in and power up. Whether you're debugging code, refining pitch decks, or sketching wireframes, this is where momentum multiplies.",
    highlights: [
      "Open desks, fast WiFi, and ambient music",
      "Real-time feedback from peers",
      "Mini breakout chats on design, dev, and strategy",
      "Optional lightning talks or demos"
    ],
    learnings: [
      "Coworking spaces amplify productivity through peer energy and accountability.",
      "Spontaneous collaboration often leads to breakthrough ideas and solutions."
    ],
    mainImage: "https://imgur.com/Fws6YH3.png"
  },
  {
    id: "coffeesessions",
    title: "Coffee Sessions",
    tagline: "Caffeine, clarity, and founder feels.",
    description: "These intimate morning meetups fuel connection over coffee and conversation. Founders share wins, challenges, and wild ideas in a cozy, judgment-free zone.",
    highlights: [
      "Guided prompts or open discussion themes",
      "Espresso-fueled storytelling and networking",
      "Occasional guest mentors or surprise giveaways",
      "Great for onboarding new members"
    ],
    learnings: [
      "Low-pressure networking creates authentic connections and lasting partnerships.",
      "Sharing challenges openly helps founders feel less isolated in their journey."
    ],
    mainImage: "https://imgur.com/zZV85MK.png"
  },
  {
    id: "hackathons",
    title: "Hackathons",
    tagline: "Code. Create. Compete. Connect.",
    description: "Our hackathons are fast-paced sprints where teams build real solutions in record time. Whether it's an MVP or a community app, the goal is impact and fun.",
    highlights: [
      "6–48 hour build cycles",
      "Team formation and idea pitching",
      "Mentorship checkpoints and code reviews",
      "Final demos, judging, and prizes"
    ],
    learnings: [
      "Time constraints force clarity and push founders to ship MVP-quality products quickly.",
      "Collaborative building accelerates learning and validates ideas through rapid iteration."
    ],
    mainImage: "https://imgur.com/S2f92Fo.png"
  },
  {
    id: "shamelessplugs",
    title: "Shameless Plugs",
    tagline: "Pitch it loud. Plug it proud.",
    description: "A no-fluff, high-energy showcase where founders pitch their startups, products, or side hustles. Think open mic meets demo day.",
    highlights: [
      "2-minute rapid-fire pitches",
      "Live feedback and shoutouts",
      
      "Great for testing messaging and building traction"
    ],
    learnings: [
      "Practicing pitches in public builds confidence and refines messaging.",
      "Direct audience feedback reveals what resonates and what needs work."
    ],
    mainImage: "https://imgur.com/gmnQuqJ.png"
  },
  {
    id: "sofarsounds",
    title: "Sofar Sounds",
    tagline: "Where artists drop beats and stories.",
    description: "A creative fusion of music, spoken word, and founder storytelling. Sofar Sounds is where Nairobi's startup soul meets sonic expression.",
    highlights: [
      "Live performances by founders or local artists",
      "Storytelling segments on startup journeys",
      "Chill vibes, ambient lighting, and community bonding",
      "Sometimes paired with fundraising or themed nights"
    ],
    learnings: [
      "Creative expression helps founders process their journey and connect emotionally.",
      "Blending art and entrepreneurship strengthens community identity and culture."
    ],
    mainImage: "https://imgur.com/BZTnKb9.png"
  },
  {
    id: "foundersbrunch",
    title: "Founder's Brunch",
    tagline: "Big ideas over brunch bites.",
    description: "A curated, invite-only brunch for founders, mentors, and ecosystem builders. It's where strategy meets heavenly snacks. ",
    highlights: [
      "Roundtable discussions and themed prompts",
      "Guest speakers or fireside chats",
      "Gourmet brunch and bottomless mimosas (or juice!)",
      "Great for deep dives and strategic networking"
    ],
    learnings: [
      "Intimate, curated gatherings enable deeper strategic conversations.",
      "Quality over quantity in networking leads to more meaningful partnerships."
    ],
    mainImage: "https://imgur.com/8tIJPvA.png"
  }
];

function EventCard({ event, index, onViewDetails }: { event: Event; index: number; onViewDetails?: (eventId: string) => void }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      whileHover={{
        y: -10,
        rotateX: isHovered ? 5 : 0,
        rotateY: isHovered ? 5 : 0,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="bg-[#1a1a1a] border-2 border-[#ff2ec4]/30 rounded-[30px] shadow-lg hover:shadow-2xl hover:border-[#00e0ff] transition-all overflow-hidden"
      style={{ transformStyle: "preserve-3d" }}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={event.image}
          alt={event.title}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.src = "https://i.imgur.com/gmnQuqJ.png";
          }}
        />
        <div className="absolute top-4 left-4 bg-[#0a0a0a]/90 border border-[#00e0ff] text-[#00e0ff] px-4 py-2 rounded-full text-sm">
          {event.category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl mb-3 text-[#f5f5f5]">{event.title}</h3>
        <div className="space-y-2 text-[#00e0ff] mb-4">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            <span className="text-sm">{event.date}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">{event.location}</span>
          </div>
        </div>
        {!event.isPast && (
          <Button className="w-full bg-[#0a0a0a] hover:bg-[#ff2ec4] text-[#f5f5f5] border-2 border-[#ff2ec4] rounded-full">
            Register Now
          </Button>
        )}
        {event.isPast && onViewDetails && (
          <Button
            variant="outline"
            className="w-full border-2 border-[#00e0ff] text-[#00e0ff] hover:bg-[#00e0ff] hover:text-[#0a0a0a] rounded-full"
            onClick={() => onViewDetails(event.id)}
          >
            View Details
          </Button>
        )}
      </div>
    </motion.div>
  );
}

function EventDetailsView({ eventId, onClose }: { eventId: string; onClose: () => void }) {
  const event = eventDetails[eventId];
  const category = eventCategories.find((cat) => cat.id === eventId);

  // handle both event & category modal types
  const isCategory = !!category && !event;

  if (!event && !category) return null;

  const data = isCategory ? category : event;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 z-50 overflow-y-auto backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        className="min-h-screen py-8 px-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-w-5xl mx-auto bg-[#1a1a1a] border-2 border-[#ff2ec4] rounded-[40px] overflow-hidden shadow-2xl relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-6 right-6 z-50 bg-[#0a0a0a]/90 border border-[#ff2ec4] backdrop-blur-sm rounded-full p-3 hover:bg-[#ff2ec4] transition-all shadow-lg"
          >
            <X className="w-6 h-6 text-[#f5f5f5]" />
          </button>

          {/* Hero Section */}
          <div className="relative h-[400px] overflow-hidden">
            <img
              src={data.mainImage}
              alt={data.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 text-white">
              <motion.h1
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                className="text-4xl md:text-5xl mb-3"
              >
                {data.title}
              </motion.h1>
              <motion.p className="text-lg md:text-xl text-gray-200 italic mb-4">
                "{data.tagline}"
              </motion.p>
              {!isCategory && (
                <>
                  <p className="text-[#00e0ff] text-lg font-semibold mb-4">
                    {event?.date} • {event?.location}
                  </p>
                  <p className="text-[#00e0ff] text-base mb-4">
                    Category: {pastEvents.find(e => e.id === eventId)?.category}
                  </p>
                </>
              )}
            </div>
          </div>

          {/* Body Content */}
          <div className="p-8 text-[#a0a0a0] space-y-6">
            {data.description && <p>{data.description}</p>}
            
            <div>
              <h3 className="text-[#ff2ec4] text-xl mb-2">Highlights</h3>
              <ul className="list-disc pl-6 space-y-1">
                {data.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h3 className="text-[#ff2ec4] text-xl mb-2">Learnings</h3>
              <ul className="list-disc pl-6 space-y-1">
                {data.learnings.map((l, i) => (
                  <li key={i}>{l}</li>
                ))}
              </ul>
            </div>

            {/* Photo Gallery - NEW SECTION */}
            {!isCategory && event?.photos && event.photos.length > 0 && (
              <div>
                <h3 className="text-[#ff2ec4] text-xl mb-4">Event Photos</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {event.photos.map((photo, i) => (
                    <img 
                      key={i} 
                      src={photo} 
                      alt={`Event photo ${i + 1}`} 
                      className="rounded-lg w-full h-40 object-cover hover:scale-105 transition-transform cursor-pointer"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function EventsSection() {
  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);

  return (
    <>
      <section className="py-20 bg-[#0a0a0a] relative overflow-hidden" id="events">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          {/* Upcoming Events */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-5xl text-center mb-12 text-[#f5f5f5]">
              Upcoming <span className="text-[#ff2ec4]">Events</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {upcomingEvents.map((event, index) => (
                <EventCard key={event.id} event={event} index={index} />
              ))}
            </div>
          </motion.div>

          {/* Past Events */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <h2 className="text-5xl text-center mb-12 text-[#f5f5f5]">
              Past <span className="text-[#ff2ec4]">Events</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              {pastEvents.map((event, index) => (
                <EventCard
                  key={event.id}
                  event={event}
                  index={index}
                  onViewDetails={setSelectedEventId}
                />
              ))}
            </div>

            {/* Event Categories */}
            <div className="text-center mb-12">
              <h3 className="text-4xl text-[#f5f5f5] mb-8">
                Event <span className="text-[#ff2ec4]">Categories</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {eventCategories.map((cat, i) => (
                  <motion.div
                    key={cat.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                    whileHover={{ y: -8, scale: 1.02 }}
                    onClick={() => setSelectedEventId(cat.id)}
                    className="bg-[#1a1a1a] border-2 border-[#ff2ec4]/30 rounded-[30px] p-6 shadow-lg hover:shadow-2xl hover:border-[#00e0ff] transition-all overflow-hidden cursor-pointer"
                  >
                    <img
                      src={cat.mainImage}
                      alt={cat.title}
                      className="w-full h-48 object-cover rounded-2xl mb-4"
                    />
                    <h4 className="text-white text-xl mb-2">{cat.title}</h4>
                    <p className="text-[#00e0ff] text-sm mb-4">{cat.tagline}</p>
                    <Button
                      variant="outline"
                      className="w-full border-2 border-[#00e0ff] text-[#00e0ff] hover:bg-[#00e0ff] hover:text-[#0a0a0a] rounded-full transition-all"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedEventId(cat.id);
                      }}
                    >
                      View Details
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedEventId && (
          <EventDetailsView
            eventId={selectedEventId}
            onClose={() => setSelectedEventId(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}