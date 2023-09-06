export interface NavLink {
  name: string;
  path: string;
}

export const navLinks: NavLink[] = [
  {
    name: "Home",
    path: "/#landing",
  },
  {
    name: "About",
    path: "/#about",
  },
  {
    name: "Experience",
    path: "/#experience",
  },
  {
    name: "Projects",
    path: "/#projects",
  },
];
