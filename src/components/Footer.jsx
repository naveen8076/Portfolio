export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h3>Naveen</h3>
          <p>
           Software Engineer focused on full-stack development, backend systems, and AI automation.
          </p>
          <a href="mailto:naveengupta2103@gmail.com" className="footer-email-btn">
            Say hello ↗
          </a>
        </div>

        <div className="footer-col">
          <p className="footer-heading">Connect</p>
          <a href="https://github.com/naveen8076" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/naveen-gupta-2103aug/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://leetcode.com/u/Naveen_21/" target="_blank" rel="noreferrer">LeetCode</a>
        </div>

        <div className="footer-col">
          <p className="footer-heading">Contact</p>
          <a href="mailto:naveengupta2103@gmail.com">naveengupta2103@gmail.com</a>
          <p className="footer-location">Delhi, India</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Naveen. All rights reserved.</p>
        <a href="#top" className="back-to-top">Back to top ↑</a>
      </div>
    </footer>
  );
}