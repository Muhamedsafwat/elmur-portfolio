"use client";
import {
  Hero,
  Projects,
  Experience,
  Services,
  Blogs,
  Partners,
} from "../../sections/homepage";
export default function Home() {
  return (
    <>
      <Hero />
      <Partners />
      <Projects />
      <Experience />
      <Services />
      <Blogs />
    </>
  );
}
