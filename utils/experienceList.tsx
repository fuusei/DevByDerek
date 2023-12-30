export interface Experience {
  company: string;
  position: string;
  time: string;
  image: string;
  width: number;
  height: number;
}

export const experiences: Experience[] = [
  {
    company: "red violet",
    position: "QA Automation Engineer",
    time: "Dec '22 - Present",
    image: "/redviolet.jpg",
    width: 150,
    height: 110,
  },
  {
    company: "Accelya Group",
    position: "Software Engineer",
    time: "Jul '21 - Dec '22",
    image: "/accelya.jpg",
    width: 110,
    height: 110,
  },
  {
    company: "UF IPPD",
    position: "Automation Engineer",
    time: "Aug '20 - May '21",
    image: "/ippd.jpg",
    width: 110,
    height: 110,
  },
  {
    company: "UF Indie Lab",
    position: "Data Visualization Engineer",
    time: "Jan '20 - May '20",
    image: "/indie.jpg",
    width: 120,
    height: 120,
  },
  {
    company: "US Southern Command",
    position: "IT Intern",
    time: "May '19 - Aug '19",
    image: "/ussouthcom.png",
    width: 90,
    height: 90,
  },
];
