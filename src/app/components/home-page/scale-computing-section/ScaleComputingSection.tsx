"use client"
import React from "react"
import { motion } from "framer-motion"
import Box from "@mui/material/Box"
import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import { Section, AuroraBackgroundSection } from "../../ui"

export default function ScaleComputingSection({}) {
  return (
    <Section
      sx={{
        // height: '100%',
        padding: {
          xs: "40px 20px 40px 20px",
          md: "40px 40px 40px 40px",
        },
        border: "2px solid orange",
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
          // className="relative"
          // className="relative flex flex-col items-center justify-center gap-4 px-4"
          style={{
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: "2px solid green",
          }}
        >
          <Grid container sx={{ border: "2px solid blue" }}>
            <Grid item xs={12} sm={6} sx={{ border: "2px dashed hotpink" }}>
              <Box>
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
                  Get the latest in Edge computing
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} sx={{ border: "2px dashed hotpink" }}>
              <Box>
                <form style={{ width: "50%", border: "1px solid black" }}>
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <label>Label</label>
                    <input placeholder="input" />
                  </div>
                </form>
              </Box>
            </Grid>
          </Grid>
        </motion.div>
      </AuroraBackgroundSection>
    </Section>
  )
}
