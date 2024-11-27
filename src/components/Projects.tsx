import { motion } from "framer-motion";
import { project } from "../constants/projectdata";
import ProjectCard from "./cards/ProjectCard";

const Projects = () => {
  return (
    <motion.section className="pb-4" id="projects">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <ProjectCard project={project} />
      </motion.div>
    </motion.section>
  );
};

export default Projects;
