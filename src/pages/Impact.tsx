import { Play, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Priya M.",
    role: "Placed at Infosys",
    quote: "The Yellow Ladder transformed my interview skills. I went from nervous to confident in just 4 weeks.",
    before: "Confused about career options",
    after: "Software Engineer at Infosys",
  },
  {
    name: "Rahul K.",
    role: "Placed at TCS",
    quote: "The counseling sessions helped me discover my true potential. Best investment in my career.",
    before: "Struggling with aptitude tests",
    after: "Systems Analyst at TCS",
  },
  {
    name: "Sneha D.",
    role: "Placed at Deloitte",
    quote: "From campus to corporate, The Yellow Ladder made the transition seamless.",
    before: "No industry exposure",
    after: "Consultant at Deloitte",
  },
];

const partnerLogos = [
  "IIT Delhi",
  "BITS Pilani",
  "Christ University",
  "Amity University",
  "Delhi University",
  "VIT",
  "SRM University",
  "KIIT",
  "Manipal University",
  "Shiv Nadar University",
  "Ashoka University",
  "OP Jindal",
];

const Impact = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <main className="pt-20 pb-32">
      {/* Hero */}
      <section className="py-20 px-6 text-center">
        <div className="container max-w-4xl mx-auto">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 block">
            Success Stories
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Real <span className="text-golden">Impact</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stories of transformation from our community.
          </p>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-16 px-6">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-display text-2xl font-bold mb-8 text-center">
            Video <span className="text-golden">Testimonials</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className="aspect-[9/16] glass-card rounded-2xl overflow-hidden relative group cursor-pointer border-2 border-primary/30"
              >
                {/* Placeholder for video */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background-end/50" />
                
                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-golden flex items-center justify-center shadow-[0_0_40px_rgba(255,215,0,0.5)] group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-primary-foreground ml-1" />
                  </div>
                </div>

                {/* Label */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="glass-card rounded-lg p-3">
                    <p className="text-sm font-medium text-foreground">Student Story #{index + 1}</p>
                    <p className="text-xs text-muted-foreground">Tap to play</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Slider */}
      <section className="py-24 px-6 bg-background-end/30">
        <div className="container max-w-4xl mx-auto">
          <h2 className="font-display text-2xl font-bold mb-12 text-center">
            The <span className="text-golden">Journey</span>
          </h2>

          <div className="relative">
            <div className="glass-card rounded-2xl p-8 md:p-12">
              <div className="text-center mb-8">
                <blockquote className="font-display text-xl md:text-2xl italic text-foreground mb-6">
                  "{testimonials[currentSlide].quote}"
                </blockquote>
                <p className="text-golden font-semibold">{testimonials[currentSlide].name}</p>
                <p className="text-muted-foreground">{testimonials[currentSlide].role}</p>
              </div>

              {/* Before/After */}
              <div className="grid md:grid-cols-2 gap-8 mt-8">
                <div className="glass-card rounded-xl p-6 text-center border-red-500/20">
                  <span className="text-red-400 text-sm uppercase tracking-widest">Before</span>
                  <p className="text-foreground mt-2">{testimonials[currentSlide].before}</p>
                </div>
                <div className="glass-card rounded-xl p-6 text-center border-accent/20">
                  <span className="text-accent text-sm uppercase tracking-widest">After</span>
                  <p className="text-foreground mt-2">{testimonials[currentSlide].after}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-8">
              <button
                onClick={prevSlide}
                className="glass-card p-3 rounded-full hover:border-primary/50 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-foreground" />
              </button>
              <button
                onClick={nextSlide}
                className="glass-card p-3 rounded-full hover:border-primary/50 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-foreground" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    index === currentSlide
                      ? "w-8 bg-gradient-golden"
                      : "bg-muted-foreground/30"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Wall */}
      <section className="py-24 px-6">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-display text-2xl font-bold mb-12 text-center">
            Our <span className="text-golden">Partners</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {partnerLogos.map((logo) => (
              <div
                key={logo}
                className="glass-card rounded-xl p-6 flex items-center justify-center hover:border-primary/50 transition-colors"
              >
                <span className="text-foreground/80 text-sm font-medium text-center">
                  {logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Impact;
