"use client"
import React from "react"
import Image from "next/image"
import Link from "next/link"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Drawer from "@mui/material/Drawer"
import List from "@mui/material/List"
import ListItem from "@mui/material/ListItem"
import Divider from "@mui/material/Divider"
import Typography from "@mui/material/Typography"
import parityLogo from "../../../../../public/images/parity-red-logo.png"

const StyledLink = styled(Link)(
  {
    textDecoration: "none",
  },
  ({ theme }) => ({
    color: "#000000",
    "&:hover": {
      color: "gray",
      textDecoration: "underline",
    },
  })
)

type Props = {
  isOpen: boolean
  onClose?: any
}

const list = (onClose: any) => (
  <Box sx={{ width: 250 }} role="presentation">
    <List>
      <ListItem
        sx={{ padding: "20px 0px", display: "flex", justifyContent: "center" }}
      >
        <StyledLink href="/" onClick={onClose}>
          <Image src={parityLogo} height={40} alt="Company logo." />
        </StyledLink>
      </ListItem>
      <Divider />
      <ListItem>
        <StyledLink href="/services" onClick={onClose}>
          <Typography sx={{ color: "#333333", fontFamily: "inherit" }}>
            Services
          </Typography>
        </StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink href="/solutions" onClick={onClose}>
          <Typography sx={{ color: "#333333", fontFamily: "inherit" }}>
            Solutions
          </Typography>
        </StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink href="/scale-computing" onClick={onClose}>
          <Typography sx={{ color: "#333333", fontFamily: "inherit" }}>
            Scale Computing
          </Typography>
        </StyledLink>
      </ListItem>
      <ListItem>
        <StyledLink href="/contact-us" onClick={onClose}>
          <Typography sx={{ color: "#333333", fontFamily: "inherit" }}>
            Contact us
          </Typography>
        </StyledLink>
      </ListItem>
      {/* <ListItem>
        <StyledLink href="/get-support" onClick={onClose}>
          <Typography sx={{ color: "#333333", fontFamily: "inherit" }}>
            Support
          </Typography>
        </StyledLink>
      </ListItem> */}
    </List>
  </Box>
)

export default function NavigationFlyout({ isOpen = false, onClose }: Props) {
  return (
    <Drawer open={isOpen} anchor="right" onClose={onClose}>
      {list(onClose)}
    </Drawer>
  )
}
