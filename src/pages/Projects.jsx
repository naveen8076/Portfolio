import { useState } from "react";
import { projects, categories } from "../data/projects";
import { Code2 } from "lucide-react";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <div className="projects-page">
      <section className="projects-hero">
        <span className="eyebrow">● MY WORK</span>
        <h1>
          Featured <span className="gradient-text">Projects</span>
        </h1>
        <p>
          A collection of projects that showcase my skills, problem-solving
          ability, and passion for building impactful solutions.
        </p>

        <div className="filter-pills">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`pill ${active === cat ? "active" : ""}`}
              onClick={() => setActive(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      <div className="projects-list">
        {filtered.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>

      <section className="projects-cta">
  <div className="cta-icon">
    <Code2 size={32} strokeWidth={2} />
  </div>

  <div className="cta-text">
    <h3>Have a project in mind?</h3>

    <p>
      I'm always open to discussing new opportunities and interesting projects.
    </p>
  </div>

  <a href="/contact" className="btn-primary">
    Let's Connect →
  </a>
</section>
    </div>
  );
}