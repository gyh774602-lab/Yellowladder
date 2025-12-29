import { useEffect, useRef, useState } from "react";

const PhilosophySection = () => {
  const [progress, setProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate progress based on how much of the section is visible
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      
      if (sectionTop < windowHeight && sectionTop > -sectionHeight) {
        const scrollProgress = 1 - (sectionTop / windowHeight);
        setProgress(Math.max(0, Math.min(1, scrollProgress)));
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const gapWidth = 200 - progress * 180; // Gap closes from 200px to 20px

  return (
    <section ref={sectionRef} className="py-24 px-6 overflow-hidden">
      <div className="container max-w-6xl mx-auto">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">
          <span className="text-golden">Bridging</span> the Gap
        </h2>
        
        <div className="relative flex items-center justify-center min-h-[300px]">
          {/* Education Side */}
          <div
            className="glass-card rounded-2xl p-8 text-center transition-all duration-300 ease-out"
            style={{
              transform: `translateX(-${gapWidth / 2}px)`,
            }}
          >
            <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🎓</span>
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              Education
            </h3>
            <p className="text-muted-foreground text-sm">
              Knowledge & Theory
            </p>
          </div>

          {/* Bridge - The Yellow Ladder */}
          <div
            className="absolute w-4 transition-all duration-300 ease-out"
            style={{
              opacity: progress,
              height: `${progress * 100}px`,
            }}
          >
            <div className="w-full h-full bg-gradient-golden rounded-full shadow-[0_0_30px_rgba(255,215,0,0.5)]" />
          </div>

          {/* Corporate Side */}
          <div
            className="glass-card rounded-2xl p-8 text-center transition-all duration-300 ease-out"
            style={{
              transform: `translateX(${gapWidth / 2}px)`,
            }}
          >
            <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🏢</span>
            </div>
            <h3 className="font-display text-xl font-semibold text-foreground mb-2">
              Corporate
            </h3>
            <p className="text-muted-foreground text-sm">
              Skills & Application
            </p>
          </div>
        </div>

        <p className="text-center text-muted-foreground mt-12 max-w-2xl mx-auto">
          The Yellow Ladder bridges the gap between academic knowledge and industry requirements,
          transforming potential into performance.
        </p>
      </div>
    </section>
  );
};

export default PhilosophySection;
