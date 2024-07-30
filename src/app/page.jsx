
import Image from "next/image";
import Page1 from "./component/Page1";
import About from "./component/About";
import Skills from "./component/Skills";
import Project from "./component/Project";
import Contact from "./component/Contact";

export default function Home() {
  return (
    <main>
      <Page1/>
      <About/>
      <Skills/>
      <Project/>
      <Contact/>
    </main>

  );
}