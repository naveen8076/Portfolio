import { useState, useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [commandOpen, setCommandOpen] = useState(false);
  const [search, setSearch] = useState("");

  const navigate = useNavigate();

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
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === "k") {
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

  const commands = [
    {
      label: "Home",
      description: "Go to homepage",
      action: () => navigate("/"),
    },
    {
      label: "About",
      description: "Learn more about me",
      action: () => navigate("/about"),
    },
    {
      label: "Projects",
      description: "View my projects",
      action: () => navigate("/projects"),
    },
    {
      label: "Contact",
      description: "Get in touch",
      action: () => navigate("/contact"),
    },
    {
      label: "Download Resume",
      description: "Open my resume",
      action: () => {
        window.open(
          "https://drive.google.com/file/d/1zzeBCwl0NPlBZyc6xQGtQvKt1LApWJD0/view?usp=drive_link",
          "_blank",
          "noopener,noreferrer"
        );
      },
    },
    {
      label: "GitHub",
      description: "View my GitHub profile",
      action: () => {
        window.open(
          "https://github.com/naveen8076",
          "_blank",
          "noopener,noreferrer"
        );
      },
    },
    {
      label: "LinkedIn",
      description: "Connect with me on LinkedIn",
      action: () => {
        window.open(
          "https://www.linkedin.com/in/naveen-gupta-2103aug/",
          "_blank",
          "noopener,noreferrer"
        );
      },
    },
  ];

  const filteredCommands = commands.filter(
    (command) =>
      command.label.toLowerCase().includes(search.toLowerCase()) ||
      command.description.toLowerCase().includes(search.toLowerCase())
  );

  const executeCommand = (command) => {
    command.action();

    setSearch("");
    setCommandOpen(false);
    setOpen(false);
  };

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

      {commandOpen && (
        <div
          className="command-overlay"
          onClick={() => {
            setCommandOpen(false);
            setSearch("");
          }}
        >
          <div
            className="command-palette"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="command-search">
              <span className="search-symbol">⌕</span>

              <input
                autoFocus
                type="text"
                placeholder="Search portfolio..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <kbd>ESC</kbd>
            </div>

            <div className="command-list">
              {filteredCommands.length > 0 ? (
                filteredCommands.map((command) => (
                  <button
                    key={command.label}
                    className="command-item"
                    onClick={() => executeCommand(command)}
                  >
                    <span className="command-arrow">→</span>

                    <span className="command-info">
                      <strong>{command.label}</strong>
                      <small>{command.description}</small>
                    </span>
                  </button>
                ))
              ) : (
                <div className="command-empty">
                  No results found.
                </div>
              )}
            </div>

            <div className="command-footer">
              <span>
                <kbd>↵</kbd> Select
              </span>

              <span>
                <kbd>ESC</kbd> Close
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}