"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import elmur from "@/assets/elmur.jpg";
import { FaPhoneAlt } from "react-icons/fa";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="flex mt-10 lg:mt-0 text-white flex-col justify-center items-center relative text-2xl bg-black lg:h-screen">
      <div className="w-screen lg:h-screen object-cover object-top absolute z-0">
        <div className="bg-brand blur-3xl size-80 opacity-15" />
      </div>
      <div className="relative px-5 flex flex-col lg:flex-row lg:h-screen items-center w-full max-w-7xl mx-auto mt-20">
        <div className="w-full lg:w-2/3 ">
          <motion.div
            initial={{ y: -500, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5, delay: 1 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <h1 className="font-semibold text-3xl lg:text-4xl">
              It&apos;s Ibrahim Elmur
            </h1>
          </motion.div>
          <motion.div
            initial={{ y: -600, opacity: 0 }}
            transition={{ type: "spring", duration: 0.5, delay: 0.5 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <p className=" mb-5 bg-gradient-to-r from-brand to-white text-transparent bg-clip-text font-extrabold text-4xl lg:text-7xl">
              Full stack designer & entrepreneur
            </p>
          </motion.div>
          <div className=" my-10 mx-auto w-[80%] block  lg:hidden overflow-hidden border-gray-700 border-2 rounded-3xl rotate-6 hover:rotate-0 hover:border-brand hover:brightness-110 cursor-pointer duration-500 shadow-3xl">
            <Image src={elmur} alt="profile picture" className="object-fit h-full w-full" />
          </div>
          <motion.div
            initial={{ y: -600 }}
            transition={{ type: "spring", duration: 0.5, delay: 0.5 }}
            animate={{ y: 0 }}
          >
            <p className=" mb-5 text-xl">
              I try to find opportunities in any small growing bussiness to help it reach its full potential and scale to larger audience 
            </p>
          </motion.div>
          <motion.div
            initial={{ y: -700 }}
            transition={{ type: "spring", duration: 0.5 }}
            animate={{ y: 0 }}
          >
            <div className="flex items-center mt-10 gap-5 lg:gap-10 text-lg">
              <Link href="/contact" className="border-brand border-2 hover:bg-brand duration-300 rounded-full px-4 py-2  ">
                <FaPhoneAlt className="inline mr-2" />
                Contact me
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="h-[60vh] hidden lg:block overflow-hidden ml-auto mr-5 border-gray-700 border-2 rounded-3xl rotate-6 hover:rotate-0 hover:border-brand hover:brightness-110 cursor-pointer duration-500 shadow-3xl">
          <Image src={elmur} alt="profile picture" className="object-fit h-full w-full" />
        </div>
      </div>
    </section>
  );
}
