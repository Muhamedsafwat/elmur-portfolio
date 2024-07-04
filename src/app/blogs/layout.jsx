import React from "react";
import SuggestedBlogs from "@/components/SuggestedBlogs";

const layout = ({ children }) => {
  return (
    <div className="flex max-w-7xl mt-20 lg:mt-32 mx-auto gap-10 px-5">
      {children}
      <SuggestedBlogs />
    </div>
  );
};

export default layout;
