import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon: Icon, title, description, delay = 0 }: FeatureCardProps) => {
  return (
    <div
      className="glass-card grass-glow rounded-xl sm:rounded-2xl p-6 sm:p-8 animate-float"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl bg-gradient-golden flex items-center justify-center mb-4 sm:mb-6 shadow-[0_0_30px_rgba(255,215,0,0.4)]">
        <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary-foreground" />
      </div>
      <h3 className="font-display text-lg sm:text-xl font-semibold text-foreground mb-2 sm:mb-3">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;
