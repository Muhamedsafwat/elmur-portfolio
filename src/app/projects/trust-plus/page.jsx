"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import cover from "@/assets/trustcover.png"

const page = () => {
  return (
    <div>
      <section className="bg-brand bg-opacity-5 relative  overflow-hidden">
        <div className="absolute h-full w-full top-0 z-0">
          <Image alt="cover image" src={cover} className="object-cover w-full object-center" />
        </div>
        <div className="w-full h-full bg-black relative backdrop-blur-sm py-24 lg:py-44 bg-opacity-50">
          <div className="max-w-7xl mx-auto text-center ">
            <h1 className=" text-5xl lg:text-[6rem] font-bold text-center bg-gradient-to-r from-brand to-white text-transparent bg-clip-text">
              Trust Plus
            </h1>
            <p className="text-xl lg:text-2xl font-medium text-gray-300 tracking-widest">
              BUY YOUR NEXT HOME
            </p>
          </div>
        </div>
      </section>

      <CounterSection />
      <OurStory />
      <Contact />
    </div>
  );
};

//-------------Counter section-------------
const CounterSection = () => {
  const stats = [
    {
      number: 70,
      text: "Partners",
    },
    
    {
      number: 30,
      text: "Videos created",
    },
  ];

  return (
    <section className="w-[70vw] lg:w-fit bg-black border-2 border-brand p-10 rounded-2xl translate-y-[-2rem] mx-auto flex gap-5 lg:gap-10 justify-center shadow-3xl flex-wrap  ">
      {stats.map((item, index) => (
        <div className="flex gap-1 items-center" key={index}>
          <p className="text-4xl font-bold">
            <CountUp end={item.number} duration={5} />+
          </p>
          <p className="max-w-24 leading-none text-xl">{item.text}</p>
        </div>
      ))}
    </section>
  );
};

//-------------Story section-----------------
const OurStory = () => {
  const storylines = [
    "Trust plus is originaly a branch of the main company Trust for Design",
    "Trust has been in the market of designing arch. for over a decade now and the founder and ceo of it thought about moving to real estate",
    "With Eng. Amr Elmur we started working on the project and the basis of it to ensure sustainablity on the long run ",
    "We always try to improve and innovate to change the way the market is today to a better more easy and comfortable experience for both the broker and the client",
  ]
  return (
    <section className="flex px-5 flex-col items-center my-20 max-w-3xl mx-auto">
      <h2 className="text-5xl font-bold text-center bg-gradient-to-r from-brand to-white text-transparent bg-clip-text">
        Who are we ?
      </h2>
      <ul className="mt-16">
        {storylines.map((item, index) => (
          <div key={index} className="flex gap-5 group">
            <div className="flex flex-col items-center">
              <div className="size-5 rounded-full border-2 border-brand bg-black group-hover:scale-150 duration-300" />
              <div className=" w-1 bg-brand flex-1" />
            </div>
            <motion.li
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: (index + 1) * 0.1 }}
              viewport={{ once: true }}
              className={`font-medium text-xl mb-12 ${
                index == storylines.length - 1 && "mb-0"
              }`}
            >
              {item}
            </motion.li>
          </div>
        ))}
      </ul>
    </section>
  );
};

//---------------contact form---------------
const Contact = () => {
  const inputStyle =
    "bg-black border-[1px] border-gray-800 rounded-lg px-4 py-2 text-white w-full my-2 outline-none focus:border-brand duration-300 text-lg";
  return (
    <section
      id="services"
      className=" bg-opacity-[0.03] pt-10 overflow-hidden relative"
    >
      <div className="absolute size-52 blur-3xl bg-brand opacity-20 " />
      <div className="absolute size-52 blur-3xl bg-brand opacity-20 bottom-0 right-0" />
      <div className=" max-w-7xl mx-auto py-12 flex items-start gap-10 flex-col lg:flex-row-reverse lg:gap-16 px-5">
        <div className="basis-1/2 lg:mt-20 ">
          <h2 className="text-5xl font-bold mb-5 md:mb-10 bg-gradient-to-r from-brand to-white text-transparent bg-clip-text">
            Contact us!
          </h2>
          <p className="text-xl ">
            If you are interested in finding your new unit with us or you have a unit you want to sell please let us know
          </p>
        </div>
        <div className="flex relative flex-wrap justify-between basis-2/3">
          <form className="p-5 lg:p-10 rounded-lg bg-brand bg-opacity-5 border-[1px] border-brand border-opacity-50">
            <h2 className="text-3xl font-bold mb-2 bg-gradient-to-r from-brand to-white text-transparent bg-clip-text">
              Fill out the form and join us
            </h2>
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="First name"
                className={inputStyle}
              />
              <input
                type="text"
                placeholder="Last name"
                className={inputStyle}
              />
            </div>
            <div className="flex gap-2">
              <input type="text" placeholder="Email" className={inputStyle} />
              <input
                type="text"
                placeholder="Phone number"
                className={inputStyle}
              />
            </div>
            <select name="role" id="role" className={inputStyle}>
              <option value="owner">Owner</option>
              <option value="buyer">Buyer</option>
            </select>
            <textarea
              name=""
              id=""
              cols="30"
              rows="7"
              placeholder="Leave a message"
              className={inputStyle}
            />
            <button className="border-brand border-2 hover:bg-brand duration-300 rounded-full px-6 py-3  ">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default page;
