import { Skeleton } from "@/components/ui/skeleton";

export default function Loading() {
  return (
    <div className="flex flex-col gap-2">
      <Skeleton className="w-full h-[150px]" />
      <div className="flex gap-2">
        <Skeleton className="w-[50px] h-[20px]" />
        <Skeleton className="w-[50px] h-[20px]" />
        <Skeleton className="w-[50px] h-[20px]" />
        <Skeleton className="w-[50px] h-[20px]" />
      </div>
      <Skeleton className="w-[200px] h-[20px]" />
      <div className="flex justify-between items-center gap-4 mt-1">
        <Skeleton className="w-[200px] h-[30px]" />
        <div className="flex gap-2">
          <Skeleton className="w-[25px] h-[26px]" />
          <Skeleton className="w-[25px] h-[26px]" />
        </div>
      </div>
      <div className="flex flex-col gap-1 mt-5">
        <Skeleton className="w-[60%] h-[12px]" />
        <Skeleton className="w-[90%] h-[12px]" />
        <Skeleton className="w-[75%] h-[12px]" />
        <Skeleton className="w-[70%] h-[12px]" />
        <Skeleton className="w-[80%] h-[12px]" />
      </div>
    </div>
  );
}
