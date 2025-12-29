import HeroSection from "@/components/HeroSection";
import PhilosophySection from "@/components/PhilosophySection";
import FeaturesSection from "@/components/FeaturesSection";
import SocialProofSection from "@/components/SocialProofSection";

const Index = () => {
  return (
    <main className="relative">
      <HeroSection />
      <PhilosophySection />
      <FeaturesSection />
      <SocialProofSection />
      
      {/* Footer CTA */}
      <section className="py-24 px-6 text-center">
        <div className="container max-w-2xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
            Ready to <span className="text-golden">climb</span>?
          </h2>
          <p className="text-muted-foreground mb-8">
            Take the first step towards a career that matches your potential.
          </p>
          <button className="btn-golden px-8 py-4 rounded-full text-lg font-semibold">
            Start Your Journey
          </button>
        </div>
      </section>
    </main>
  );
};

export default Index;
