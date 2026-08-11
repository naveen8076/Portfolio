export const projects = [
  {
    id: 1,
    title: "BuzzChat",
    category: "Full Stack",
    description:
      "Real-time chat application with live messaging and secure authentication.",
    features: [
      "Live messaging with Socket.IO + presence tracking",
      "JWT-based authentication",
      "Arcjet middleware for rate-limiting & bot protection",
    ],
    tech: ["Node.js", "Express", "Socket.IO", "MongoDB", "JWT", "Arcjet"],
    live: "",
    github: "https://github.com/naveen8076/BuzzChat",
  },
  {
    id: 2,
    title: "Fintelli",
    category: "Full Stack",
    description:
      "Personal finance platform with AI-assisted receipt processing.",
    features: [
      "Reduced CRUD latency 25% with Prisma + Supabase",
      "OCR + GPT-4 receipt extraction",
      "Secure auth & sessions via Clerk",
    ],
    tech: ["Node.js", "Supabase", "Prisma", "PostgreSQL", "Clerk"],
    live: "",
    github: "https://github.com/naveen8076/fintelli",
  },
  {
    id: 3,
    title: "Wanderlust",
    category: "Backend",
    description: "Secure RESTful API for property listings.",
    features: [
      "Passport.js JWT authentication flow",
      "Full Mongoose CRUD schema",
      "Server-rendered views with EJS",
    ],
    tech: ["Node.js", "Express", "MongoDB", "Passport.js", "EJS"],
    live: "",
    github: "https://github.com/naveen8076/wanderlust",
  },
];

export const categories = ["All", "Full Stack", "Backend", "Frontend", "Tools"];