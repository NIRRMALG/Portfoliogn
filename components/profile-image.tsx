"use client"

import Image from "next/image"
import React from "react"

type ProfileImageProps = Readonly<{
  src?: string
  alt?: string
  className?: string
  width?: number
  height?: number
  priority?: boolean
}>

export function ProfileImage({
  src = "/portrait-ai-student.jpg",
  alt = "Portrait",
  className,
  width = 384,
  height = 384,
  priority = false,
}: ProfileImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      className={className}
      style={{ objectFit: "cover" }}
    />
  )
}
