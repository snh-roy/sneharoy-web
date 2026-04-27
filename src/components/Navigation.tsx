import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import TypewriterEffect from "./TypewriterEffect";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const links = [
    { to: "/", label: "Contemporary" },
    { to: "/resume", label: "Curriculum Vitae" },
    { to: "/composition", label: "Composition" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[60]">
      <div className="w-full pl-3 pr-4 sm:pl-6 sm:pr-12 lg:pl-10 lg:pr-20 py-3 sm:py-8 lg:py-10 relative z-[60]">
        <div className="flex items-start justify-between">
          {isHomePage ? (
            <Link 
              to="/" 
              className="hover:opacity-75 transition-opacity z-[70] relative"
              onClick={() => setIsOpen(false)}
            >
              <TypewriterEffect isHomePage={isHomePage} />
            </Link>
          ) : (
            <div />
          )}

          <div className="flex items-center pt-1 sm:pt-2 relative z-[70]">
            {/* Mobile Menu Toggle */}
            <button
              className={`sm:hidden p-2 ${isHomePage || isOpen ? "text-white" : "text-black"}`}
              onClick={toggleMenu}
              aria-label="Toggle Menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden sm:flex items-center gap-4 md:gap-8 lg:gap-16">
              {links.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`nav-link text-xs md:text-sm lg:text-base uppercase tracking-[0.1em] md:tracking-[0.2em] font-typewriter ${
                    isHomePage ? "text-white" : "text-black"
                  } ${
                    location.pathname === link.to
                      ? "after:w-full"
                      : ""
                  } hover:opacity-75 transition-opacity whitespace-nowrap`}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-black/95 flex flex-col items-center justify-center gap-8 z-[50]"
          >
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-2xl uppercase tracking-[0.2em] font-typewriter text-white p-4 ${
                  location.pathname === link.to ? "underline underline-offset-8" : ""
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
