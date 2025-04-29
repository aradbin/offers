'use client'

import { startCase } from "lodash"
import Image from "next/image"
import { useState } from "react"

export default function ImageWithFallback(props: any) {
  const [isFailed, setIsFailed] = useState(false)

  if(isFailed){
    return (
      <p className="text-xl">{startCase(props.fallback)}</p>
    )
  }

  return (
    <Image {...props} onError={() => setIsFailed(true)} />
  )
}