import React from "react";
import { RiReactjsLine } from "react-icons/ri";
import { RiJavascriptLine } from "react-icons/ri";
import { RiHtml5Line } from "react-icons/ri";
import { RiCss3Line } from "react-icons/ri";
import { RiNextjsLine } from "react-icons/ri";
import { IoLogoSass } from "react-icons/io";
import { RiTailwindCssLine } from "react-icons/ri";
import { BiLogoRedux } from "react-icons/bi";
import { TbBrandVite } from "react-icons/tb";

const Technologies = () => {
  return (
    <div className="border-b border-neutral-900 pb-24">
      <h2 className="my-20 text-center text-4xl">Technologies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiReactjsLine className="text-6xl text-cyan-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiJavascriptLine className="text-6xl text-yellow-400" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiHtml5Line className="text-6xl text-orange-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiCss3Line className="text-6xl text-blue-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiNextjsLine className="text-6xl text-neutral-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <IoLogoSass className="text-6xl text-pink-700" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <RiTailwindCssLine className="text-6xl text-teal-500" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <BiLogoRedux className="text-6xl text-purple-600" />
        </div>
        <div className="rounded-2xl border-4 border-neutral-800 p-4">
          <TbBrandVite className="text-6xl text-yellow-300" />
        </div>
      </div>
    </div>
  );
};

export default Technologies;
