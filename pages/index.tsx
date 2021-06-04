import Head from "next/head";
import Image from "next/image";
import React from "react";
import About from "./About";
import Contact from "./Contact";
import Landing from "./Landing";
import Projects from "./Projects";

export default function Home() {
  return (
    <>
      <Landing />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
