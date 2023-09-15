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
    company: "Accelya Group",
    position: "Software Engineer",
    time: "July '21 - December '22",
    image: "/accelya.jpg",
    width: 110,
    height: 110,
  },
  {
    company: "UF IPPD",
    position: "Automation Engineer",
    time: "August '20 - May '21",
    image: "/ippd.jpg",
    width: 110,
    height: 110,
  },
  {
    company: "UF Indie Lab",
    position: "Data Visualization Engineer",
    time: "January '20 - May '20",
    image: "/indie.jpg",
    width: 120,
    height: 120,
  },
  {
    company: "US Southern Command",
    position: "Telecommunications Intern",
    time: "May '19 - August '19",
    image: "/ussouthcom.png",
    width: 90,
    height: 90,
  },
];
