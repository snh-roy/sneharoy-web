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
      <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6">
        <div className="flex items-center justify-center gap-4 sm:gap-8 lg:gap-12">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link text-xs sm:text-sm uppercase tracking-[0.1em] sm:tracking-[0.2em] font-typewriter ${
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
    </nav>
  );
};

export default Navigation;