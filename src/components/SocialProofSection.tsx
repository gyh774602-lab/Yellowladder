import SocialProofTicker from "./SocialProofTicker";

const SocialProofSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />
      
      <div className="text-center mb-8">
        <p className="text-muted-foreground text-sm uppercase tracking-widest">
          Trusted by leading institutions
        </p>
      </div>
      
      <SocialProofTicker />
    </section>
  );
};

export default SocialProofSection;
