import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="w-full px-4 sm:px-12 lg:px-20 py-4 sm:py-8 lg:py-10">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className={`font-typewriter text-xl sm:text-4xl lg:text-5xl tracking-wide ${
              isHomePage ? "text-white" : "text-black"
            } hover:opacity-75 transition-opacity z-50`}
            onClick={() => setIsOpen(false)}
          >
            Hi, I'm Snéha.
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className={`sm:hidden z-50 p-2 ${isHomePage || isOpen ? "text-white" : "text-black"}`}
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden sm:flex items-center gap-6 sm:gap-10 lg:gap-16">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link text-sm sm:text-base lg:text-lg uppercase tracking-[0.1em] sm:tracking-[0.2em] font-typewriter ${
                  isHomePage ? "text-white" : "text-black"
                } ${
                  location.pathname === link.to
                    ? "after:w-full"
                    : ""
                } hover:opacity-75 transition-opacity`}
              >
                {link.label}
              </Link>
            ))}
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
            className="fixed inset-0 bg-black/95 flex flex-col items-center justify-center gap-8 z-40"
          >
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-2xl uppercase tracking-[0.2em] font-typewriter text-white ${
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
