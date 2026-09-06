import { useState } from "react";
import { NavLink as RouterNavLink } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/logo-dga.png";
import { NAV_LINKS } from "../../data/navigation";
import { Container } from "./Container";
import { MobileMenu } from "./MobileMenu";
import { Button } from "../ui/Button";
import { useScrollThreshold } from "../../hooks/useScrollThreshold";
import { cn } from "../../lib/cn";
import { AnimatePresence } from "framer-motion";

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrollThreshold(100);

  return (
    <header
      className={cn(
        "sticky top-0 z-40 border-b border-line bg-surface/95 backdrop-blur transition-shadow duration-250 ease-standard",
        scrolled && "shadow-md",
      )}
    >
      <Container
        className={cn(
          "flex items-center justify-between transition-[height] duration-250 ease-standard",
          scrolled ? "h-20" : "h-24",
        )}
      >
        <RouterNavLink
          to="/"
          className="flex items-center gap-3"
          onClick={() => {
            setMobileOpen(false);
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
        >
          <img
            src={logo}
            alt="Digital Governance Africa"
            className={cn(
              "w-auto transition-[height] duration-250 ease-standard",
              scrolled ? "h-44" : "h-44",
            )}
          />
        </RouterNavLink>

        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <RouterNavLink
              key={link.to}
              to={link.to}
              end={link.to === "/"}
              className={({ isActive }) =>
                cn(
                  "relative py-1 text-sm font-medium transition-colors duration-200 ease-standard hover:text-gold",
                  "after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-gold after:transition-transform after:duration-300 after:ease-scroll hover:after:scale-x-100",
                  isActive
                    ? "font-semibold text-gold after:scale-x-100"
                    : "text-ink-muted",
                )
              }
            >
              {link.label}
            </RouterNavLink>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <Button to="/contact" variant="primary">
            Get in Touch
          </Button>
        </div>

        <button
          type="button"
          className="rounded-md p-2 text-navy lg:hidden"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? (
            <FiX aria-hidden size={24} />
          ) : (
            <FiMenu aria-hidden size={24} />
          )}
        </button>
      </Container>

      <AnimatePresence>
        {mobileOpen && <MobileMenu onNavigate={() => setMobileOpen(false)} />}
      </AnimatePresence>
    </header>
  );
}
