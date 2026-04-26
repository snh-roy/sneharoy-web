import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const links = [
    { to: "/", label: "Contemporary" },
    { to: "/resume", label: "Curriculum Vitae" },
    { to: "/composition", label: "Composition" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="w-full px-6 sm:px-12 lg:px-20 py-6 sm:py-8 lg:py-10">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className={`font-typewriter text-3xl sm:text-4xl lg:text-5xl tracking-wide ${
              isHomePage ? "text-white" : "text-black"
            } hover:opacity-75 transition-opacity`}
          >
            Hi, I'm Snéha.
          </Link>
          <div className="flex items-center gap-6 sm:gap-10 lg:gap-16">
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
    </nav>
  );
};

export default Navigation;
