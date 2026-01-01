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
    quote: "The counselling sessions helped me discover my true potential. Best investment in my career.",
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
    <main className="pt-16 sm:pt-20 pb-32">
      {/* Hero */}
      <section className="py-12 sm:py-20 px-4 sm:px-6 text-center">
        <div className="container max-w-4xl mx-auto">
          <span className="text-accent text-xs sm:text-sm font-semibold uppercase tracking-widest mb-3 sm:mb-4 block">
            Success Stories
          </span>
          <h1 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold mb-4 sm:mb-6">
            Real <span className="text-golden">Impact</span>
          </h1>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Stories of transformation from our community.
          </p>
        </div>
      </section>

      {/* Video Testimonials */}
      <section className="py-10 sm:py-16 px-4 sm:px-6">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-display text-xl sm:text-2xl font-bold mb-6 sm:mb-8 text-center">
            Video <span className="text-golden">Testimonials</span>
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-8">
            {[1, 2, 3].map((_, index) => (
              <div
                key={index}
                className={`aspect-[9/16] glass-card rounded-xl sm:rounded-2xl overflow-hidden relative group cursor-pointer border-2 border-primary/30 active:scale-[0.98] transition-transform ${index === 2 ? "col-span-2 md:col-span-1" : ""
                  }`}
              >
                {/* Placeholder for video */}
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-background-end/50" />

                {/* Play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gradient-golden flex items-center justify-center shadow-[0_0_40px_rgba(255,215,0,0.5)] group-hover:scale-110 transition-transform">
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 text-primary-foreground ml-0.5 sm:ml-1" />
                  </div>
                </div>

                {/* Label */}
                <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
                  <div className="glass-card rounded-lg p-2 sm:p-3">
                    <p className="text-xs sm:text-sm font-medium text-foreground">Story #{index + 1}</p>
                    <p className="text-[10px] sm:text-xs text-muted-foreground">Tap to play</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Slider */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 bg-background-end/30">
        <div className="container max-w-4xl mx-auto">
          <h2 className="font-display text-xl sm:text-2xl font-bold mb-8 sm:mb-12 text-center">
            The <span className="text-golden">Journey</span>
          </h2>

          <div className="relative">
            <div className="glass-card rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12">
              <div className="text-center mb-6 sm:mb-8">
                <blockquote className="font-display text-lg sm:text-xl md:text-2xl italic text-foreground mb-4 sm:mb-6 px-2">
                  "{testimonials[currentSlide].quote}"
                </blockquote>
                <p className="text-golden font-semibold text-sm sm:text-base">{testimonials[currentSlide].name}</p>
                <p className="text-muted-foreground text-xs sm:text-sm">{testimonials[currentSlide].role}</p>
              </div>

              {/* Before/After */}
              <div className="grid grid-cols-2 gap-3 sm:gap-8 mt-6 sm:mt-8">
                <div className="glass-card rounded-lg sm:rounded-xl p-3 sm:p-6 text-center border-red-500/20">
                  <span className="text-red-400 text-[10px] sm:text-sm uppercase tracking-widest">Before</span>
                  <p className="text-foreground mt-1 sm:mt-2 text-xs sm:text-base">{testimonials[currentSlide].before}</p>
                </div>
                <div className="glass-card rounded-lg sm:rounded-xl p-3 sm:p-6 text-center border-accent/20">
                  <span className="text-accent text-[10px] sm:text-sm uppercase tracking-widest">After</span>
                  <p className="text-foreground mt-1 sm:mt-2 text-xs sm:text-base">{testimonials[currentSlide].after}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center gap-4 mt-6 sm:mt-8">
              <button
                onClick={prevSlide}
                className="glass-card p-2.5 sm:p-3 rounded-full hover:border-primary/50 transition-colors active:scale-95"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
              </button>
              <button
                onClick={nextSlide}
                className="glass-card p-2.5 sm:p-3 rounded-full hover:border-primary/50 transition-colors active:scale-95"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
              </button>
            </div>

            {/* Dots */}
            <div className="flex justify-center gap-2 mt-4">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-2 rounded-full transition-all ${index === currentSlide
                      ? "w-6 sm:w-8 bg-gradient-golden"
                      : "w-2 bg-muted-foreground/30"
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Institutional Wall */}
      <section className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="container max-w-6xl mx-auto">
          <h2 className="font-display text-xl sm:text-2xl font-bold mb-8 sm:mb-12 text-center">
            Our <span className="text-golden">Partners</span>
          </h2>

          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-6">
            {partnerLogos.map((logo) => (
              <div
                key={logo}
                className="glass-card rounded-lg sm:rounded-xl p-3 sm:p-6 flex items-center justify-center hover:border-primary/50 transition-colors active:scale-[0.98]"
              >
                <span className="text-foreground/80 text-[10px] sm:text-sm font-medium text-center">
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
