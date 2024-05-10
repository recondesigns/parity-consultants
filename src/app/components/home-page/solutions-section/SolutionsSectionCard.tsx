import React from "react"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Avatar from "@mui/material/Avatar"
import StorageIcon from "@mui/icons-material/Storage"
import LockPersonIcon from "@mui/icons-material/LockPerson"
import SeachIcon from "@mui/icons-material/Search"
import BackupIcon from "@mui/icons-material/Backup"
import SecurityIcon from "@mui/icons-material/Security"
import ComputerIcon from "@mui/icons-material/Computer"
import WifiIcon from "@mui/icons-material/Wifi"

type Props = {
  solution: {
    title: string | React.ReactNode
    description: string
    icon: string
  }
}

const StyledCard = styled(Card)(
  {
    background: "pink",
    boxShadow:
      "0px 2px 1px -1px rgba(51, 51, 51, 0.2),0px 1px 1px 0px rgba(51, 51, 51, 0.14),0px 1px 3px 0px rgba(51, 51, 51, 0.12)",
  },
  ({ theme }) => ({})
)

const setIcon = (iconName: string) => {
  switch (iconName) {
    case "storage":
      return <StorageIcon />
    case "lock":
      return <LockPersonIcon />
    case "search":
      return <SeachIcon />
    case "security":
      return <SecurityIcon />
    case "backup":
      return <BackupIcon />
    case "computer":
      return <ComputerIcon />
    case "wifi":
      return <WifiIcon />
    default:
      return <StorageIcon />
  }
}

export default function SolutionsSectionCard({ solution }: Props) {
  return (
    <StyledCard
      sx={{
        background: "#FDFCFC",
        height: "100%",
      }}
    >
      <CardContent sx={{ height: "max-content" }}>
        <Box sx={{ paddingBottom: "20px" }}>
          <Avatar
            sx={{
              background: "#D95C5C",
              height: { xs: "40px", md: "48px" },
              width: { xs: "40px", md: "48px" },
            }}
          >
            {setIcon(solution.icon)}
          </Avatar>
        </Box>
        <Box>
          <Typography
            variant="h5"
            component="h5"
            color="#333333"
            sx={{
              mb: { xs: 0.5, md: 0 },
              width: "100%",
              minHeight: { xs: "none", md: "72px" },
              maxHeight: { xs: "none", md: "72px" },
            }}
          >
            {solution.title}
          </Typography>
          <Typography variant="body1" component="p" color="#333333">
            {solution.description}
          </Typography>
        </Box>
      </CardContent>
    </StyledCard>
  )
}
