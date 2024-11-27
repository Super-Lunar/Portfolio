import { Project } from "../../constants/projectdata";

type Props = {
  project: Project[];
};

const ProjectCard = ({ project }: Props) => {
  return (
    <div className='flex'>
      {project.map((prj, i) => (
        <div
          className='mb-8 flex p-4 bg-black border-2 border-stone-300 rounded-xl mr-8 w-full h-[250px] flex-col justify-between'
          key={i}
        >
          <div className='w-full flex flex-col justify-between h-full'>
            <h3 className='mb-2 font-semibold text-2xl'>{prj.title}</h3>

            <p className='flex-grow mb-4 text-stone-400'>{prj.description}</p>

            <div className='flex flex-wrap '>
              {prj.technologies.map((tech, index) => (
                <div
                  className='mr-2  bg-stone-900 p-2 text-xs font-medium text-stone-300  border-2 border-stone-300 rounded-xl  '
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
