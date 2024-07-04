import React from "react";
//import icons
import { FaFacebook, FaInstagram, FaLinkedin, FaTiktok } from "react-icons/fa";

const Footer = () => {
  const links = [
    {
      icon: <FaFacebook size={20} />,
      url: "https://www.facebook.com/profile.php?id=100012363060536",
    },
    {
      icon: <FaInstagram size={20} />,
      url: "https://www.instagram.com/the._.murr?igsh=a2d0Y3h3ZXNiYzYz",
    },
    {
      icon: <FaLinkedin size={20} />,
      url: "https://www.linkedin.com/in/ibrahim-elmur-7296b4254?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      icon: <FaTiktok size={20} />,
      url: "https://www.tiktok.com/@elmur_2004?_t=8nh0fzlHixU&_r=1",
    },
  ];

  return (
    <footer className="text-center bg-brand bg-opacity-5 py-8 lg:py-5 mt-10 w-screen">
      <div className="flex items-center justify-between max-w-7xl px-8 mx-auto gap-5">
        <h1 className="font-bold text-2xl">
          Elmur<span className="text-brand">.</span>
        </h1>
        <p className="text-brand text-sm hidden lg:block">
          © 2024 All rights reserved, Developed by{" "}
          <a
            href="http://muhamedsafwat.com"
            target="_blank"
            className="text-brand"
          >
            Muhamed Safwat
          </a>
        </p>
        <ul className="flex items-center justify-center gap-3 font-medium">
          {links.map((item, index) => (
            <a
              href={item.url}
              target="_blank"
              className="hover:text-brand duration-300"
              key={index}
            >
              {item.icon}
            </a>
          ))}
        </ul>
      </div>
      <p className="text-brand mt-2 text-sm block lg:hidden">
        © Developed by{" "}
        <a
          href="http://muhamedsafwat.com"
          target="_blank"
          className="text-brand"
        >
          Muhamed Safwat
        </a>
      </p>
    </footer>
  );
};

export default Footer;
