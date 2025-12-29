import { Compass, Briefcase, Sparkles } from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: Compass,
    title: "Career Clarity",
    description:
      "Discover your true potential through personalized career assessments and one-on-one counseling sessions.",
  },
  {
    icon: Briefcase,
    title: "Workplace Readiness",
    description:
      "Master the skills that employers demand—from communication to problem-solving and leadership.",
  },
  {
    icon: Sparkles,
    title: "Personality Growth",
    description:
      "Develop confidence, emotional intelligence, and the soft skills that set you apart in any room.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 relative">
      {/* Section background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background-end/50 to-background-end -z-10" />
      
      <div className="container max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-accent text-sm font-semibold uppercase tracking-widest mb-4 block">
            The Glass Meadow
          </span>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Your Path to <span className="text-golden">Excellence</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.5}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
