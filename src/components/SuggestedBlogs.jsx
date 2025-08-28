import React from "react";
import Image from "next/image";
import Link from "next/link";
//import icons
import { FaRegUser, FaRegCalendarAlt } from "react-icons/fa";
import { blogs } from "@/app/[locale]/blogs/blogs";

const SuggestedBlogs = () => {
  return (
    <aside className="hidden lg:block w-1/3 space-y-10 sticky h-fit top-24">
      <div className="bg-brand bg-opacity-10 p-5 rounded-lg shadow-2xl">
        <h2 className="text-2xl font-bold">RECENT POSTS</h2>
        {blogs.map((item, index) => (
          <Link key={index} href={`/blogs/${index}`}>
            <div className="flex mt-6 gap-2 hover:text-brand duration-300 cursor-pointer">
              <Image
                src={item.cover}
                alt={item.title}
                className="size-20 object-cover rounded-xl"
              />
              <div className="flex flex-col justify-start">
                <div className="flex items-center gap-1">
                  <FaRegCalendarAlt className="text-brand" />
                  {item.date}
                </div>
                <h2 className="font-bold text-lg line-clamp-2">{item.title}</h2>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="bg-brand bg-opacity-10 p-5 rounded-lg shadow-2xl">
        <h2 className="text-2xl font-bold mb-5">POPULAR TAGS</h2>
        {tags.map((item, index) => (
          <div
            key={index}
            className="px-4 py-2 inline-block m-1 rounded-full border-2 border-gray-500 cursor-pointer hover:bg-brand hover:border-brand duration-300"
          >
            #{item}
          </div>
        ))}
      </div>
    </aside>
  );
};

const tags = ["Business", "Technology", "Finance", "Desgin", "Marketing"];

export default SuggestedBlogs;
