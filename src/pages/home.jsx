import { Link } from "react-router-dom";
import { projects } from "../data/projects";

export default function Home() {
  const featured = projects.slice(0, 2);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <span className="eyebrow">● AVAILABLE FOR OPPORTUNITIES</span>

        <h1>
          Hi, I'm <span className="gradient-text">Naveen</span>
        </h1>

        <p className="hero-sub">
          Software Engineer specializing in full-stack development, backend systems, and AI automation. Experienced in building scalable applications, APIs, and cloud-native services, along with designing AI-powered workflows using n8n.
        </p>

        <div className="hero-actions">
          <Link to="/projects" className="btn-primary">View Projects →</Link>
          <Link to="/contact" className="btn-outline">Get in Touch</Link>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <p className="stat-num">800+</p>
            <p className="stat-label">DSA Problems Solved</p>
          </div>
          <div className="stat">
            <p className="stat-num">3+</p>
            <p className="stat-label">Full-Stack Projects</p>
          </div>
          <div className="stat">
            <p className="stat-num">1</p>
            <p className="stat-label">Industry Internship</p>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="home-section">
        <div className="section-head">
          <span className="eyebrow">● FEATURED WORK</span>
          <h2>Recent Projects</h2>
        </div>

        <div className="featured-grid">
          {featured.map((p) => (
            <div key={p.id} className="mini-card no-image">
              <span className="category-pill">{p.category.toUpperCase()}</span>
              <h3>{p.title}</h3>
              <p>{p.description}</p>
              <div className="mini-tech-tags">
                {p.tech.slice(0, 4).map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="section-cta">
          <Link to="/projects" className="btn-outline">See All Projects →</Link>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="home-cta">
        <div className="cta-icon"></div>
        <div className="cta-text">
          <h3>Have a project in mind?</h3>
          <p>I'm always open to discussing new opportunities and interesting projects.</p>
        </div>
        <Link to="/contact" className="btn-primary">Let's Connect →</Link>
      </section>
    </div>
  );
}