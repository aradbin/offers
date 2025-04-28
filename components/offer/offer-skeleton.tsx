import { Card } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function OfferSkeleton() {
  return (
    <Card className="w-full h-[300px] cursor-pointer border-none">
      <Skeleton className="rounded-lg">
        <div className="h-[300px] rounded-lg bg-default-300" />
      </Skeleton>
    </Card>
  )
}