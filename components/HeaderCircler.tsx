"use client"
import React from "react"
import { RoughNotation, RoughNotationGroup } from "react-rough-notation"
// Your data source
type HeaderType = {
  id: number
  text: string
  target: string
}
type serviceDataType = HeaderType[]

/**
 * A reusable component that finds a specific item by ID
 * and renders it with a hand-drawn circle around the target word.
 */
export function HeaderCircler({
  id,
  data,
}: {
  id: number
  data: serviceDataType
}) {
  const item = data.find((el) => el.id === id)

  // Safety check if ID doesn't exist
  if (!item) return null

  return (
    <RoughNotationGroup show={true}>
      <h1 className="font-roboto text-3xl leading-normal font-bold tracking-normal text-foreground md:text-5xl">
        {item.text.split(" ").map((word, index) => {
          const isTarget = word
            .toLowerCase()
            .includes(item.target.toLowerCase())

          return (
            <span key={index} className="mr-1.5 inline-block">
              {isTarget ? (
                <RoughNotation
                  type="highlight"
                  color="var(--notation)" // Your teal brand color
                  strokeWidth={1}
                  // padding={6}
                  iterations={1}
                  animationDuration={600}
                >
                  {word}
                </RoughNotation>
              ) : (
                word
              )}
            </span>
          )
        })}
      </h1>
    </RoughNotationGroup>
  )
}
