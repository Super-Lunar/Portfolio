import { Project } from "../../constants/projectdata";

type Props = {
  project: Project[];
};

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
      {project.map((prj, i) => (
        <div
          className="p-4 bg-black border-2 border-stone-300 rounded-xl w-full h-[250px] flex flex-col justify-between"
          key={i}
        >
          <div className="w-full flex flex-col justify-between h-full">
            <h3 className="mb-2 font-semibold text-2xl">{prj.title}</h3>

            <p className="flex-grow mb-4 text-stone-400">{prj.description}</p>

            <div className="flex flex-wrap justify-center ">
              {prj.technologies.map((tech, index) => (
                <div
                  className="mr-2 mt-2 bg-stone-900 p-2 text-xs font-medium text-stone-300 border-[1px] border-stone-300 rounded-xl"
                  key={index}
                >
                  {tech}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectCard;
