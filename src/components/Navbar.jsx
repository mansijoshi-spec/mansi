import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const links = [
    { to: "/", label: "Home" },
    { to: "/work", label: "Work" },
    { to: "/about", label: "About" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 bg-bg transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="flex items-center justify-between px-8 md:px-[120px] py-6">
        <NavLink to="/">
          <img src={logo} alt="Mansi Joshi" className="h-[66px] w-[116px] object-contain" />
        </NavLink>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-14">
          {links.map(({ to, label }) => {
            const active =
              to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);
            return (
              <NavLink
                key={to}
                to={to}
                className="flex flex-col items-center gap-[2px] px-1 group"
              >
                <span
                  className={`text-[18px] leading-[27px] transition-colors duration-200 ${
                    active
                      ? "font-medium text-primary"
                      : "font-normal text-dark-grey group-hover:text-primary"
                  }`}
                >
                  {label}
                </span>
                <div
                  className={`h-[2px] rounded-full w-full bg-primary transition-opacity duration-200 ${
                    active ? "opacity-100" : "opacity-0 group-hover:opacity-40"
                  }`}
                />
              </NavLink>
            );
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-dark-grey"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-bg border-t border-pink-stroke/30 px-8 py-4 flex flex-col gap-4">
          {links.map(({ to, label }) => {
            const active =
              to === "/" ? location.pathname === "/" : location.pathname.startsWith(to);
            return (
              <NavLink
                key={to}
                to={to}
                className={`text-[18px] leading-[27px] transition-colors duration-200 ${
                  active ? "font-medium text-primary" : "font-normal text-dark-grey"
                }`}
              >
                {label}
              </NavLink>
            );
          })}
        </div>
      )}
    </nav>
  );
}
