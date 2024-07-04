import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
//import logos

import shefae from "@/assets/shefaelogo.png";
import goldenCar from "@/assets/goldencar.png";
import esc from "@/assets/esclogo.png";

const Partners = () => {
  return (
    <section className="bg-brand bg-opacity-[0.02] relative py-10 overflow-hidden">
      <div className="absolute size-52 blur-3xl bg-brand opacity-20 " />
      <div className="absolute size-52 blur-3xl bg-brand opacity-20 bottom-0 right-0" />
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl mt-10 lg:mt-0 lg:text-5xl font-bold text-center mb-2 md:mb-5 bg-gradient-to-r from-brand to-white text-transparent bg-clip-text">
          Partners
        </h2>
        <p className="max-w-2xl text-center text-lg mx-6 lg:mx-auto">
          I have been honored to partner with this amazing companies and organizations 
        </p>
        <div className="flex gap-5 lg:gap-10 justify-center flex-wrap my-10">
          {partners.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-3 lg:gap-5 group min-w-56 max-w-[40%] text-center cursor-pointer"
            >
              <motion.div
                initial={{ y: 150, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "tween", delay: (index + 1) * 0.1 }}
                viewport={{ once: true }}
                className="aspect-square max-w-56 w-full p-8 rounded-3xl duration-300 bg-brand bg-opacity-5 border-2 border-brand border-opacity-50 group-hover:bg-opacity-25 group-hover:border-opacity-100 group-hover:shadow-3xl"
              >
                <Image
                  className="grayscale group-hover:grayscale-0 group-hover:scale-105 duration-300 "
                  src={item.logo}
                  alt={item.title}
                />
              </motion.div>
              <motion.h3
                initial={{ y: 100, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ type: "spring", delay: (index + 1) * 0.1 }}
                viewport={{ once: true }}
                className="font-bold text-brand text-xl lg:text-2xl"
              >
                {item.title}
              </motion.h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const partners = [
  { title: "Shefae", logo: shefae },
  { title: "Golden Car", logo: goldenCar },
  { title: "ESC", logo: esc },
];

export default Partners;
