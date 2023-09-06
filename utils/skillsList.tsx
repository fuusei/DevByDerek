interface Technology {
  name: string;
  icon?: string;
}

export interface Skill {
  category: string;
  technologies: Array<Technology>;
}

export const skills: Skill[] = [
  {
    category: "Languages",
    technologies: [
      { name: "JavaScript", icon: "/technologyIcons/javascript.svg" },
      { name: "TypeScript", icon: "/technologyIcons/typescript.svg" },
      { name: "Python", icon: "/technologyIcons/python.svg" },
      { name: "HTML/CSS" },
      { name: "SQL" },
    ],
  },
  {
    category: "Frameworks/Libraries",
    technologies: [
      { name: "React", icon: "/technologyIcons/react.svg" },
      { name: "Flask", icon: "/technologyIcons/flask.svg" },
      { name: "Node", icon: "/technologyIcons/node.svg" },
      { name: "TailwindCSS", icon: "/technologyIcons/tailwind.svg" },
      { name: "Material UI", icon: "/technologyIcons/material.svg" },
      { name: "NextUI", icon: "/technologyIcons/next.svg" },
    ],
  },
  {
    category: "Tools",
    technologies: [
      { name: "Visual Studio Code" },
      { name: "Git" },
      { name: "JIRA" },
      { name: "MongoDB" },
    ],
  },
];
