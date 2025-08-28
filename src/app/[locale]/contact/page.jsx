import React from "react";
import Image from "next/image";

import { FiHeadphones, FiMail } from "react-icons/fi";
import { BiLogoLinkedin } from "react-icons/bi";

import contact from "@/assets/contact.jpg";
import ContactForm from "@/components/ContactForm";

import cover from "@/assets/contactcover.jpeg"
export const metadata = {
  title: "Elmur || Contact",
  description: "The contact page for my website containing all contact info",
};

const Contact = () => {
  return (
    <>
      <header className="relative h-[65vh]">
        <Image
          alt="contact us page cover"
          className="object-cover"
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          src={cover}
        />
        <div className="w-full h-full text-center bg-black bg-opacity-60 backdrop-blur-[2px] absolute flex flex-col justify-center items-center">
          <h1 className="text-5xl uppercase md:text-7xl font-black bg-gradient-to-r from-brand to-white text-transparent bg-clip-text">
            Contact Me
          </h1>
          <p className="text-gray-300 text-lg md:text-2xl tracking-[3px] mt-4">
            Let&apos;s get in touch
          </p>
        </div>
      </header>
      <section className="bg-brand bg-opacity-5">
        <div className="flex flex-col max-w-7xl px-5 py-20 pb-16 gap-[5rem] mx-auto lg:flex-row lg:py-28 lg:gap-10">
          {contactCards.map((item, index) => (
            <a key={index} className="flex-1" target="_blank" href={item.url}>
              <div className="relative  cursor-pointer group">
                <div className="bg-brand bg-opacity-10 backdrop-blur-md  w-[5rem] h-[5rem] text-main flex rounded-full border-4 border-brand absolute top-[-3rem] group-hover:bg-main group-hover:text-white duration-300 left-4 items-center justify-center">
                  {item.icon}
                </div>
                <div className="bg-black p-8 pt-10 rounded-lg shadow-3xl">
                  <h2 className="text-xl font-medium">{item.label}</h2>
                  <p className="text-lg mt-2">{item.text}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
      <section className="bg-black w-screen overflow-hidden">
        <div className="flex max-w-7xl w-screen items-center px-7 py-12 gap-16 mx-auto flex-col lg:flex-row lg:py-28">
          <div className="basis-3/5">
            <h2 className="text-5xl font-bold">Leave a message</h2>
            <p className="text-2xl mt-5">
              Have a question, need a custom service or want to leave a
              feedback? Feel free to drop me a message.
            </p>
            <ContactForm />
          </div>
          <div className="basis-2/5 relative h-[80vh] hidden lg:block">
            <Image
              src={contact}
              alt="laptop image"
              className="object-cover rounded-md"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      </section>
    </>
  );
};

const contactCards = [
  {
    icon: <FiHeadphones size={30} />,
    label: "Message me on Whatsapp",
    text: "+201028930205",
    url: "https://api.whatsapp.com/send?phone=201028930205&text=Hi%2C%20I%20have%20a%20question%20are%20you%20available%20to%20chat%3F",
  },
  {
    icon: <FiMail size={30} />,
    label: "Send me an email",
    text: "ibrahimelmurr@gmail.com",
    url: "mailto:ibrahimelmurr@gmail.com",
  },
  {
    icon: <BiLogoLinkedin size={30} />,
    label: "Follow me on Linkedin",
    text: "@ibrahimelmur",
    url: "https://www.linkedin.com/in/ibrahim-elmur-7296b4254/",
  },
];

export default Contact;
