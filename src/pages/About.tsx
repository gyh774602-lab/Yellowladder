import { useEffect, useRef, useState } from "react";
import { Target, Users, Award, ShieldCheck, Compass, Sparkles } from "lucide-react";

const timelineEvents = [
  {
    year: "2020",
    title: "The Spark",
    description: "Founded with a vision to bridge the gap between education and industry requirements.",
  },
  {
    year: "2021",
    title: "First Partnerships",
    description: "Collaborated with leading universities to deliver career counselling programs.",
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
  { value: "10,000+", label: "Hours of Counselling" },
  { value: "50+", label: "Partner Institutions" },
  { value: "25,000+", label: "Students Empowered" },
  { value: "95%", label: "Satisfaction Rate" },
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
            About <span className="text-golden">Us</span>
          </h1>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            A clear and purposeful vision to guide the young generation towards the right academic choices and meaningful career opportunities.
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
                className={`relative sm:flex sm:items-center sm:gap-8 ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"
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

      {/* Detailed Content - Premium Cards */}
      <section className="py-20 sm:py-32 px-4 sm:px-6 relative overflow-hidden">
        {/* Background Decorative Blobs */}
        <div className="absolute top-1/4 -left-20 w-80 h-80 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-golden/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container max-w-6xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">

            {/* The Beginning */}
            <div className="glass-card p-8 rounded-3xl md:col-span-2 border-primary/20 hover:border-primary/40 transition-colors group">
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="w-16 h-16 rounded-2xl bg-gradient-golden flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  <Compass className="w-8 h-8 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-display text-2xl font-bold mb-4 text-golden">The Beginning</h3>
                  <p className="text-muted-foreground text-lg leading-relaxed">
                    &ldquo;The Yellow Ladder&rdquo; was founded in 2020 with a clear and purposeful vision: to guide the young generation towards the right academic choices and meaningful career opportunities. Built by a team of corporate-experienced trainers and certified counsellors, the organisation was created to bridge the long-standing gap between education and real-world employability.
                  </p>
                </div>
              </div>
            </div>

            {/* Evolution */}
            <div className="glass-card p-8 rounded-3xl border-primary/10 hover:border-primary/30 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-foreground">Our Evolution</h3>
              <p className="text-muted-foreground leading-relaxed">
                Over the years, we have evolved into a trusted career counselling and training partner for students, parents, and educational institutions. We specialise in career guidance, employability skills training, personality development, and workplace readiness programmes for school and college students. Our approach combines structured counselling methodologies with practical, industry-relevant training, ensuring that learners are not only informed but also prepared for future challenges.
              </p>
            </div>

            {/* Impact */}
            <div className="glass-card p-8 rounded-3xl border-primary/10 hover:border-primary/30 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-foreground">Years of Impact</h3>
              <p className="text-muted-foreground leading-relaxed">
                In the last five years, we have impacted thousands of learners through one-on-one counselling sessions, group workshops, institutional collaborations, and customised training programmes. Our interventions have helped students gain clarity in career decision-making, build strong communication skills, improve confidence, and develop a professional mindset essential for academic success and job readiness. Many of the students trained by us have successfully gained admission to their preferred courses and secured employment across diverse sectors.
              </p>
            </div>

            {/* What sets us apart */}
            <div className="glass-card p-8 rounded-3xl border-primary/10 hover:border-primary/30 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-foreground">Real-World Relevance</h3>
              <p className="text-muted-foreground leading-relaxed">
                What sets The Yellow Ladder apart is our focus on real-world relevance. Our trainers bring firsthand corporate experience into the classroom, offering practical insights that go beyond textbooks. We strongly believe that every student is unique, and our counselling process respects individual strengths, interests, and aspirations.
              </p>
            </div>

            {/* Our Commitment */}
            <div className="glass-card p-8 rounded-3xl border-primary/10 hover:border-primary/30 transition-colors group">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-foreground">Our Commitment</h3>
              <p className="text-muted-foreground leading-relaxed">
                At its core, The Yellow Ladder is driven by impact rather than numbers. We measure success by the confidence we instil, the clarity we create, and the positive direction we help young people discover. As we continue to grow, our commitment remains unchanged—to be a reliable guide at every step of the career journey and to help students climb their own ladder to a successful and fulfilling future.
              </p>
            </div>

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
