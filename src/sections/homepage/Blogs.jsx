import React from "react";
import { FaCalendarAlt } from "react-icons/fa";

const Blogs = () => {
  return (
    <section className="pt-20 lg:py-20 relative">
      <div className="absolute size-52 blur-3xl bg-brand opacity-20 " />
      <div className="absolute size-52 blur-3xl bottom-0 right-0 bg-brand opacity-20 " />
      <h2 className="text-4xl lg:text-5xl font-bold text-center mb-2 md:mb-5 bg-gradient-to-r from-brand to-white text-transparent bg-clip-text">
        Recent Blogs
      </h2>
      <p className="max-w-2xl text-center text-lg mx-6 lg:mx-auto">
        Just a little chatting and writing out my thoughts and updates 
      </p>

      <div className="flex justify-center gap-14 mt-10 flex-col lg:flex-row">
        {blogs.map((item, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-xl mx-5 lg:w-1/4 aspect-[5/4] lg:aspect-square group cursor-pointer"
          >
            <img
              alt="blog cover"
              src={item.image}
              className="w-full h-full object-cover absolute group-hover:scale-105 group-hover:brightness-125 duration-300"
            />
            <div className="absolute bottom-5 rounded-2xl bg-[#2C1658] bg-opacity-70 group-hover:bg-opacity-100 duration-300 backdrop-blur-xl w-5/6 left-1/2 translate-x-[-50%]  p-4">
              <p className="text-brand font-medium flex items-center gap-1 mb-1">
                <FaCalendarAlt />
                {item.date}
              </p>
              <h3 className="font-bold text-lg">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const blogs = [
  {
    image: "https://themejunction.net/html/gerold/demo/assets/img/blog/1.jpg",
    title: "Top 20 UI/UX Designers",
    date: "Oct 01, 2022",
  },
  {
    image: "https://themejunction.net/html/gerold/demo/assets/img/blog/2.jpg",
    title: "Top 20 UI/UX Designers",
    date: "Oct 01, 2022",
  },
  {
    image: "https://themejunction.net/html/gerold/demo/assets/img/blog/3.jpg",
    title: "Top 20 UI/UX Designers",
    date: "Oct 01, 2022",
  },
];

export default Blogs;
