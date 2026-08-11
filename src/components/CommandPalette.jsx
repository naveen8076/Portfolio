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
      description: "Download my resume",
      action: () => {
        const link = document.createElement("a");
        link.href = "/Naveen_resume.pdf";
        link.download = "Naveen_Resume.pdf";
        link.click();
      },
    },
    {
      label: "GitHub",
      description: "View my GitHub",
      action: () =>
        window.open("https://github.com/naveen8076", "_blank"),
    },
    {
      label: "LinkedIn",
      description: "Connect with me on LinkedIn",
      action: () =>
        window.open(
          "https://www.linkedin.com/in/naveen-gupta-2103aug/",
          "_blank"
        ),
    },
  ];

  const filteredCommands = commands.filter((command) =>
    command.label.toLowerCase().includes(search.toLowerCase())
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
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="command-overlay" onClick={onClose}>
      <div
        className="command-palette"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="command-search">
          <span>⌕</span>

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
                <div className="command-icon">→</div>

                <div className="command-info">
                  <span>{command.label}</span>
                  <small>{command.description}</small>
                </div>
              </button>
            ))
          ) : (
            <div className="no-results">
              No commands found.
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