"use client";
import { Project } from "@/utils/projectList";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import { useIsSSR } from "react-aria";
import { SkeletonCard } from "./SkeletonCard";
import { BsGithub } from "react-icons/bs";
import Link from "next/link";

export function ProjectCard(props: Project) {
  const { title, desc, technologies, image, gitLink, url } = props;
  const isSSR = useIsSSR();
  return (
    <div className="mr-5 my-4">
      {isSSR ? (
        <SkeletonCard />
      ) : (
        <Card
          isFooterBlurred
          radius="lg"
          className="w-[400px] h-full col-span-12 sm:col-span-7 hover:-translate-y-2"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <h4 className="font-medium text-xl text-white">{title}</h4>
          </CardHeader>
          <Image
            isZoomed
            alt="Website preview"
            className="z-0 h-[240px] w-full object-cover overflow-hidden"
            src={image || "/technologyIcons/react.svg"}
          />
          <CardFooter className="absolute bg-white/80 dark:bg-black/80 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <Link
                target="__blank"
                href={gitLink}
                className="lg:text-4xl text-3xl cursor-pointer hover:text-focus"
              >
                <BsGithub />
              </Link>
              <p className="text-tiny">{desc}</p>
            </div>
          </CardFooter>
        </Card>
      )}
    </div>
  );
}
