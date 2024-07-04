import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

import { GoStack } from "react-icons/go";
import { FiUsers, FiMonitor, FiServer } from "react-icons/fi";

const Services = () => {
  return (
    <section id="services" className="bg-brand bg-opacity-[0.03] lg:py-10">
      <div className="lg:h-screen max-w-7xl mx-auto lg:py-12 flex gap-10 flex-col lg:flex-row lg:gap-16 px-5">
        <div className="basis-1/3 lg:mt-32 ">
          <h2 className="text-4xl lg:text-6xl font-bold text-center lg:text-start mb-5 md:mb-10 bg-gradient-to-r from-brand to-white text-transparent bg-clip-text">
            Services
          </h2>
          <p className="text-center lg:text-start text-lg lg:text-xl ">
           These are some of the services I provide along side my team 
          </p>
          <Link href="/contact" className="group inline-block">
            <p className="mt-8  font-medium ">Request a custom service</p>
            <div className="w-1/6 h-[3px] mt-1 duration-300 group-hover:w-full rounded-md bg-brand" />
          </Link>
        </div>
        <div className="flex relative flex-wrap justify-between basis-2/3">
          <div className="absolute size-52 blur-3xl bg-brand opacity-20 top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]" />
          {services.map((item, index) => (
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (index + 1) * 0.1, duration: 0.5 }}
              key={index}
              className="md:basis-[48%] p-8 flex flex-col gap-5 bg-brand bg-opacity-15 hover:bg-opacity-100 hover:translate-y-[-10px] mt-5 duration-300 rounded-xl group cursor-pointer "
            >
              <div className=" group-hover:text-white duration-300">
                {item.icon}
              </div>
              <h3 className="text-2xl font-medium group-hover:text-white">
                {item.title}
              </h3>
              <p className="">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const services = [
  {
    title: "Graphic design",
    description:
      "Always trying to come up with new ideas in designing and challenging myself to get better results every time I work on a new project.",
    icon: <FiMonitor size={60} />,
  },
  {
    title: "Branding",
    description:
      "Branding a business could be very challenging cause there is alot of factors in play and it all affect the final result but we focus on delivering the massage of the brand at the end of the project.",
    icon: <FiUsers size={60} />,
  },
  {
    title: "Digital marketing",
    description:
      "Social media could be a great factor on scaling any business and we make sure to use it in the right way to ensure that we are reaching our maximum potentail",
    icon: <GoStack size={60} />,
  },
  {
    title: "Video Production",
    description:
      "Along side my production team at Seven we make sure that we get our message out there by creating visuals that can say alot about who made it ",
    icon: <FiServer size={60} />,
  },
];

export default Services;
