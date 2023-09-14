export interface Experience {
  company: string;
  position: string;
  time: string;
  image: string;
}

export const experiences: Experience[] = [
  {
    company: "Accelya Group",
    position: "Software Engineer",
    time: "July 2021 - December 2022",
    image: "/accelya.jpg",
  },
  {
    company: "UF IPPD",
    position: "Automation Engineer",
    time: "August 2020 - May 2021",
    image: "/ippd.jpg",
  },
  {
    company: "UF Indie Lab",
    position: "Data Visualization Engineer",
    time: "January 2020 - May 2020",
    image: "/indie.jpg",
  },
  {
    company: "US Southern Command",
    position: "Telecommunications Intern",
    time: "May 2019 - August 2019",
    image: "/ussouthcom.png",
  },
];
