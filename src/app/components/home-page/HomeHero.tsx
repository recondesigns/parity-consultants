'use client'
import React from 'react'
import Section from '../ui/section/Section'

type Props = {
    children: React.ReactNode
}

export default function HomeHero({ children }: Props) {
  return (
    <Section>{children}</Section>
  )
}