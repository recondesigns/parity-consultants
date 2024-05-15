"use client"
import React from "react"
import { usePathname } from "next/navigation"
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

const StyledLink = styled(Link)({}, ({ theme }) => ({}))

type StyledLinkTextProps = {
  isScaleComputingLink?: boolean
  isActiveLink?: boolean
}

const StyledLinkText = styled(Typography)<StyledLinkTextProps>(
  {
    fontFamily: "inherit",
  },
  ({ isActiveLink, isScaleComputingLink }) => ({
    color: isScaleComputingLink
      ? "#FC711F"
      : isActiveLink
        ? "#D95C5C"
        : "#333333",
    borderBottom: !isActiveLink
      ? "none"
      : isScaleComputingLink
        ? "3px solid #FC711F"
        : "3px solid #D95C5C",
  })
)

type Props = {
  isOpen: boolean
  onClose?: any
}

function setIsActiveLink(currentPath: string, linkpath: string) {
  return currentPath === linkpath ? true : false
}

export default function NavigationFlyout({ isOpen = false, onClose }: Props) {
  const pathname = usePathname()

  return (
    <Drawer open={isOpen} anchor="right" onClose={onClose}>
      <Box sx={{ width: 250 }} role="presentation">
        <List>
          <ListItem
            sx={{
              padding: "20px 0px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <StyledLink href="/" onClick={onClose}>
              <Image src={parityLogo} height={40} alt="Company logo." />
            </StyledLink>
          </ListItem>
          <Divider />
          <ListItem>
            <StyledLink href="/" onClick={onClose}>
              <StyledLinkText
                sx={{ textDecoration: "none" }}
                isActiveLink={setIsActiveLink(pathname, "/")}
              >
                Home
              </StyledLinkText>
            </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink href="/services" onClick={onClose}>
              <StyledLinkText
                isActiveLink={setIsActiveLink(pathname, "/services")}
              >
                Services
              </StyledLinkText>
            </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink href="/solutions" onClick={onClose}>
              <StyledLinkText
                isActiveLink={setIsActiveLink(pathname, "/solutions")}
              >
                Solutions
              </StyledLinkText>
            </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink href="/scale-computing" onClick={onClose}>
              <StyledLinkText
                isScaleComputingLink={true}
                isActiveLink={setIsActiveLink(pathname, "/scale-computing")}
              >
                Scale Computing
              </StyledLinkText>
            </StyledLink>
          </ListItem>
          {/* <ListItem>
            <StyledLink href="/get-support" onClick={onClose}>
              <StyledLinkText
                isActiveLink={setIsActiveLink(pathname, "/get-support")}
              >
                Support
              </StyledLinkText>
            </StyledLink>
          </ListItem> */}
          <ListItem>
            <StyledLink href="/contact-us" onClick={onClose}>
              <StyledLinkText
                isActiveLink={setIsActiveLink(pathname, "/contact-us")}
              >
                Contact
              </StyledLinkText>
            </StyledLink>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  )
}
