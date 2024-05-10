"use client"
import React from "react"
import { motion } from "framer-motion"
import Typography from "@mui/material/Typography"
import Section from "../ui/section/Section"
import { AuroraBackground } from "./AuroraBackground"

export default function HomeHero({}) {
  return (
    <Section>
      <AuroraBackground>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col gap-4 items-center justify-center px-4"
        >
          <div>
            <Typography
              variant="h2"
              component="h1"
              fontFamily="inherit"
              fontWeight="bold"
              color="#333333"
              textAlign="center"
            >
              Parity Consultants
            </Typography>
            <Typography
              variant="h4"
              component="p"
              fontFamily="inherit"
              color="rgba(51, 51, 51, 0.8)"
              textAlign="center"
              pt="8px"
            >
              Your affordable IT Solution
            </Typography>
          </div>
        </motion.div>
      </AuroraBackground>
    </Section>
  )
}
