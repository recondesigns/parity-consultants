import React from "react"
import { Parallax } from "react-parallax"
import Typography from "@mui/material/Typography"
import { Section } from "../ui"
import networkingImage from "../../../../public/images/blue-networking-1000.jpg"

export default function HeroSection() {
  return (
    <Section>
      <Parallax
        blur={0}
        bgImage={`${networkingImage.src}`}
        bgImageAlt="networking servers"
        strength={400}
        // @ts-expect-error
        blur={{ min: -15, max: 20 }}
        style={{ width: "100%" }}
      >
        <div
          style={{
            height: "calc(100vh - 150px)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "rgba(51, 51, 51, 0.1)",
          }}
        >
          <div>
            <Typography
              variant="h2"
              component="h1"
              fontFamily="inherit"
              fontWeight="bold"
              color="#FDFCFC"
              textAlign="center"
            >
              Parity Consultants
            </Typography>
            <Typography
              variant="h4"
              component="p"
              fontFamily="inherit"
              color="#D95C5C"
              textAlign="center"
              pt="8px"
            >
              Your affordable IT Solution
            </Typography>
          </div>
        </div>
      </Parallax>
    </Section>
  )
}
