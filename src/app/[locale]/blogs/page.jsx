import React from "react";
import Image from "next/image";
import {blogs} from "./blogs"
import Link from "next/link";
//import icons
import { FaRegUser, FaRegCalendarAlt } from "react-icons/fa";
const page = () => {
  return (
    <main className="w-full lg:w-2/3">
      {blogs.map((item, index) => (
        <Link href={`/blogs/${index}`} key={index}>
        < BlogCard {...item}/>
        </Link>
      ))}
    </main>
  );
};

const BlogCard = ({title, cover,tags,date}) => {
  return (
    <div className="rounded-lg overflow-hidden relative mb-8 bg-brand bg-opacity-10 shadow-3xl border-2 border-brand border-opacity-20 lg:group">
      <div className="w-full aspect-[2/1] overflow-hidden">
        <Image
          className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-110 duration-300"
          src={cover}
          alt="cover image"
        />
      </div>
      {/* content */}
      <div className="p-5 pt-0">
        <h1 className="text-lg lg:text-2xl mt-5 mb-2 font-bold ">
          {title}
        </h1>
        <div className="flex flex-col lg:flex-row justify-between">
          {/* date and author*/}
          <div className="flex gap-5 text-sm lg:text-base">
            <div className="flex items-center gap-1  cursor-pointer hover:text-brand duration-300">
              <FaRegCalendarAlt className="text-brand" />
              {date}
            </div>
            <div className="flex items-center gap-1  cursor-pointer hover:text-brand duration-300">
              <FaRegUser className="text-brand" />
              Admin
            </div>
          </div>
          {/* start tags */}
          <div className="mt-2 lg:mt-0 flex">
           {tags.map((item, index) => (
            <div key={index} className="text-xs lg:text-base px-3 py-1 inline-block m-1 rounded-full border-2 border-gray-500 cursor-pointer hover:bg-brand hover:border-brand duration-300">
            #{item}
          </div>
           ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
