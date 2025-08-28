import React from "react";
import Image from "next/image";
import cover from "@/assets/podcast.png";
//import icons
import { FaRegUser, FaRegCalendarAlt } from "react-icons/fa";
import { blogs } from "../blogs";

const page = ({ params }) => {
  const { index } = params;
  const blogData = blogs[index]
  return (
    <main className="lg:w-2/3">
      <header className="rounded-t-lg overflow-hidden relative mb-8">
        <div className="w-full aspect-[2/1] overflow-hidden">
          <Image
            className="w-full h-full object-cover"
            src={blogData.cover}
            alt="cover image"
          />
        </div>
        <div className="flex mt-5 gap-7">
          <div className="flex items-center gap-1 cursor-pointer hover:text-brand duration-300">
            <FaRegUser className="text-brand " />
            By Admin
          </div>
          <div className="flex items-center gap-1 cursor-pointer hover:text-brand duration-300">
            <FaRegCalendarAlt className="text-brand" />
            {blogData.date}
          </div>
        </div>
      </header>
      <h1 className="text-2xl lg:text-4xl font-bold mb-6">{blogData.title}</h1>
      <p className="lg:text-xl text-gray-200">
        {blogData.body}
      </p>
    </main>
  );
};

export default page;
