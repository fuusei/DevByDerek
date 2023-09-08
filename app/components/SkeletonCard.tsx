import { Skeleton, Card } from "@nextui-org/react";

export function SkeletonCard() {
  return (
    <Card
      className="flex flex-col w-[400px] h-[240px] hover:-translate-y-2"
      radius="lg"
    >
      <div className="h-1/2">
        <Skeleton
          className="rounded-lg h-full"
          classNames={{ base: "dark:bg-zinc-800" }}
        >
          <div className="rounded-lg h-full"></div>
        </Skeleton>
      </div>
      <div className="flex flex-col justify-evenly h-1/2">
        <Skeleton
          className="w-3/5 rounded-lg"
          classNames={{ base: "dark:bg-zinc-800" }}
        >
          <div className="h-3 w-3/5 rounded-lg"></div>
        </Skeleton>
        <Skeleton
          className="w-4/5 rounded-lg"
          classNames={{ base: "dark:bg-zinc-800" }}
        >
          <div className="h-3 w-4/5 rounded-lg"></div>
        </Skeleton>
        <Skeleton
          className="w-2/5 rounded-lg"
          classNames={{ base: "dark:bg-zinc-800" }}
        >
          <div className="h-3 w-2/5 rounded-lg"></div>
        </Skeleton>
      </div>
    </Card>
  );
}
