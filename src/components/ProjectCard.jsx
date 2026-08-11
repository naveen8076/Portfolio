export default function ProjectCard({ project }) {
  const { title, category, description, features, tech, live, github } = project;

  return (
    <div className="project-card no-image">
      <div className="info-top">
        <span className="category-pill">{category.toUpperCase()}</span>
        <div className="card-links">
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className="icon-link">
              GitHub ↗
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noreferrer" className="icon-link">
              Live ↗
            </a>
          )}
        </div>
      </div>

      <h3>{title}</h3>
      <p className="description">{description}</p>

      {features && features.length > 0 && (
        <ul className="feature-list">
          {features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      )}

      <p className="tech-label">TECH STACK</p>
      <div className="tech-tags">
        {tech.map((t) => (
          <span key={t} className="tech-tag">{t}</span>
        ))}
      </div>
    </div>
  );
}