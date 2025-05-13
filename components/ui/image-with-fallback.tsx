'use client'

import Image from "next/image"
import { useState } from "react"

export default function ImageWithFallback(props: any) {
  const [isFailed, setIsFailed] = useState(false)

  if(!props?.src || isFailed){
    return (
      <p className="text-lg font-semibold">{props.fallback}</p>
    )
  }

  return (
    <Image {...props} onError={() => setIsFailed(true)} />
  )
}