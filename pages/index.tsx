import React from "react";
import About from "./About";
import Contact from "./Contact";
import Landing from "./Landing";
import Projects from "./Projects";
import Footer from "../components/footer"

export default function Home() {
  return (
    <>
      <Landing />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
