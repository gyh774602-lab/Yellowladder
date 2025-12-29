import { useState } from "react";
import { TrendingUp, Users, Brain, Target, Award, Lightbulb } from "lucide-react";

const studentPrograms = [
  {
    icon: TrendingUp,
    title: "Employability Skills",
    duration: "4-week intensive",
    description: "Master the skills employers actively seek in fresh graduates.",
  },
  {
    icon: Brain,
    title: "Aptitude Mastery",
    duration: "6-week program",
    description: "Crack competitive exams and placement tests with confidence.",
  },
  {
    icon: Target,
    title: "Career Counseling",
    duration: "Individual sessions",
    description: "Personalized guidance to find your ideal career path.",
  },
];

const institutionPrograms = [
  {
    icon: Users,
    title: "Campus Placement Training",
    duration: "Semester-long",
    description: "Comprehensive preparation for campus recruitment drives.",
  },
  {
    icon: Award,
    title: "Faculty Development",
    duration: "Workshops",
    description: "Empower your faculty with modern pedagogical techniques.",
  },
  {
    icon: Lightbulb,
    title: "Entrepreneurship Labs",
    duration: "Modular",
    description: "Foster innovation and startup culture among students.",
  },
];

const methodology = [
  { step: 1, title: "Counseling", description: "Understand strengths & aspirations" },
  { step: 2, title: "Training", description: "Build skills through practice" },
  { step: 3, title: "Readiness", description: "Prepare for real opportunities" },
];

const Services = () => {
  const [activeSegment, setActiveSegment] = useState<"students" | "institutions">("students");

  const programs = activeSegment === "students" ? studentPrograms : institutionPrograms;

  return (
    <main className="pt-20 pb-32">
      {/* Hero */}
      <section className="py-20 px-6 text-center">
        <div className="container max-w-4xl mx-auto">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 block">
            The Path
          </span>
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-6">
            Programs & <span className="text-golden">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Tailored interventions for students and institutions alike.
          </p>
        </div>
      </section>

      {/* Segment Toggle */}
      <section className="px-6">
        <div className="container max-w-xl mx-auto">
          <div className="glass-card rounded-full p-2 flex">
            <button
              onClick={() => setActiveSegment("students")}
              className={`flex-1 py-4 rounded-full font-semibold transition-all ${
                activeSegment === "students"
                  ? "bg-gradient-golden text-primary-foreground"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              For Students
            </button>
            <button
              onClick={() => setActiveSegment("institutions")}
              className={`flex-1 py-4 rounded-full font-semibold transition-all ${
                activeSegment === "institutions"
                  ? "bg-gradient-golden text-primary-foreground"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              For Institutions
            </button>
          </div>
        </div>
      </section>

      {/* Program Cards */}
      <section className="py-16 px-6">
        <div className="container max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {programs.map((program, index) => {
              const Icon = program.icon;
              return (
                <div
                  key={program.title}
                  className="glass-card grass-glow rounded-2xl p-8 transition-all duration-300 hover:-translate-y-2"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-golden flex items-center justify-center mb-6 shadow-[0_0_30px_rgba(255,215,0,0.4)]">
                    <Icon className="w-7 h-7 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                    {program.title}
                  </h3>
                  <p className="text-primary text-sm font-medium mb-3">
                    {program.duration}
                  </p>
                  <p className="text-muted-foreground">{program.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-24 px-6 bg-background-end/30">
        <div className="container max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">
            The <span className="text-golden">Methodology</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            {methodology.map((step, index) => (
              <div key={step.step} className="flex items-center gap-4">
                <div className="relative">
                  <div className="w-20 h-20 rounded-full bg-gradient-golden flex items-center justify-center text-2xl font-display font-bold text-primary-foreground shadow-[0_0_30px_rgba(255,215,0,0.4)]">
                    {step.step}
                  </div>
                </div>
                <div className="md:hidden lg:block">
                  <h3 className="font-display text-lg font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">{step.description}</p>
                </div>
                {index < methodology.length - 1 && (
                  <div className="hidden md:block w-16 h-1 golden-line rounded-full" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA - Sticky on Mobile */}
      <section className="py-16 px-6">
        <div className="container max-w-2xl mx-auto text-center">
          <h3 className="font-display text-2xl font-bold mb-4">
            Want detailed information?
          </h3>
          <p className="text-muted-foreground mb-8">
            Download our comprehensive program brochure.
          </p>
          <button className="btn-golden px-8 py-4 rounded-full text-lg font-semibold">
            Download Brochure
          </button>
        </div>
      </section>

      {/* Sticky Mobile CTA */}
      <div className="fixed bottom-24 left-0 right-0 px-6 md:hidden">
        <button className="w-full btn-golden py-4 rounded-full font-semibold shadow-[0_0_40px_rgba(255,215,0,0.4)]">
          Download Program Brochure
        </button>
      </div>
    </main>
  );
};

export default Services;
