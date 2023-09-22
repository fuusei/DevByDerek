"use client";
import { Project } from "@/utils/projectList";
import {
  Card,
  CardHeader,
  CardFooter,
  Image,
  Tooltip,
  Button,
} from "@nextui-org/react";
import { BsGithub, BsThreeDotsVertical } from "react-icons/bs";
import { HiComputerDesktop } from "react-icons/hi2";
import Link from "next/link";

export function ProjectCard(props: Project) {
  const { title, desc, technologies, image, gitLink, url } = props;
  return (
    <div className="mx-4 my-6 max-w-lg min-w-min">
      <Card
        isFooterBlurred
        radius="lg"
        className="hover:-translate-y-2"
      >
        <CardHeader className="absolute z-10 top-1 items-center justify-between">
          <div className="lg:text-xl md:text-base text-sm font-medium text-white">
            {title}
          </div>
          <Tooltip
            placement="bottom-end"
            content={
              <div className="flex flex-col">
                {technologies.map((tech, i) => (
                  <div className="flex flex-row" key={i}>
                    <div className="text-tiny">{tech.name}</div>
                    {tech.icon ? (
                      <img
                        src={tech.icon}
                        width={14}
                        height={14}
                        className="ml-1"
                      />
                    ) : null}
                  </div>
                ))}
              </div>
            }
          >
            <Button isIconOnly size="sm" className="rounded-full">
              <BsThreeDotsVertical />
            </Button>
          </Tooltip>
        </CardHeader>
        <Image
          isZoomed
          alt="Website preview"
          className="z-0 overflow-hidden"
          src={image}
        />
        <CardFooter className="lg:p-3 md:p-2 p-1 absolute bg-white/80 dark:bg-black/80 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <Link
              target="__blank"
              href={gitLink}
              className="lg:text-3xl text-2xl cursor-pointer hover:text-focus"
            >
              <BsGithub />
            </Link>
            {url ? (
              <Link
                target="__blank"
                href={url}
                className="lg:text-3xl text-2xl cursor-pointer hover:text-focus"
              >
                <HiComputerDesktop />
              </Link>
            ) : null}
            <div className="lg:text-sm md:text-xs text-[10px]">{desc}</div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
