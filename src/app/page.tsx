import Image from "next/image";

import { Nav } from "@/components/nav/nav";
import { Hero } from "@/components/hero/hero";

export default function Home() {
  return (
    <body data-spy="scroll" data-target=".site-navbar-target" data-offset="300">
      <Nav />
      <Hero />
    </body>
  );
}
