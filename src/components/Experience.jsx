import React from "react";
import { EXPERIENCES } from "../constants";

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <h2 className="my-20 text-center text-4xl">Projects</h2>
      <div>
        {EXPERIENCES.map((el, idx) => {
          return (
            <div key={idx} className="mb-8 flex flex-wrap lg:justify-center">
              <div className="w-full lg:w-1/4">
                <p className="mb-2 text-sm text-neutral-400">{el.year}</p>
              </div>
              <div className="w-full max-w-xl lg:w-3/4">
                <h6 className="mb-2 font-semibold">
                  {el.role} -{" "}
                  <span className="text-sm text-purple-100">{el.company}</span>
                </h6>
                <p className="mb-4 text-neutral-400">{el.description}</p>
                <div className="flex flex-wrap">
                  {el.technologies.map((t, idx) => {
                    return (
                      <span
                        className="mr-2 mt-4 rounded bg-neutral-900 py-1 px-2 text-sm font-medium text-purple-800"
                        key={idx}
                      >
                        {t}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Experience;