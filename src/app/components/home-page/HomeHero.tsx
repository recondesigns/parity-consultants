"use client"
import React from "react"
import { motion } from "framer-motion"
import Typography from "@mui/material/Typography"
import { Section, AuroraBackgroundSection } from "../ui/"

export default function HomeHero({}) {
  return (
    <Section
      sx={{
        padding: {
          xs: "40px 20px 40px 20px",
          md: "40px 40px 40px 40px",
        },
      }}
    >
      <AuroraBackgroundSection>
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="relative flex flex-col items-center justify-center gap-4 px-4"
        >
          <div>
            <Typography
              variant="h3"
              component="h2"
              fontFamily="inherit"
              fontWeight="bold"
              color="#333333"
              textAlign="center"
            >
              Scale Computing
            </Typography>
            <Typography
              variant="h5"
              component="p"
              fontFamily="inherit"
              color="#D95C5C"
              textAlign="center"
              pt="8px"
            >
              Let us set you up with the latest in Edge computing.
            </Typography>
          </div>
        </motion.div>
      </AuroraBackgroundSection>
    </Section>
  )
}
