import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Info, Contact, BookOpen, Menu, X } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const navLinks = [
  { to: "/about", label: "About Us", icon: Info },
  { to: "/contact", label: "Contact Us", icon: Contact },
  { to: "/documentation", label: "Documentation", icon: BookOpen },
];

const Navbar = () => {
  const location = useLocation();
  const isMobile = useIsMobile();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="w-full shadow-lg mb-6 bg-gradient-to-r from-green-300 via-green-100 to-green-300/70 animate-fade-in sticky top-0 z-50">
      <div className="container mx-auto flex items-center px-4 py-3 justify-between">
        <Link
          to="/"
          className="flex items-center gap-2 sm:gap-3 font-extrabold text-lg sm:text-2xl drop-shadow-lg tracking-tight hover:scale-105 transition-transform duration-200"
        >
          <span className="p-1.5 sm:p-2 rounded-full bg-green-500 text-white shadow-md animate-wiggle">
            <Home className="w-5 h-5 sm:w-6 sm:h-6" />
          </span>
          <span className="text-green-900 drop-shadow-[0_2px_3px_rgba(0,0,0,0.18)]">
            P S Jolha Flora Directory
          </span>
        </Link>

        {isMobile ? (
          <>
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-md bg-green-50 text-green-800 shadow-sm"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {mobileMenuOpen && (
              <div className="absolute top-full left-0 right-0 bg-white shadow-lg animate-fade-in py-2 z-20">
                {navLinks.map(({ to, label, icon: Icon }) => (
                  <Link
                    key={to}
                    to={to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`flex items-center gap-3 px-6 py-3 font-medium
                    ${
                      location.pathname === to
                        ? "bg-green-100 text-green-900"
                        : "text-green-800 hover:bg-green-50"
                    }`}
                  >
                    <Icon size={18} />
                    <span>{label}</span>
                  </Link>
                ))}
              </div>
            )}
          </>
        ) : (
          <div className="flex gap-1 md:gap-3">
            {navLinks.map(({ to, label, icon: Icon }) => (
              <Link
                key={to}
                to={to}
                className={`flex items-center gap-2 px-4 py-2 rounded-md font-semibold transition-all 
                hover:bg-green-200/70 hover:text-green-900 focus:outline-none focus:ring-2 focus:ring-green-300 
                ${
                  location.pathname === to
                    ? "bg-green-600 text-white shadow font-bold"
                    : "bg-green-100/90 text-green-800 hover:bg-green-100"
                } 
                animate-fade-in hover-scale`}
              >
                <Icon size={18} />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
      <style>
        {`
          @keyframes wiggle {
            0% { transform: rotate(-6deg);}
            50% { transform: rotate(6deg);}
            100% { transform: rotate(-6deg);}
          }
          .animate-wiggle { animation: wiggle 2s infinite ease-in-out alternate;}
        `}
      </style>
    </nav>
  );
};

export default Navbar;
