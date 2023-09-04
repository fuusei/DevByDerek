import { BsGithub, BsLinkedin } from "react-icons/bs";

export interface SocialLinks {
  name: string;
  path: string;
  icon: React.ReactNode;
}
export const socialLinks: SocialLinks[] = [
  {
    name: "Github",
    path: "https://github.com/fuusei",
    icon: <BsGithub />,
  },
  {
    name: "LinkedIn",
    path: "https://www.linkedin.com/in/derek-mackey/",
    icon: <BsLinkedin />,
  },
];