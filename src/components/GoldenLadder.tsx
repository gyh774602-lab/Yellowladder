const GoldenLadder = () => {
  return (
    <div className="relative w-24 h-64 mx-auto">
      {/* Left rail */}
      <div className="absolute left-0 top-0 w-2 h-full bg-gradient-golden rounded-full shadow-[0_0_20px_rgba(255,215,0,0.5)]" />
      {/* Right rail */}
      <div className="absolute right-0 top-0 w-2 h-full bg-gradient-golden rounded-full shadow-[0_0_20px_rgba(255,215,0,0.5)]" />
      
      {/* Rungs */}
      {[...Array(7)].map((_, i) => (
        <div
          key={i}
          className="absolute left-0 right-0 h-2 bg-gradient-golden rounded-full shadow-[0_0_15px_rgba(255,215,0,0.4)]"
          style={{
            top: `${12 + i * 13}%`,
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
      
      {/* Glow effect */}
      <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent blur-2xl" />
    </div>
  );
};

export default GoldenLadder;
