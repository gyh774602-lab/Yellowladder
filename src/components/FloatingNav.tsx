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
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-background/80 backdrop-blur-md z-40"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Navigation Menu - Full screen on mobile */}
      <div
        className={`fixed inset-x-0 bottom-0 z-50 transition-all duration-500 ease-out ${
          isOpen 
            ? "translate-y-0 opacity-100" 
            : "translate-y-full opacity-0 pointer-events-none"
        }`}
      >
        <div className="bg-background/95 backdrop-blur-xl border-t border-border rounded-t-3xl px-6 pb-8 pt-6 safe-area-bottom">
          <div className="w-12 h-1 bg-muted-foreground/30 rounded-full mx-auto mb-6" />
          
          <nav className="grid grid-cols-3 gap-4 max-w-sm mx-auto">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={`flex flex-col items-center gap-2 p-4 rounded-2xl transition-all duration-300 active:scale-95 ${
                    isActive 
                      ? "bg-gradient-golden text-primary-foreground" 
                      : "glass-card hover:border-primary/50"
                  }`}
                >
                  <Icon className="w-6 h-6" />
                  <span className="text-xs font-medium">{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>

      {/* Main FAB Button - Always visible */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-16 h-16 rounded-full btn-golden flex items-center justify-center transition-all duration-300 active:scale-95 ${
          isOpen ? "rotate-45 bg-muted" : ""
        }`}
        style={{ 
          boxShadow: isOpen ? "none" : "0 0 40px rgba(255, 215, 0, 0.5)",
        }}
      >
        {isOpen ? (
          <X className="w-7 h-7" />
        ) : (
          <Menu className="w-7 h-7" />
        )}
      </button>
    </>
  );
};

export default FloatingNav;
