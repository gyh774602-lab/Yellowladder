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
    <main className="pt-20 pb-32">
      {/* Hero */}
      <section className="py-20 px-6 text-center">
        <div className="container max-w-4xl mx-auto">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 block">
            The DNA
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Our <span className="text-golden">Story</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From a single idea to a movement transforming thousands of careers.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section ref={timelineRef} className="py-16 px-6 relative">
        <div className="container max-w-4xl mx-auto">
          {/* Glowing vertical line */}
          <div className="absolute left-1/2 top-0 w-1 h-full bg-muted -translate-x-1/2">
            <div
              className="w-full golden-line transition-all duration-100"
              style={{ height: `${scrollProgress * 100}%` }}
            />
          </div>

          <div className="space-y-16">
            {timelineEvents.map((event, index) => (
              <div
                key={event.year}
                className={`relative flex items-center gap-8 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                {/* Content */}
                <div className={`w-1/2 ${index % 2 === 0 ? "text-right pr-8" : "text-left pl-8"}`}>
                  <div className="glass-card rounded-2xl p-6 inline-block">
                    <span className="text-golden font-display text-2xl font-bold">
                      {event.year}
                    </span>
                    <h3 className="font-display text-xl font-semibold text-foreground mt-2">
                      {event.title}
                    </h3>
                    <p className="text-muted-foreground mt-2">{event.description}</p>
                  </div>
                </div>

                {/* Node */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-golden shadow-[0_0_20px_rgba(255,215,0,0.5)]" />

                {/* Spacer */}
                <div className="w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Pulse */}
      <section className="py-24 px-6 bg-background-end/30">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">
            The <span className="text-golden">Impact</span> Pulse
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {impactStats.map((stat) => (
              <div
                key={stat.label}
                className="glass-card rounded-2xl p-8 text-center animate-pulse-glow"
              >
                <div className="text-golden font-display text-3xl md:text-4xl font-bold mb-2">
                  {stat.value}
                </div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mentors */}
      <section className="py-24 px-6">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">
            The <span className="text-golden">Mentors</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {mentors.map((mentor) => (
              <div
                key={mentor.name}
                className="glass-card grass-glow rounded-2xl p-6 text-center group cursor-pointer"
              >
                <div className="w-20 h-20 rounded-full bg-gradient-golden flex items-center justify-center mx-auto mb-4 text-2xl font-display font-bold text-primary-foreground group-hover:shadow-[0_0_40px_rgba(173,255,47,0.4)] transition-shadow">
                  {mentor.initials}
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground">
                  {mentor.name}
                </h3>
                <p className="text-muted-foreground text-sm mt-1">{mentor.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Quote */}
      <section className="py-24 px-6">
        <div className="container max-w-4xl mx-auto text-center">
          <blockquote className="font-display text-2xl md:text-4xl italic text-foreground leading-relaxed">
            "We measure success by the
            <span className="text-golden"> confidence </span>
            we instill."
          </blockquote>
          <p className="text-muted-foreground mt-6">— The Yellow Ladder Team</p>
        </div>
      </section>
    </main>
  );
};

export default About;
