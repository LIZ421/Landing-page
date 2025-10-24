import { useState } from "react";
import { Toaster } from "./components/ui/sonner";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { StatsCounter } from "./components/StatsCounter";
import { EventsSection } from "./components/EventsSection";
import { CountdownTimer } from "./components/CountdownTimer";
import { NewsSection } from "./components/NewsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { PartnersCarousel } from "./components/PartnersCarousel";
import { JoinCommunitySection } from "./components/JoinCommunitySection";
import { CoreValuesSection } from "./components/CoreValuesSection";
import { Footer } from "./components/Footer";
import { LoginModal } from "./components/LoginModal";
import { ScrollProgress } from "./components/ScrollProgress";
import { BackToTop } from "./components/BackToTop";
import { ThemeToggle } from "./components/ThemeToggle";

export default function App() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0a0a0a] transition-colors duration-300">
      <ScrollProgress />
      <Navigation onLoginClick={() => setIsLoginModalOpen(true)} />
      
      <main>
        <Hero />
        <StatsCounter />
        
        <div className="max-w-7xl mx-auto px-4 py-12">
          <CountdownTimer />
        </div>
        
        <EventsSection />
        <NewsSection />
        <CoreValuesSection />
        <TestimonialsSection />
        <PartnersCarousel />
        <JoinCommunitySection />
      </main>
      
      <Footer />
      
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
      <BackToTop />
      <ThemeToggle />
      
      <Toaster position="top-center" richColors />
    </div>
  );
}
