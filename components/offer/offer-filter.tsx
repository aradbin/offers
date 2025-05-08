'use client'

import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { OfferParamType } from "@/lib/types";
import { banks, networks } from "@/lib/variables";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Filter, X } from "lucide-react";
import { Modal } from "@/components/ui/modal";
import { DialogClose } from "@/components/ui/dialog";

function FilterContent({ params }: { params: OfferParamType }) {
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

export default function OfferFilter({ params }: { params: OfferParamType }) {
  const router = useRouter()

  return (
    <>
      <div className="flex md:hidden">
        <Modal trigger={<Button variant="outline"><Filter className="size-4 mr-2" /> Filter</Button>} title="Filter" footer={<>
          <DialogClose asChild>
            <Button variant="destructive" onClick={() => router.push('?')}>Reset</Button>
          </DialogClose>
          <DialogClose asChild>
            <Button variant="outline">Done</Button>
          </DialogClose>
        </>}>
          <FilterContent params={params} />
        </Modal>
      </div>
      <div className="hidden md:flex">
        <FilterContent params={params} />
      </div>
    </>
  )
}