import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Contact", href: "#contact" },
];

export const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const withBaseHash = (hash) => {
    if (!hash || !hash.startsWith("#")) return hash;
    const base = import.meta.env.BASE_URL || "/";
    // ensure trailing slash on base
    const normalizedBase = base.endsWith("/") ? base : `${base}/`;
    return `${normalizedBase}${hash}`;
  };

  const handleAnchorNav = (e, hash) => {
    if (!hash?.startsWith("#")) return;

    const target = document.querySelector(hash);
    if (target) {
      e.preventDefault(); // keep SPA behavior, no full navigation
      target.scrollIntoView({ behavior: "smooth", block: "start" });

      // update address bar to include base + hash (good for refresh/copy URL on GH Pages)
      const base = import.meta.env.BASE_URL || "/";
      const normalizedBase = base.endsWith("/") ? base : `${base}/`;
      // If already on the same page, just swap the hash; avoids reloading
      history.replaceState(null, "", `${normalizedBase}${hash}`);

      // close mobile menu after navigating
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
      )}
    >
      <div className="container flex items-center justify-between">
        <a
          className="text-xl font-bold text-primary flex items-center"
          href={withBaseHash("#hero")}
          onClick={(e) => handleAnchorNav(e, "#hero")}
        >
          <span className="relative z-10">
            <span className="text-glow text-foreground">
              {" "}
              Dylan McClellan's
            </span>{" "}
            Portfolio
          </span>
        </a>

        {/* desktop nav */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={withBaseHash(item.href)}
              onClick={(e) => handleAnchorNav(e, item.href)}
              className="text-foreground/80 hover:text-primary transition-colors duration-300"
            >
              {item.name}
            </a>
          ))}
        </div>
        {/*mobile nav */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className="md:hidden p-2 text-foreground z-50"
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {" "}
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}{" "}
        </button>

        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={withBaseHash(item.href)}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={(e) => handleAnchorNav(e, item.href)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
