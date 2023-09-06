import { BsGithub, BsLinkedin, BsMailbox2 } from "react-icons/bs";
import { BiCoffeeTogo } from "react-icons/bi";

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
  {
    name: "Email",
    path: "mailto:der.mackey@gmail.com",
    icon: <BsMailbox2 />,
  },
  {
    name: "Buy me a coffee!",
    path: "https://www.buymeacoffee.com/dmackey",
    icon: <BiCoffeeTogo />,
  },
];
