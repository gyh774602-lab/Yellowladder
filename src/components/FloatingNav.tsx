import { useState } from "react";
import { Home, Users, Briefcase, Star, MessageCircle, X, Menu } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { icon: Home, label: "Home", path: "/" },
  { icon: Users, label: "About", path: "/about" },
  { icon: Briefcase, label: "Services", path: "/services" },
  { icon: Star, label: "Impact", path: "/impact" },
  { icon: MessageCircle, label: "Contact", path: "/contact" },
];

const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
      {/* Circular Menu Items */}
      <div
        className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-4 transition-all duration-500 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-3">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`glass-card flex items-center gap-3 px-4 py-3 rounded-full transition-all duration-300 ${
                  isActive ? "border-primary/50" : ""
                }`}
                style={{
                  transitionDelay: isOpen ? `${index * 50}ms` : "0ms",
                  transform: isOpen ? "translateY(0)" : "translateY(20px)",
                }}
              >
                <Icon
                  className={`w-5 h-5 ${
                    isActive ? "text-primary" : "text-foreground/70"
                  }`}
                />
                <span
                  className={`text-sm font-medium ${
                    isActive ? "text-primary" : "text-foreground/70"
                  }`}
                >
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* Main FAB Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`relative w-14 h-14 rounded-full btn-golden flex items-center justify-center transition-all duration-300 ${
          isOpen ? "rotate-45" : ""
        }`}
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <Menu className="w-6 h-6" />
        )}
      </button>

      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/50 backdrop-blur-sm -z-10"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
};

export default FloatingNav;
