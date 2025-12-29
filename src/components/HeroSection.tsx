import GoldenLadder from "./GoldenLadder";
import { ArrowDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-[100dvh] flex flex-col items-center justify-center px-4 sm:px-6 relative overflow-hidden pt-12 pb-24">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-0 sm:left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 sm:right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-accent/5 rounded-full blur-3xl -z-10" />
      
      <div className="container max-w-4xl mx-auto text-center stagger-children">
        {/* Logo/Brand */}
        <div className="mb-6 sm:mb-8">
          <span className="text-golden font-display text-sm sm:text-lg tracking-widest uppercase">
            The Yellow Ladder
          </span>
        </div>

        {/* 3D Golden Ladder */}
        <div className="mb-8 sm:mb-12 animate-scale-in" style={{ animationDelay: "0.3s" }}>
          <GoldenLadder />
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2">
          Stop guessing.
          <br />
          <span className="text-golden">Start climbing.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 sm:mb-12 px-4">
          Transform your career trajectory with expert counseling, 
          skill-building workshops, and corporate readiness training.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <button className="btn-golden px-6 sm:px-8 py-4 rounded-full text-base sm:text-lg font-semibold active:scale-95 transition-transform">
            Begin Your Ascent
          </button>
          <button className="glass-card px-6 sm:px-8 py-4 rounded-full text-base sm:text-lg font-medium text-foreground hover:border-primary/50 transition-colors active:scale-95">
            Explore Programs
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-24 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="glass-card p-3 rounded-full">
          <ArrowDown className="w-5 h-5 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
