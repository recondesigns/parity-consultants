"use client"
import React from "react"
import Link from "next/link"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
import OpenInNewIcon from "@mui/icons-material/OpenInNew"

const StyledLink = styled(Link)({}, ({}) => ({}))

export default function Banner() {
  return (
    <Box
      sx={{
        position: "fixed",
        top: "0px",
        left: "0px",
        right: "0px",
        padding: "12px 0px",
        px: { xs: "20px", md: "40px", lg: "80px" },
        display: { xs: "none", md: "flex" },
        justifyContent: "flex-end",
        alignItems: "center",
        gap: "8px",
        background: "#D95C5C",
        zIndex: 299,
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
          <StyledLink
            href="https://na.myconnectwise.net/support/index.htm?Company=parity"
            target="_blank"
          >
            <Typography
              variant="body2"
              sx={{
                height: "20px",
                maxHeight: "20px",
                fontFamily: "inherit",
                fontWeight: "bold",
                color: "#FDFCFC",
              }}
            >
              Client portal
            </Typography>
          </StyledLink>
          <OpenInNewIcon fontSize="small" sx={{ color: "#FDFCFC" }} />
        </Box>
        <Typography
          variant="body2"
          sx={{
            height: "20px",
            maxHeight: "20px",
            fontFamily: "inherit",
            fontWeight: "bold",
            color: "#FDFCFC",
          }}
        >
          |
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: "2px" }}>
          <StyledLink href="https://support.parity.us.com/" target="_blank">
            <Typography
              variant="body2"
              sx={{
                height: "20px",
                maxHeight: "20px",
                fontFamily: "inherit",
                fontWeight: "bold",
                color: "#FDFCFC",
              }}
            >
              Remote access
            </Typography>
          </StyledLink>
          <OpenInNewIcon fontSize="small" sx={{ color: "#FDFCFC" }} />
        </Box>
      </Box>
    </Box>
  )
}
