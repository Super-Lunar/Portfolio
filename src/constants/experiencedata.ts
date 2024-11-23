export interface experience {
  year: string;
  role: string;
  company: string;
  description: string;
  technologies: string[];
}

export const experience: experience[] = [
  {
    year: "Nov 2024 - Present",
    role: " Frontend Developer Trainee",
    company: "Agonius",
    description: `Designed and developed user interfaces for web applications using React and TypeScript. Worked closely with backend developers to integrate frontend components with AWS APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["Typescript", "React.js", "TailwindCss"],
  },
  {
    year: "July 2024 - Oct 2024",
    role: "Full Stack Developer Trainee",
    company: "Deerwalk Compware",
    description: `Designed and developed full stack web application using React and ExpressJs. Developed Crud Operations for user, admin , products and reviews interfaces.`,
    technologies: ["ExpressJs", "React", "Mongodb"],
  },
];
