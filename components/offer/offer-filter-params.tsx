'use client'

import { Button } from "@/components/ui/button";
import { OfferParamType } from "@/lib/types";
import { startCase } from "lodash";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
import { useRouter } from "next/navigation";

export default function OfferFilterParams({ params }: { params: OfferParamType }) {
  const router = useRouter()
  
  return (
    <div className="flex flex-wrap gap-2">
      {Object.keys(params)?.filter((key) => params[key as keyof OfferParamType].length > 0).map((key) => (
        <Button variant="outline" size="sm" className="border-dashed" key={key}>
          {startCase(key)}
          <Separator orientation="vertical" className="mx-2 h-4" />
          <div className="flex gap-1">
            {params[key as keyof OfferParamType]?.map((value) => (
              <Badge
                variant="secondary"
                className="rounded-sm font-normal"
                key={value}
              >
                {startCase(value)}
              </Badge>
            ))}
          </div>
        </Button>
      ))}
      {Object.keys(params)?.filter((key) => params[key as keyof OfferParamType].length > 0)?.length > 0 && <Button variant="outline" size="sm" className="border-dashed" onClick={() => router.push('?')}>
        Reset
        <X className="size-4 ml-2" />
      </Button>}
    </div>
  );
}