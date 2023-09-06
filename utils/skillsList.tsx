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
      { name: "Java", icon: "/technologyIcons/java.svg" },
      { name: "C#", icon: "/technologyIcons/csharp.svg" },
      { name: "HTML/CSS" },
      { name: "SQL" },
    ],
  },
  {
    category: "Frameworks/Libraries",
    technologies: [
      { name: "React", icon: "/technologyIcons/react.svg" },
      { name: "Node", icon: "/technologyIcons/node.svg" },
      { name: "TailwindCSS", icon: "/technologyIcons/tailwind.svg" },
      { name: "Material UI", icon: "/technologyIcons/material.svg" },
      { name: "Next.js", icon: "/technologyIcons/next.svg" },
      { name: "Processing", icon: "/technologyIcons/processing.svg" },
      { name: "Flask" },
    ],
  },
  {
    category: "Tools",
    technologies: [
      { name: "Visual Studio Code", icon: "/technologyIcons/vscode.svg" },
      { name: "Git", icon: "/technologyIcons/git.svg" },
      { name: "JIRA", icon: "/technologyIcons/jira.svg" },
      { name: "MongoDB", icon: "/technologyIcons/mongo.svg" },
    ],
  },
];
