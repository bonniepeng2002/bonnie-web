import React from "react";
import Accordion from "../components/accordion";
import Header from "../components/header";
import styles from "../styles/Projects.module.scss";

const colors = [
  "#E4B7FFCC",
  "#FFDF7EDE",
  "#C5ECFDCC",
  "#E592BFCC",
  "#F9BA5BE5",
];

const projects = [
  {
    title: "Bloomi",
    tools: ["Java", "Android SDK", "Firebase"],
    desc: "",
    github: "https://github.com/bonniepeng2002/Bloomi",
    color: colors[0],
  },
  {
    title: "Apollo",
    tools: ["Java", "Android SDK", "Python", "Speech Recognition"],
    desc: "",
    github: "https://github.com/bonniepeng2002/Apollo",
    color: colors[1],
  },
  {
    title: "This site!",
    tools: ["Typescript", "React", "Sass", "Next", "Figma"],
    desc: "",
    github: "",
    color: colors[2],
  },
  {
    title: "Safe at School",
    tools: ["HTML/CSS", "JavaScript", "Bootstrap", "Google Webspeech API"],
    desc: "",
    github: "https://github.com/bonniepeng2002/Safe-At-School",
    link: "https://devpost.com/software/safe-at-school",
    color: colors[3],
  },
  {
    title: "Missile Command",
    tools: ["Python"],
    desc: "",
    github: "https://github.com/bonniepeng2002/Missile-Command",
    color: colors[4],
  },
];

export default function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <Header title="Projects" color="#be63f6" />
      <div className={styles.content}>
        {projects.map((item) => {
          return (
            <Accordion
              title={item.title}
              tools={item.tools}
              github={item.github}
              color={item.color}
            >
              {item.desc}
            </Accordion>
          );
        })}
      </div>
    </section>
  );
}
