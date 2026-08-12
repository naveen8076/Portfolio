import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import CommandPalette from "./CommandPalette";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleShortcut = (e) => {
      if (
        (e.ctrlKey || e.metaKey) &&
        e.key.toLowerCase() === "k"
      ) {
        e.preventDefault();
        setCommandOpen(true);
      }

      if (e.key === "Escape") {
        setCommandOpen(false);
      }
    };

    window.addEventListener("keydown", handleShortcut);

    return () => {
      window.removeEventListener("keydown", handleShortcut);
    };
  }, []);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/projects", label: "Projects" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <>
      <header className={`site-header ${scrolled ? "scrolled" : ""}`}>
        <nav className="navbar">

          <NavLink
            to="/"
            className="logo"
            onClick={() => setOpen(false)}
          >
            <span className="logo-mark">N</span>
            <span className="logo-text">NAVEEN</span>
          </NavLink>

          <div className={`nav-links ${open ? "open" : ""}`}>
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === "/"}
                className={({ isActive }) =>
                  `nav-link ${isActive ? "active" : ""}`
                }
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="nav-actions">
            <ThemeToggle />

            <button
              className="command-trigger"
              onClick={() => setCommandOpen(true)}
              aria-label="Open command palette"
            >
              <span className="search-icon">⌕</span>
              <kbd>Ctrl K</kbd>
            </button>

            <a
              href="https://drive.google.com/file/d/1zzeBCwl0NPlBZyc6xQGtQvKt1LApWJD0/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary nav-resume"
            >
              Resume
            </a>

            <button
              className={`nav-toggle ${open ? "active" : ""}`}
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              <span />
              <span />
              <span />
            </button>
          </div>

        </nav>
      </header>

      <CommandPalette
        open={commandOpen}
        onClose={() => setCommandOpen(false)}
      />
    </>
  );
}