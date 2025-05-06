'use client'

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { OfferParamType } from "@/lib/types";
import { banks, networks } from "@/lib/variables";
import { useRouter } from "next/navigation";

export default function OfferFilter({ params }: { params: OfferParamType }) {
  const router = useRouter()

  const handleCheck = (
    checked: boolean,
    type: keyof OfferParamType,
    value: string
  ) => {
    const newParams = { ...params };
  
    if (checked) {
      if (!newParams[type].includes(value)) {
        newParams[type].push(value);
      }
    } else {
      newParams[type] = newParams[type].filter((item) => item !== value);
    }
  
    const searchParams = new URLSearchParams();
  
    Object.entries(newParams).forEach(([key, values]) => {
      values.forEach((val) => searchParams.append(key, val));
    });
  
    router.push(`?${searchParams.toString()}`);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-2">
        <p>Networks</p>
        {Object.entries(networks)?.map(([key, value]) => (
          <div className="flex gap-2" key={key}>
            <Checkbox id={`networks-${key}`} checked={params?.networks?.includes(key)} onCheckedChange={(checked: boolean) => handleCheck(checked, "networks", key)} />
            <Label htmlFor={`networks-${key}`}>{value.name}</Label>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-2">
        <p>Banks</p>
        {Object.entries(banks)?.map(([key, value]) => (
          <div className="flex gap-2" key={key}>
            <Checkbox id={`banks-${key}`} checked={params?.banks?.includes(key)} onCheckedChange={(checked: boolean) => handleCheck(checked, "banks", key)} />
            <Label htmlFor={`banks-${key}`}>{value.name}</Label>
          </div>
        ))}
      </div>
    </div>
  )
}
