import { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <section className="min-h-[100dvh] flex flex-col items-center justify-center px-4 sm:px-6 relative overflow-hidden pt-2 sm:pt-6 pb-16 sm:pb-20">
      {/* Background gradient orbs */}
      <div className="absolute top-1/4 left-0 sm:left-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-1/4 right-0 sm:right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-accent/5 rounded-full blur-3xl -z-10" />

      <div className="container max-w-4xl mx-auto text-center stagger-children">
        {/* Logo */}
        <div className="mb-2 sm:mb-4 animate-scale-in">
          <img
            src={logo}
            alt="The Yellow Ladder"
            className="h-52 sm:h-52 md:h-64 mx-auto"
          />
        </div>

        {/* Main Headline */}
        <h1 className="font-display text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-2 leading-tight px-2">
          Clear Paths.
          <br />
          <span className="text-golden">Confident Futures.</span>
        </h1>

        {/* Subheading */}
        <h2 className="text-xl sm:text-2xl md:text-4xl font-semibold mb-3 sm:mb-4 text-foreground/90">
          Stop guessing. Start climbing.
        </h2>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-6 sm:mb-8 px-4">
          Transform your career trajectory with expert counseling,
          skill-building workshops, and corporate readiness training.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
          <a
            href="https://theyellowladder.edumilestones.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-golden px-6 sm:px-8 py-4 rounded-full text-base sm:text-lg font-semibold active:scale-95 transition-transform inline-flex items-center justify-center"
          >
            Psychometric test
          </a>
          <Link
            to="/career-mentors"
            className="glass-card px-6 sm:px-8 py-4 rounded-full text-base sm:text-lg font-medium text-foreground hover:border-primary/50 transition-colors active:scale-95 inline-flex items-center justify-center"
          >
            Career Mentors
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className={`absolute bottom-4 sm:bottom-4 left-1/2 -translate-x-1/2 animate-bounce transition-opacity duration-300 ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
      >
        <div className="glass-card p-3 rounded-full">
          <ArrowDown className="w-5 h-5 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
