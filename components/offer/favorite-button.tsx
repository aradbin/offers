import { Button } from "@heroui/button";
import { HeartFilledIcon } from "@/components/icons";

export default function FavoriteButton ({ active, id }: { active: boolean, id: number }) {
  return (
    <Button isIconOnly aria-label="Like" size="sm" color={active ? 'danger' : 'default'}>
      <HeartFilledIcon />
    </Button>
  )
}