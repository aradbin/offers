import { Button } from "@/components/ui/button";
import { Share2 } from "lucide-react";

export default function ShareButton ({ id }: { id: number }) {
  return (
    <Button size="icon" variant="link" >
      <Share2 />
    </Button>
  )
}