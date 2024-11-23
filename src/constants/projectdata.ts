export interface Project {
  title: string;
  description: string;
  technologies: string[];
}

export const project: Project[] = [
  {
    title: "EVOGYM",
    description: "A gym frontend website for fitness lovers.",
    technologies: ["React", "TailwindCSS", "TypeScript"],
  },
  {
    title: "CRUD APP",
    description: "An application for crud operations.",
    technologies: ["React", "CSS", "ExpressJs", "MongoDb"],
  },
  {
    title: "Portfolio Website",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "TypeScript", "TailwindCss"],
  },
  {
    title: "Image Steganography",
    description: "A tool for hiding text in R-channel of image.",
    technologies: ["Python", "PIL", "Numpy", "Bash64"],
  },
];
