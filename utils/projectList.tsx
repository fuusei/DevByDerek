interface Technology {
  name: string;
  icon?: string;
}

export interface Project {
  title: string;
  desc: string;
  technologies: Array<Technology>;
  image: string;
  gitLink: string;
  url?: string;
}

export const projects: Project[] = [
  {
    title: "My Personal Website",
    desc: "I created this since it is becoming more popular to have a portfolio website among developers.",
    technologies: [
      { name: "Next.js", icon: "/technologyIcons/next.svg" },
      { name: "TypeScript", icon: "/technologyIcons/typescript.svg" },
      { name: "TailwindCSS", icon: "/technologyIcons/tailwind.svg" },
      { name: "Next UI" },
    ],
    image: "/projectImages/website.png",
    gitLink: "https://github.com/fuusei/website",
  },
  {
    title: "YouTube Playlist Tracker",
    desc: "Created to always know which songs in my playlists have been deleted since YouTube will just say your videos have been deleted.",
    technologies: [
      { name: "Python", icon: "/technologyIcons/python.svg" },
      { name: "Flask", icon: "/technologyIcons/flask.svg" },
      { name: "JavaScript", icon: "/technologyIcons/javascript.svg" },
      { name: "React", icon: "/technologyIcons/react.svg" },
      { name: "Material UI", icon: "/technologyIcons/material.svg" },
    ],
    image: "/projectImages/tracker.png",
    gitLink: "https://github.com/fuusei/Youtube-Playlist-Tracker",
  },
  {
    title: "LinkTreeClone",
    desc: "Made this before my website to have my links in one spot and so I could get familiar with Next.js and TailwindCSS.",
    technologies: [
      { name: "Next.js", icon: "/technologyIcons/next.svg" },
      { name: "TypeScript", icon: "/technologyIcons/typescript.svg" },
      { name: "TailwindCSS", icon: "/technologyIcons/tailwind.svg" },
    ],
    image: "/projectImages/linktree.png",
    gitLink: "https://github.com/fuusei/LinkTreeClone",
  },

  {
    title: "iiKanji (Coming soon..)",
    desc: "Making this as a tool to study kanji that implements a feature missing from Quizlet.",
    technologies: [
      { name: "Next.js", icon: "/technologyIcons/next.svg" },
      { name: "TypeScript", icon: "/technologyIcons/typescript.svg" },
      { name: "TailwindCSS", icon: "/technologyIcons/tailwind.svg" },
      { name: "Next UI" },
    ],
    image: "/projectImages/tsuzuku.jpg",
    gitLink: "https://github.com/fuusei/iiKanji",
  },
];
