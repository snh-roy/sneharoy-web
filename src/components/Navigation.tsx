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
      <div className="w-full px-4 sm:px-12 lg:px-20 py-4 sm:py-8 lg:py-10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-0">
          <Link 
            to="/" 
            className={`font-typewriter text-xl sm:text-4xl lg:text-5xl tracking-wide ${
              isHomePage ? "text-white" : "text-black"
            } hover:opacity-75 transition-opacity`}
          >
            Hi, I'm Snéha.
          </Link>
          <div className="flex flex-wrap items-center gap-3 sm:gap-10 lg:gap-16">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`nav-link text-[10px] sm:text-base lg:text-lg uppercase tracking-[0.1em] sm:tracking-[0.2em] font-typewriter ${
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
