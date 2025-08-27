import React from "react";
import { motion } from "framer-motion";
//import icons
//mport images
import imtyaz from "@/assets/imtyaz.png";
import seven from "@/assets/seven.png";
import trust from "@/assets/TrustPlus.png";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  return (
    <section className="flex overflow-hidden flex-col items-center py-10 lg:py-16 bg-abstract relative">
      <div className="absolute top-0 z-0 w-full h-full bg-black opacity-80" />
      <div className="text-center relative">
        <h2 className="text-4xl mt-10 lg:mt-0 lg:text-5xl font-bold text-center mb-2 md:mb-5 bg-gradient-to-r from-brand to-white text-transparent bg-clip-text">
          Projects
        </h2>
        <p className="max-w-2xl text-center text-lg mx-6 lg:mx-auto">
          These are the projects I worked on along side my team and developed it
          from scratch to where it is today
        </p>
      </div>
      <div className="space-y-20 lg:space-y-32 relative mt-20">
        {projects.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col-reverse items-center gap-5 max-w-4xl mx-auto relative group ${
              (index + 1) % 2 == 0 ? "lg:flex-row-reverse" : "lg:flex-row"
            }`}
          >
            <motion.div
              initial={{ x: (index + 1) % 2 == 0 ? 200 : -200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4, delay: 0 }}
              viewport={{
                once: true,
              }}
              className="text-center lg:text-start px-10"
            >
              <h3 className="text-3xl lg:text-6xl font-bold mb-5 lg:mb-10">
                {item.title}
              </h3>

              <p className="text-sm lg:text-base">{item.description}</p>

              <Link
                href={`/projects/${item.title
                  .toLocaleLowerCase()
                  .replace(" ", "-")}`}
                className="w-fit"
              >
                <p className="mt-5 text-brand text-xl hover:underline">
                  About {item.title}
                </p>
              </Link>
            </motion.div>
            <motion.div
              initial={{ x: (index + 1) % 2 == 0 ? -200 : 200, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              viewport={{
                once: true,
              }}
              className={`bg-gradient-to-tl  from-brand to-white rounded-xl  p-1 `}
            >
              <div className="bg-black size-60 lg:size-72 flex items-center rounded-lg justify-center">
                <Image
                  alt={item.title}
                  src={item.image}
                  className="object-fit size-52 lg:size-64 group-hover:scale-105  grayscale duration-300 group-hover:grayscale-0"
                />
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

const projects = [
  {
    image: imtyaz,
    title: "Imtyaze",
    description:
      "We try in Imtyaz to improve the learning experience that our students have by enhancing the material with animations and graphics that help the understanding process and make it all over fun experience ",
  },
  {
    image: seven,
    title: "Byteforce",
    description:
      "In our production team we always focus on producing the most out of what it avaliable and create something that we are as a team very proud to share to the world ",
  },
  {
    image: trust,
    title: "Circle investments",
    description:
      "We always focus in Circle to innovate and create new ways and ideas that transform the real estate market and elevate our company and achieve our vision",
  },
];

export default Projects;
