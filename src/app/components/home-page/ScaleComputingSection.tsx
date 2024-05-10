import React from "react"
import { Parallax } from "react-parallax"
import Typography from "@mui/material/Typography"
import { Section } from "../ui"
import networkingImage from "../../../../public/images/networking1560.jpg"

export default function ScaledComputingSection() {
  return (
    <Section>
      <Parallax
        blur={2}
        bgImage={`${networkingImage.src}`}
        bgImageAlt="networking servers"
        strength={200}
        style={{ width: "100%" }}
      >
        <div
          style={{
            height: "100vh",
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
              color="#FDFCFC"
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
