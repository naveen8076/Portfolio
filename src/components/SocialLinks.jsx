export default function SocialLinks() {
  const links = [
    { name: "GitHub", url: "https://github.com/naveen8076" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/naveen-gupta-2103aug/" },
    { name: "LeetCode", url: "https://leetcode.com/u/Naveen_21/" },
  ];

  return (
    <div className="social-links">
      {links.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noreferrer"
        >
          {link.name}
        </a>
      ))}
    </div>
  );
}