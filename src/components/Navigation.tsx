import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();

  const links = [
    { to: "/", label: "Contemporary" },
    { to: "/resume", label: "Résumé" },
    { to: "/composition", label: "Composition" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-center gap-12">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`nav-link text-sm uppercase tracking-[0.2em] font-typewriter ${
                location.pathname === link.to
                  ? "after:w-full"
                  : ""
              }`}
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