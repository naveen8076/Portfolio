import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CommandPalette({ open, onClose }) {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

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
    {
      label: "LeetCode",
      description: "View my LeetCode profile",
      action: () => {
        window.open(
          "https://leetcode.com/u/Naveen__21/",
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
    onClose();
  };

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setSearch("");
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  useEffect(() => {
    if (!open) {
      setSearch("");
    }
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="command-overlay"
      onClick={() => {
        setSearch("");
        onClose();
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
  );
}