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
    desc: "Created to have a central location to put all my experience.",
    technologies: [
      { name: "Next.js", icon: "/technologyIcons/next.svg" },
      { name: "TypeScript", icon: "/technologyIcons/typescript.svg" },
      { name: "TailwindCSS", icon: "/technologyIcons/tailwind.svg" },
      { name: "Framer Motion", icon: "/technologyIcons/framer.svg" },
      { name: "Next UI" },
    ],
    image: "/projectImages/website.png",
    gitLink: "https://github.com/fuusei/website",
  },
  {
    title: "YouTube Playlist Tracker",
    desc: "Tracks your playlists and alerts which have been deleted.",
    technologies: [
      { name: "Python", icon: "/technologyIcons/python.svg" },
      { name: "JavaScript", icon: "/technologyIcons/javascript.svg" },
      { name: "React", icon: "/technologyIcons/react.svg" },
      { name: "Material UI", icon: "/technologyIcons/material.svg" },
      { name: "Flask" },
    ],
    image: "/projectImages/tracker.png",
    gitLink: "https://github.com/fuusei/Youtube-Playlist-Tracker",
  },
  {
    title: "LinkTreeClone",
    desc: "Recreated LinkTree to get experience with TailwindCSS and Next.js",
    technologies: [
      { name: "Next.js", icon: "/technologyIcons/next.svg" },
      { name: "TypeScript", icon: "/technologyIcons/typescript.svg" },
      { name: "TailwindCSS", icon: "/technologyIcons/tailwind.svg" },
    ],
    image: "/projectImages/linktree.png",
    gitLink: "https://github.com/fuusei/LinkTreeClone",
    url: "https://linktreeclone-silk.vercel.app/",
  },
  {
    title: "iiKanji (Coming soon..)",
    desc: "Making this as a tool to study kanji that implements a feature missing from Quizlet.",
    technologies: [
      { name: "Next.js", icon: "/technologyIcons/next.svg" },
      { name: "TypeScript", icon: "/technologyIcons/typescript.svg" },
      { name: "TailwindCSS", icon: "/technologyIcons/tailwind.svg" },
      { name: "MongoDB", icon: "/technologyIcons/mongo.svg" },
      { name: "Next UI" },
    ],
    image: "/projectImages/tsuzuku.png",
    gitLink: "https://github.com/fuusei/iiKanji",
  },
];
