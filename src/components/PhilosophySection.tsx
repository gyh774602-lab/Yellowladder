import { useEffect, useRef, useState } from "react";

const PhilosophySection = () => {
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      
      if (sectionTop < windowHeight && sectionTop > -sectionHeight) {
        const scrollProgress = 1 - (sectionTop / windowHeight);
        setProgress(Math.max(0, Math.min(1, scrollProgress)));
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const gapWidth = Math.max(20, 120 - progress * 100); // Smaller gap on mobile

  return (
    <section ref={sectionRef} className="py-16 sm:py-24 px-4 sm:px-6 overflow-hidden">
      <div className="container max-w-6xl mx-auto">
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-12 sm:mb-16">
          <span className="text-golden">Bridging</span> the Gap
        </h2>
        
        <div className="relative flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-0 min-h-[280px] sm:min-h-[300px]">
          {/* Education Side */}
          <div
            className="glass-card rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 ease-out w-full sm:w-auto max-w-[200px]"
            style={{
              transform: `translateX(${typeof window !== 'undefined' && window.innerWidth >= 640 ? -gapWidth / 2 : 0}px)`,
            }}
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎓</span>
            </div>
            <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-2">
              Education
            </h3>
            <p className="text-muted-foreground text-sm">
              Knowledge & Theory
            </p>
          </div>

          {/* Bridge - The Yellow Ladder */}
          <div
            className="sm:absolute w-2 sm:w-4 transition-all duration-300 ease-out"
            style={{
              opacity: progress,
              height: `${Math.max(40, progress * 80)}px`,
            }}
          >
            <div className="w-full h-full bg-gradient-golden rounded-full shadow-[0_0_30px_rgba(255,215,0,0.5)]" />
          </div>

          {/* Corporate Side */}
          <div
            className="glass-card rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 ease-out w-full sm:w-auto max-w-[200px]"
            style={{
              transform: `translateX(${typeof window !== 'undefined' && window.innerWidth >= 640 ? gapWidth / 2 : 0}px)`,
            }}
          >
            <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏢</span>
            </div>
            <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-2">
              Corporate
            </h3>
            <p className="text-muted-foreground text-sm">
              Skills & Application
            </p>
          </div>
        </div>

        <p className="text-center text-muted-foreground mt-8 sm:mt-12 max-w-2xl mx-auto text-sm sm:text-base px-4">
          The Yellow Ladder bridges the gap between academic knowledge and industry requirements,
          transforming potential into performance.
        </p>
      </div>
    </section>
  );
};

export default PhilosophySection;
