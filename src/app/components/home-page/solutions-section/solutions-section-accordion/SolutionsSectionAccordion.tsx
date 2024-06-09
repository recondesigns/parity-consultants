"use client"
import React from "react"
import { Accordion } from "@szhsin/react-accordion"
import SolutionsSectionAccordionItem from "./SolutionsSectionAccordionItem"

type ListItemType = {
  title: string
  description: string
}

type Props = {
  list: ListItemType[]
}

export default function SolutionsSectionAccordion({ list }: Props) {
  return (
    <Accordion>
      {list.map((item, idx) => (
        <SolutionsSectionAccordionItem
          idx={idx}
          title={item.title}
          description={item.description}
        />
      ))}
    </Accordion>
  )
}
