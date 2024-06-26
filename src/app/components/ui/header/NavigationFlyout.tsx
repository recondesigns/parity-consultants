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
import OpenInNewIcon from "@mui/icons-material/OpenInNew"
import parityLogo from "../../../../../public/images/parity-logo.png"

const StyledLink = styled(Link)({}, ({}) => ({}))

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
        ? "#B54C4C"
        : "#333333",
    borderBottom: !isActiveLink
      ? "none"
      : isScaleComputingLink
        ? "3px solid #FC711F"
        : "3px solid #B54C4C",
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
              display: "flex",
              justifyContent: "flex-start",
            }}
          >
            <StyledLink href="/" onClick={onClose}>
              <Image src={parityLogo} height={40} alt="Company logo." />
            </StyledLink>
          </ListItem>
          <ListItem></ListItem>
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
                sx={{ fontWeight: "bold" }}
              >
                Scale Computing
              </StyledLinkText>
            </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink href="/contact-us" onClick={onClose}>
              <StyledLinkText
                isActiveLink={setIsActiveLink(pathname, "/contact-us")}
              >
                Contact
              </StyledLinkText>
            </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink
              href="https://na.myconnectwise.net/support/index.htm?Company=parity"
              onClick={onClose}
              target="_blank"
            >
              <StyledLinkText>
                <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <Typography
                    variant="body1"
                    sx={{
                      height: "20px",
                      maxHeight: "20px",
                      fontFamily: "inherit",
                      color: "#333333",
                    }}
                  >
                    Client portal
                  </Typography>
                  <OpenInNewIcon fontSize="small" sx={{ color: "#333333" }} />
                </Box>
              </StyledLinkText>
            </StyledLink>
          </ListItem>
          <ListItem>
            <StyledLink
              href="https://support.parity.us.com/"
              target="_blank"
              onClick={onClose}
            >
              <StyledLinkText>
                <Box sx={{ display: "flex", alignItems: "center", gap: "4px" }}>
                  <Typography
                    variant="body1"
                    sx={{
                      fontFamily: "inherit",
                      color: "#333333",
                    }}
                  >
                    Remote access
                  </Typography>
                  <OpenInNewIcon fontSize="small" sx={{ color: "#333333" }} />
                </Box>
              </StyledLinkText>
            </StyledLink>
          </ListItem>
        </List>
      </Box>
    </Drawer>
  )
}
