import React from "react";
import { motion } from "framer-motion";
//import icons
import { FaAward, FaGraduationCap } from "react-icons/fa";

const Experinece = () => {
  return (
    <section className="max-w-7xl overflow-hidden mx-auto gap-10 lg:gap-20 flex flex-col lg:flex-row justify-between py-10 lg:py-20 px-3">
      <div className="w-full">
        <h2 className="mb-12 bg-gradient-to-r from-brand to-white text-transparent bg-clip-text font-extrabold text-3xl lg:text-5xl">
          <FaAward className="text-brand inline" />
          My Experience
        </h2>
        {cardsDataWork.map((item, index) => (
          <motion.div
            initial={{ x: -250, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            key={index}
            className=" relative my-5 rounded-2xl w-full overflow-hidden group cursor-pointer"
          >
            <div className="absolute z-0 bg-gradient-to-r from-brand to-white opacity-5 w-full h-full group-hover:opacity-70 duration-500" />
            <div className="space-y-1 lg:space-y-2 py-3 lg:py-5 px-5 lg:px-10 relative">
              <p className="text-brand text-lg lg:text-xl font-bold group-hover:text-white duration-500">
                {item.date}
              </p>
              <h3 className="font-bold text-xl lg:text-2xl">{item.title}</h3>
              <p className="lg:text-lg">{item.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="w-full">
        <h2 className="mb-12 bg-gradient-to-r from-brand to-white text-transparent bg-clip-text font-extrabold text-3xl lg:text-5xl">
          <FaGraduationCap className="text-brand inline" /> Education & Clubs
        </h2>
        {cardsDataEdu.map((item, index) => (
          <motion.div
            initial={{ x: 250, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            key={index}
            className=" relative my-5 rounded-2xl w-full overflow-hidden group cursor-pointer"
          >
            <div className="absolute z-0 bg-gradient-to-r from-brand to-white opacity-5 w-full h-full group-hover:opacity-70 duration-500" />
            <div className="space-y-1 lg:space-y-2 py-3 lg:py-5 px-5 lg:px-10 relative">
              <p className="text-brand text-lg lg:text-xl font-bold group-hover:text-white duration-500">
                {item.date}
              </p>
              <h3 className="font-bold text-xl lg:text-2xl">{item.title}</h3>
              <p className="lg:text-lg">{item.location}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

const cardsDataWork = [
  {
    date: "2022 - Present",
    title: "Media Excutive",
    location: "Shefae Care",
  },
  {
    date: "2023 - Present",
    title: "Chief Technology Officer",
    location: "Trust Plus",
  },
  {
    date: "2024 - Preset",
    title: "Marketing Manager",
    location: "Golden Car",
  },
];

const cardsDataEdu = [
  {
    date: "2023 - Present",
    title: "Member Registeration Member",
    location: "MIE",
  },
  {
    date: "2023 - Present",
    title: "Event Management Member",
    location: "IEEE ZSB",
  },
  {
    date: "2022 - Preset",
    title: "Computers & Systems Engineering",
    location: "Bachelor's degree || Zagazig Universiy",
  },
];

export default Experinece;
