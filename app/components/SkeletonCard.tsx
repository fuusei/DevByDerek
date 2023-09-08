import { Skeleton, Card } from "@nextui-org/react";

export function SkeletonCard() {
  return (
    <div className="flex flex-col gap-3 p-4">
      <Card
        className="w-[400px] h-[280px] col-span-12 sm:col-span-7 hover:-translate-y-2"
        radius="lg"
      >
        <Skeleton
          className="rounded-lg"
          classNames={{ base: "dark:bg-zinc-800" }}
        >
          <div className="h-20 rounded-lg"></div>
        </Skeleton>
        <div className="space-y-3">
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
    </div>
  );
}
