import React from "react";
import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";
const Education = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
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
        Education
      </motion.h2>
      <div>
        <div className="mb-8 flex flex-wrap lg:justify-center">
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
            <p className="mb-2 text-sm text-neutral-400">2020 - 2024</p>
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
            <h6 className="mb-2 font-semibold">
              Faculty of computer and artificial intelligence -
              <span className="text-sm text-purple-100"> benha university</span>
            </h6>
            <p className="mb-4 text-neutral-400">
              computer science department (gpa:3.49)
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Education;
