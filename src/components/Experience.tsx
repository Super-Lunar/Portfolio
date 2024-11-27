import { motion } from "framer-motion";
import { experience } from "../constants/experiencedata";

const Experience = () => {
  return (
    <div className="pb-4" id="experience">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 1.5 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>

      <div>
        {experience.map((exp, i) => (
          <motion.div
            key={i}
            className="mb-8 flex flex-wrap gap-4 lg:justify-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: i * 0.2 }}
          >
            <motion.div
              className="w-full lg:w-1/4 text-sm text-stone-400 mt-12"
              initial={{ x: -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: i * 0.2 }}
            >
              {exp.year}
            </motion.div>

            <motion.div
              className="w-full max-w-xl lg:w-3/4"
              initial={{ x: 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 1, delay: i * 0.3 }}
            >
              <h3 className="mb-2 font-semibold">
                {exp.role}{" "}
                <span className="text-sm font-normal text-stone-500">- {exp.company}</span>
              </h3>
              <p className="mb-4 text-stone-400">{exp.description}</p>

              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="rounded bg-stone-900 px-2 py-1 text-sm font-medium text-stone-300 border border-stone-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
