import { PROJECTS } from "../constants";
import { motion } from "framer-motion";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div className="border-b pb-4 border-neutral-900">
      <motion.h2
        initial={{ y: -100, opacity: 0 }}
        transition={{
          duration: 1.5,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        className="my-20 text-center text-4xl"
      >
        Projects
      </motion.h2>
      <div>
        {PROJECTS.map((el, idx) => {
          return (
            <div key={idx} className="mb-8 flex flex-wrap lg:justify-center">
              <motion.div
                initial={{ x: -100, opacity: 0 }}
                transition={{
                  duration: 1.5,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                className="w-full lg:w-1/4"
              >
                <img
                  src={el.image}
                  alt=""
                  width={200}
                  height={200}
                  className="mb-6 rounded w-full md:w-[230px]"
                />
              </motion.div>
              <motion.div
                initial={{ x: 100, opacity: 0 }}
                transition={{
                  duration: 1.5,
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                }}
                className="w-full max-w-xl lg:w-3/4"
              >
                <div className="flex justify-between items-center">
                  <h6 className="mb-2 font-semibold">{el.title}</h6>
                  <div className="flex gap-4 text-lg text-neutral-400 mb-2">
                    <a
                      href={el.link}
                      target="_blank"
                      className="hover:text-purple-500"
                    >
                      <FaExternalLinkAlt />
                    </a>
                    <a
                      href={el.repo}
                      target="_blank"
                      className="hover:text-white"
                    >
                      <FaGithub />
                    </a>
                  </div>
                </div>
                <p className="mb-4 text-neutral-400">{el.description}</p>
                <div className="flex flex-wrap">
                  {el.technologies.map((el, idx) => {
                    return (
                      <span
                        className="mr-2 mt-4 rounded bg-neutral-900 py-1 px-2 text-sm font-medium text-purple-800"
                        key={idx}
                      >
                        {el}
                      </span>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
