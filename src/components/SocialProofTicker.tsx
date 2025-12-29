const partners = [
  "IIT Delhi",
  "BITS Pilani",
  "Deloitte",
  "Microsoft",
  "Infosys",
  "TCS",
  "KPMG",
  "Ernst & Young",
  "Delhi University",
  "Christ University",
  "Amity University",
  "Wipro",
];

const SocialProofTicker = () => {
  return (
    <div className="w-full overflow-hidden py-8">
      <div className="flex animate-ticker">
        {/* Double the items for seamless loop */}
        {[...partners, ...partners].map((partner, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-8 px-8 py-4 glass-card rounded-full"
          >
            <span className="text-foreground/80 font-medium whitespace-nowrap">
              {partner}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SocialProofTicker;
