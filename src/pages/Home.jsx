import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { Terminal } from "lucide-react";

export default function Home() {
  const featured = projects.slice(0, 2);

  return (
    <div className="home-page">

      {/* ================= HERO ================= */}

      <section className="hero">
        <span className="eyebrow">
          ● AVAILABLE FOR OPPORTUNITIES
        </span>

        <h1>
          Hi, I'm <span className="gradient-text">Naveen</span>
        </h1>

        <p className="hero-sub">
          Software Engineer focused on full-stack development,
          backend systems, and AI automation. I build scalable
          applications, APIs, and cloud-native solutions.
        </p>

        <div className="hero-actions">
          <Link to="/projects" className="btn-primary">
            View Projects →
          </Link>

          <Link to="/contact" className="btn-outline">
            Get in Touch
          </Link>
        </div>

        {/* Stats */}

        <div className="hero-stats">

          <div className="stat">
            <p className="stat-num">800+</p>
            <p className="stat-label">
              DSA Problems Solved
            </p>
          </div>

          <div className="stat">
            <p className="stat-num">3+</p>
            <p className="stat-label">
              Projects Built
            </p>
          </div>

          <div className="stat">
            <p className="stat-num">1</p>
            <p className="stat-label">
              Industry Internship
            </p>
          </div>

        </div>
      </section>


      {/* ================= FEATURED PROJECTS ================= */}

      <section className="home-section">

        <div className="section-head">
          <span className="eyebrow">
            ● FEATURED WORK
          </span>

          <h2>
            Recent Projects
          </h2>
        </div>

        <div className="featured-grid">

          {featured.map((project) => (
            <div
              key={project.id}
              className="mini-card no-image"
            >

              {/* Category */}

              <span className="category-pill">
                {project.category}
              </span>

              {/* Title */}

              <h3>
                {project.title}
              </h3>

              {/* Description */}

              <p>
                {project.description}
              </p>

              {/* Technologies */}

              <div className="mini-tech-tags">
                {project.tech.slice(0, 4).map((tech) => (
                  <span key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

            </div>
          ))}

        </div>

        <div className="section-cta">
          <Link
            to="/projects"
            className="btn-outline"
          >
            See All Projects →
          </Link>
        </div>

      </section>


      {/* ================= CTA ================= */}

      <section className="home-cta">

  <div className="cta-icon">
    <Terminal size={32} strokeWidth={2} />
  </div>

  <div className="cta-text">
    <h3>
      Have an opportunity in mind?
    </h3>

    <p>
      I'm open to software engineering roles,
      interesting projects, and collaboration.
    </p>
  </div>

  <Link
    to="/contact"
    className="btn-primary"
  >
    Let's Connect →
  </Link>

</section>
    </div>
  );
}