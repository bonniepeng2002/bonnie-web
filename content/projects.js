const colors = [
  "rgba(166, 231, 127, 0.79)", // green
  "rgba(160, 214, 238, 0.79)", // blue
  "rgba(228, 183, 255, 0.73)", // purple
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
        Ever forgotten to water your leafy friends? 🌱 Bloomi is an Android app
        made to remind you of when to care for your plants!
        <br /> <br />
        Generating growth history graphs and delivering mobile notifications,
        this solo project was inspired by a lovely orchid my friend gifted me,
        which I was determined to take the *best* possible care of 💪 (my cat
        ate it within 2 weeks)
      </p>
    ),
    github: "https://github.com/bonniepeng2002/Bloomi",
    color: colors[0],
  },
  {
    title: "Apollo",
    subtitle: "Your Intuitive Virtual Nurse",
    tools: [
      "Java",
      "Python",
      "Android SDK",
      "Google Web Speech API",
      "Infermedica API",
    ],
    desc: (
      <p>
        In the age of a pandemic, limited access to healthcare is our current
        reality. However, it has been the reality of tens of millions before
        COVID-19, and it will continue to be their reality after.
        <br /> <br />
        Introducing Apollo 🩹, a solution to this healthcare crisis and your
        virtual nurse. Apollo provides an intuitive interface that listens,
        documents and categorizes your symptoms during interactive virtual
        appointments. Based on these symptom logs, the app can suggest possible
        diagnoses and schedule appointments with a medical professional, if
        necessary.
        <br /> <br />
        This project was made for Hack the North, 2020++!
      </p>
    ),
    github: "https://github.com/bonniepeng2002/Apollo",
    color: colors[1],
  },
  {
    title: "Website Portfolio",
    subtitle: "This one right here!",
    tools: ["TypeScript", "React", "Sass", "Next", "Figma"],
    desc: (
      <p>
        After a year since the first iteration of my website, it was time to
        take on another challenge with the web development skills I'd gained by
        working with UWCSC and TechNova. Prototyped in Figma and created with
        TypeScript, React, and Sass, this website combines the tools I've used
        in each development team to create something of my own 👩‍💻.
        <br /> <br />
        The oceanic theme is a tribute to my home in Nova Scotia, and because
        the jellyfish matched *too* well with the only professional-ish picture
        I had 😁.
      </p>
    ),
    github: "https://github.com/bonniepeng2002/bonniepeng2002.github.io",
    color: colors[2],
  },
  {
    title: "Safe at School",
    subtitle: "Web-based Interactive Game",
    tools: ["HTML/CSS", "JavaScript", "Bootstrap", "Google Webspeech API"],
    desc: (
      <p>
        Safe at School teaches elementary students about the COVID-19 public
        health guidelines through a choose-your-own-adventure style game. 🌎
        <br /> <br />
        As a web-based game, this project was augmented through the use of
        text-to-speech to assist children with difficulty reading. Each scenario
        is narrated thoroughly, which contributed to its award of Best
        Presentation at IgnitionHacks, 2020.
      </p>
    ),
    github: "https://github.com/bonniepeng2002/Safe-At-School",
    link: "https://devpost.com/software/safe-at-school",
    color: colors[3],
  },
  {
    title: "Missile Command",
    subtitle: "Python Game",
    tools: ["Python", "Turtle Graphics"],
    desc: (
      <p>
        Ah, my first programming project back in my Computer Science class in
        high school. Every programmer has a project like this, and for me it was
        a faithful recreation of Atari's <em>Missile Command</em>, with a few
        graphical tweaks (a lot of rainbows! 🌈).
      </p>
    ),
    github: "https://github.com/bonniepeng2002/Missile-Command",
    color: colors[4],
  },
];
