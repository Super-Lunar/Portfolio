import { experience } from "../constants/experiencedata";

const Experience = () => {
  return (
    <div className='pb-4'>
      <h2 className='my-20 text-center text-4xl'>Experience</h2>
      <div>
        {experience.map((exp, i) => (
          <div key={i} className='mb-8 flex flex-wrap gap-4 lg:justify-center'>
            <div className='w-full lg:w-1/4 text-sm text-stone-400 mt-12'>{exp.year}</div>

            <div className='w-full max-w-xl lg:w-3/4'>
              <h3 className='mb-2 font-semibold'>
                {exp.role}{" "}
                <span className='text-sm font-normal text-stone-500'>- {exp.company}</span>
              </h3>
              <p className='mb-4 text-stone-400'>{exp.description}</p>

              <div className='flex flex-wrap gap-2'>
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className='rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300 border border-stone-300'
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
