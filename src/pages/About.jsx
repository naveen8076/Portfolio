export default function About() {
  const experience = [
      {
  id: 1,
  role: "Software Engineering Intern",
  company: "Amdocs",
  duration: "Feb 2026 – Jun 2026",
  location: "On-site, Pune",
  points: [
    "Designed and automated a database refresh agentic workflow using n8n, reducing manual operational effort.",
    "Architected and deployed containerized backend microservices with Docker and Kubernetes, ensuring zero-downtime deployments.",
    "Built and maintained backend services and RESTful APIs using Node.js, owning business logic for internal automation tools.",
    "Designed LLM agent workflows connecting internal systems to AI-powered backend pipelines.",
  ],
    },
  ];

  const skills = {
    Languages: ["Java", "C++", "Python", "JavaScript", "HTML", "CSS"],
    "Backend & APIs": [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Passport.js",
      "JWT",
      "n8n",
    ],
    "Databases & ORMs": [
      "MongoDB",
      "PostgreSQL",
      "Prisma",
      "Mongoose",
    ],
    "DevOps & Tools": ["Docker", "Kubernetes", "Git"],
    Frontend: ["React.js", "Next.js", "Tailwind CSS"],
  };

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="hero small-hero">
        <span className="eyebrow">● ABOUT ME</span>

        <h1>
          Software Engineer
        </h1>

        <p className="hero-sub">
          Software Engineer and B.Tech graduate from Delhi Technological University. I build scalable full-stack applications, RESTful APIs, and cloud-native systems, with experience in React, Node.js, Docker, and Kubernetes. I also design AI-powered automation workflows using n8n, LangChain, and LangGraph.
        </p>

       <a
          href="https://drive.google.com/file/d/1zzeBCwl0NPlBZyc6xQGtQvKt1LApWJD0/view?usp=drive_link"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary"
          >
  View Resume ↗
</a>
      </section>

      {/* Experience */}
      <section className="home-section">
        <div className="section-head">
          <span className="eyebrow">● EXPERIENCE</span>
          <h2>Work History</h2>
        </div>

        <div className="timeline">
          {experience.map((exp) => (
            <div key={exp.id} className="timeline-item">
              <div className="timeline-dot" />

              <div className="timeline-content">
                <div className="timeline-head">
                  <h3>{exp.role}</h3>

                  <span className="timeline-date">
                    {exp.duration}
                  </span>
                </div>

                <p className="timeline-company">
                  {exp.company} · {exp.location}
                </p>

                <ul>
                  {exp.points.map((pt, i) => (
                    <li key={i}>{pt}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="home-section">
        <div className="section-head">
          <span className="eyebrow">● EDUCATION</span>
          <h2>Academic Background</h2>
        </div>

        <div className="edu-card">
          <h3>
            Delhi Technological University (DTU), New Delhi
          </h3>

          <p>
            B.Tech, Information Technology · 2022 – 2026 · CGPA: 7.84
          </p>
        </div>
      </section>

      {/* Skills */}
      <section className="home-section">
        <div className="section-head">
          <span className="eyebrow">● SKILLS</span>
          <h2>Technical Toolbox</h2>
        </div>

        <div className="skills-grid">
          {Object.entries(skills).map(([category, list]) => (
            <div key={category} className="skill-card">
              <h4>{category}</h4>

              <div className="tech-tags">
                {list.map((s) => (
                  <span key={s} className="tech-tag">
                    {s}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Achievements */}
      <section className="home-section">
        <div className="section-head">
          <span className="eyebrow">● ACHIEVEMENTS</span>
          <h2>Beyond Code</h2>
        </div>

        <ul className="achievements-list">
          <li>
            Mentor in the Desh Ke Mentor Program, guiding high school
            students.
          </li>

          <li>
            Solved 800+ DSA problems across LeetCode, Codeforces,
            and GeeksforGeeks.
          </li>

          <li>
            Treasurer, Paryavarnam (Environmental Society).
          </li>
          <li>
                State Awardee, Bharat Scouts and Guides.
          </li>
        </ul>
      </section>
    </div>
  );
}