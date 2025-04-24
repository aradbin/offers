import { Card } from "@heroui/card";
import { Skeleton } from "@heroui/skeleton";

export default function OfferSkeleton() {
  return (
    <Card className="w-full h-[300px] cursor-pointer border-none" radius="lg">
      <Skeleton className="rounded-lg">
        <div className="h-[300px] rounded-lg bg-default-300" />
      </Skeleton>
    </Card>
  )
}