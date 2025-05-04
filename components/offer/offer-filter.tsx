'use client'

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { OfferParamType } from "@/lib/types";
import { networks } from "@/lib/variables";
import { useRouter } from "next/navigation";

export default function OfferFilter({ params }: { params?: OfferParamType }) {
  const router = useRouter()

  const handleCheck = (checked: boolean, key: string, value: string) => {

  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <p>Networks</p>
        {Object.entries(networks)?.map(([key, value]) => (
          <div className="flex gap-2" key={key}>
            <Checkbox id={`network-${key}`} checked={params?.networks?.includes(key)} onCheckedChange={() => { router.replace(`?networks=${key}`) }} />
            <Label htmlFor={`network-${key}`}>{value.name}</Label>
          </div>
        ))}
      </div>
    </div>
  )
}
