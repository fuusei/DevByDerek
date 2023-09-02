export interface Project {
  title: string;
  desc: string;
  technologiesUsed: Array<string>;
  image: string;
  gitLink: string;
  url?: string;
  alt: string;
  width: number;
  height: number;
}

export const projects: Project[] = [];
