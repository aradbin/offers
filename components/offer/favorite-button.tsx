import { Button } from "@heroui/button";
import { HeartFilledIcon } from "@/components/icons";

export default function FavoriteButton ({ active, id }: { active: boolean, id: number }) {
  return (
    <Button
      isIconOnly
      className="text-default-900/60 data-[hover]:bg-foreground/10 "
      radius="full"
      variant="light"
    >
      <HeartFilledIcon
        className={"[&>path]:stroke-transparent"}
        fill={"currentColor"}
      />
    </Button>
  )
}