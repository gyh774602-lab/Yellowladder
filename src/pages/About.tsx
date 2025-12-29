import { useEffect, useRef, useState } from "react";

const timelineEvents = [
  {
    year: "2020",
    title: "The Spark",
    description: "Founded with a vision to bridge the gap between education and industry requirements.",
  },
  {
    year: "2021",
    title: "First Partnerships",
    description: "Collaborated with leading universities to deliver career counseling programs.",
  },
  {
    year: "2022",
    title: "Corporate Integration",
    description: "Brought in industry experts as trainers, adding real-world perspective.",
  },
  {
    year: "2023",
    title: "National Expansion",
    description: "Extended our reach to 50+ institutions across India.",
  },
  {
    year: "2024",
    title: "Digital Transformation",
    description: "Launched hybrid programs combining in-person and online learning.",
  },
];

const impactStats = [
  { value: "10,000+", label: "Hours of Counseling" },
  { value: "50+", label: "Partner Institutions" },
  { value: "25,000+", label: "Students Empowered" },
  { value: "95%", label: "Satisfaction Rate" },
];

const mentors = [
  { name: "Dr. Priya Sharma", role: "Lead Career Counselor", initials: "PS" },
  { name: "Rahul Verma", role: "Corporate Training Head", initials: "RV" },
  { name: "Anita Desai", role: "Personality Development Expert", initials: "AD" },
  { name: "Vikram Singh", role: "Industry Relations", initials: "VS" },
];

const About = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      
      const rect = timelineRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const sectionHeight = rect.height;
      
      const scrolled = Math.max(0, windowHeight - rect.top);
      const progress = Math.min(1, scrolled / (sectionHeight + windowHeight * 0.5));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="pt-16 sm:pt-20 pb-32">
      {/* Hero */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 text-center">
        <div className="container max-w-4xl mx-auto">
          <span className="text-accent text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3 sm:mb-4 block">
            The DNA
          </span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
            Our <span className="text-golden">Story</span>
          </h1>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            From a single idea to a movement transforming thousands of careers.
          </p>
        </div>
      </section>

      {/* Timeline - Mobile optimized */}
      <section ref={timelineRef} className="py-12 sm:py-16 px-4 sm:px-6 relative">
        <div className="container max-w-4xl mx-auto">
          {/* Glowing vertical line - positioned for mobile */}
          <div className="absolute left-6 sm:left-1/2 top-0 w-1 h-full bg-muted sm:-translate-x-1/2">
            <div
              className="w-full golden-line transition-all duration-100"
              style={{ height: `${scrollProgress * 100}%` }}
            />
          </div>

          <div className="space-y-8 sm:space-y-16 pl-10 sm:pl-0">
            {timelineEvents.map((event, index) => (
              <div
                key={event.year}
                className={`relative sm:flex sm:items-center sm:gap-8 ${
                  index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
                }`}
              >
                {/* Node - positioned for mobile */}
                <div className="absolute left-[-26px] sm:left-1/2 sm:-translate-x-1/2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-golden shadow-[0_0_20px_rgba(255,215,0,0.5)]" />

                {/* Content */}
                <div className={`sm:w-1/2 ${index % 2 === 0 ? "sm:text-right sm:pr-8" : "sm:text-left sm:pl-8"}`}>
                  <div className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-6 inline-block w-full sm:w-auto">
                    <span className="text-golden font-display text-xl sm:text-2xl font-bold">
                      {event.year}
                    </span>
                    <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mt-1 sm:mt-2">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground mt-1 sm:mt-2 text-sm sm:text-base">{event.description}</p>
                  </div>
                </div>

                {/* Spacer - only on desktop */}
                <div className="hidden sm:block sm:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Pulse */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-background-end/30">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-16">
            The <span className="text-golden">Impact</span> Pulse
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {impactStats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card rounded-xl sm:rounded-2xl p-4 sm:p-8 text-center animate-pulse-glow"
              >
                <div className="text-golden font-display text-2xl sm:text-3xl md:text-4xl font-bold mb-1 sm:mb-2">
                  {stat.value}
                </div>
                <p className="text-muted-foreground text-xs sm:text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-10 sm:mb-16">
            The <span className="text-golden">Mentors</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-8">
            {mentors.map((mentor) => (
              <div
                key={mentor.name}
                className="glass-card grass-glow rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center group cursor-pointer active:scale-[0.98] transition-transform"
              >
                <div className="w-14 h-14 sm:w-20 sm:h-20 rounded-full bg-gradient-golden flex items-center justify-center mx-auto mb-3 sm:mb-4 text-lg sm:text-2xl font-display font-bold text-primary-foreground group-hover:shadow-[0_0_40px_rgba(173,255,47,0.4)] transition-shadow">
                  {mentor.initials}
                </div>
                <h3 className="font-display text-sm sm:text-lg font-semibold text-foreground">
                  {mentor.name}
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm mt-1">{mentor.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Quote */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="container max-w-4xl mx-auto text-center">
          <blockquote className="font-display text-xl sm:text-2xl md:text-4xl italic text-foreground leading-relaxed px-4">
            "We measure success by the
            <span className="text-golden"> confidence </span>
            we instill."
          </blockquote>
          <p className="text-muted-foreground mt-4 sm:mt-6 text-sm sm:text-base">— The Yellow Ladder Team</p>
        </div>
      </section>
    </main>
  );
};

export default About;
