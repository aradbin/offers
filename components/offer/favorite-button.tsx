import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";

export default function FavoriteButton ({ active, id }: { active: boolean, id: number }) {
  return (
    <Button size="icon" variant="link" >
      <Heart />
    </Button>
  )
}