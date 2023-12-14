import Image from "next/image";

import { Nav } from "@/components/nav/nav";
import { Hero } from "@/components/hero/hero";
import { About } from "@/components/about/about";
import { Resume } from "@/components/resume/resume";
import { Skills } from "@/components/skills/skills";
import { Projects } from "@/components/projects/projects";
import { Counter } from "@/components/counter/counter";
import { Hireme } from "@/components/hireme/hireme";
import { Footer } from "@/components/footer/footer";

export const revalidate = 60;

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <About />
      {/* <Resume /> */}
      <Skills />
      <Projects />
      {/* <Counter /> */}
      <Hireme />
      <Footer />
    </>
  );
}
