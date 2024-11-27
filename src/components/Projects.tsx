import { project } from "../constants/projectdata";
import ProjectCard from "./cards/ProjectCard";

const Projects = () => {
  return (
    <section>
      <div className="pb-4">
        <h2 className="my-20 text-center text-4xl">Projects</h2>
        <ProjectCard project={project} />
      </div>
    </section>
  );
};

export default Projects;
