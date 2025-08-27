"use client";
import React, { useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";

//import icons
import { FaChevronDown } from "react-icons/fa";
import { IoIosMenu, IoIosClose } from "react-icons/io";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [partnersVisible, setPartnersVisible] = useState(false);
  //change nav bar on scroll
  const [isTop, setIsTop] = useState(true);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest < 70) {
      setIsTop(true);
    } else {
      setIsTop(false);
    }
  });

  const listItemStyle = "hover:text-brand cursor-pointer duration-300";
  return (
    <header
      className={`py-5 px-5 fixed z-10 top-0 w-screen text-white duration-300 ${
        !isTop && "bg-black shadow-4xl backdrop-blur-md bg-opacity-90"
      }`}
    >
      {partnersVisible && (
        <div
          className="fixed top-0 left-0 w-screen h-screen"
          onClick={() => setPartnersVisible(false)}
        />
      )}

      <div
        className={`fixed z-0 duration-300 top-0 left-0 bg-black bg-opacity-15 backdrop-blur-sm w-screen h-screen ${
          isOpen ? "opacity-1" : "opacity-0 pointer-events-none	"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <h1 className="font-bold text-3xl">
          <Link href="/">
            Elmur<span className="text-brand">.</span>
          </Link>
        </h1>
        {/* desktop navbar */}
        <nav className="hidden lg:block">
          <ul className="flex gap-8 text-lg font-medium">
            <li className={listItemStyle}>
              <Link href="/">Home</Link>
            </li>
            {/* <li className={listItemStyle}>
              <Link href="/about">About</Link>
            </li> */}
            <div
              className="relative"
              onClick={() => setPartnersVisible(!partnersVisible)}
            >
              <li className=" flex items-center gap-1 hover:text-brand cursor-pointer duration-300">
                Projects <FaChevronDown />
              </li>
              <div
                className={`absolute bg-black rounded-lg p-5 w-60 text-white  duration-300 ${
                  partnersVisible
                    ? "top-10 opacity-100"
                    : "top-5 opacity-0 pointer-events-none"
                }`}
              >
                <ul className=" divide-y-2 [&>li]:py-2">
                  <li className={listItemStyle}>
                    <Link href="/projects/imtyaz">- Imtyaz</Link>
                  </li>
                  <li className={listItemStyle}>
                    <Link href="/projects/byteforce">- Byteforce</Link>
                  </li>
                  <li className={listItemStyle}>
                    <Link href="/projects/circle-investments">
                      - Circle investments
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <li className={listItemStyle}>
              <Link href="/blogs">Blog</Link>
            </li>
            <li className={listItemStyle}>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        {/* mobile drawer */}
        <nav className="lg:hidden">
          <button onClick={() => setIsOpen(true)}>
            <IoIosMenu size={30} />
          </button>
          <div
            className={`absolute z-20 bg-brand bg-opacity-20 backdrop-blur-xl h-screen w-1/2 top-0  p-5 duration-300 ease-in-out ${
              isOpen ? "right-0" : " right-[-100%]"
            } `}
          >
            <button
              className="ml-auto w-fit block"
              onClick={() => setIsOpen(false)}
            >
              <IoIosClose size={40} />
            </button>
            <ul className="space-y-5 text-lg font-medium">
              <li onClick={() => setIsOpen(false)} className={listItemStyle}>
                <Link href="/">Home</Link>
              </li>
              {/* <li className={listItemStyle}>
                <Link href="/about">About</Link>
              </li> */}
              <div
                className="relative"
                onClick={() => setPartnersVisible(!partnersVisible)}
              >
                <li className=" flex items-center gap-1 hover:text-brand cursor-pointer duration-300">
                  Projects <FaChevronDown />
                </li>
                <div
                  className={`duration-300 overflow-hidden ${
                    partnersVisible ? "h-32" : "h-0"
                  }`}
                >
                  <ul onClick={() => setIsOpen(false)} className=" [&>li]:py-2">
                    <li className={listItemStyle}>
                      <Link href="/projects/imtyaz">- Imtyaz</Link>
                    </li>
                    <li className={listItemStyle}>
                      <Link href="/projects/seven">- Seven</Link>
                    </li>
                    <li className={listItemStyle}>
                      <Link href="/projects/trust-plus">- Trust Plus</Link>
                    </li>
                  </ul>
                </div>
              </div>
              <li onClick={() => setIsOpen(false)} className={listItemStyle}>
                <Link href="/blogs">Blog</Link>
              </li>
              <li onClick={() => setIsOpen(false)} className={listItemStyle}>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;
