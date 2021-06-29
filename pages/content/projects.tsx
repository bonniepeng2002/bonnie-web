const colors = [
  "rgba(228, 183, 255, 0.73)", // purple
  "rgba(244, 212, 115, 0.91)", // yellow
  "rgba(194, 232, 249, 0.79)", // blue
  "rgba(229, 146, 191, 0.8)", // pink
  "rgba(248, 186, 93, 0.9)", // orange
];

export const projects = [
  {
    title: "Bloomi",
    subtitle: "Plant Tracking App",
    tools: ["Java", "XML", "Android SDK", "Firebase"],
    desc: (
      <p>
        Ever forgotten to water your leafy friends? Bloomi is an Android app
        made to remind you of when to care for your plants! Generating growth
        history graphs and delivering mobile notifications, 
      </p>
    ),
    github: "https://github.com/bonniepeng2002/Bloomi",
    color: colors[0],
  },
  {
    title: "Apollo",
    subtitle: "Your Intuitive Virtual Nurse",
    tools: ["Java", "Android SDK", "Python", "Speech Recognition"],
    desc: "",
    github: "https://github.com/bonniepeng2002/Apollo",
    color: colors[1],
  },
  {
    title: "This site!",
    tools: ["Typescript", "React", "Scss", "Next", "Figma"],
    desc: "",
    github: "https://github.com/bonniepeng2002/bonniepeng2002.github.io",
    color: colors[2],
  },
  {
    title: "Safe at School",
    subtitle: "Web-based Interactive Game",
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
