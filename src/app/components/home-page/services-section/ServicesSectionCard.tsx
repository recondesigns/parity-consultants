import React from "react"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Avatar from "@mui/material/Avatar"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import DnsIcon from "@mui/icons-material/Dns"
import PolicyIcon from "@mui/icons-material/Policy"
import LockClockIcon from "@mui/icons-material/LockClock"
import QuestionsIcon from "@mui/icons-material/QuestionAnswer"
import HelpIcon from "@mui/icons-material/Help"
import CheckCircleIcon from "@mui/icons-material/CheckCircle"

type Props = {
  service: {
    title: string | React.ReactNode
    servicesGroup: string[]
    icon: any
  }
}

const StyledCard = styled(Card)({}, ({ theme }) => ({}))

const setIcon = (iconName: string) => {
  switch (iconName) {
    case "dns":
      return <DnsIcon />
    case "security":
      return <PolicyIcon />
    case "protection":
      return <LockClockIcon />
    case "consulting":
      return <QuestionsIcon />
    case "support":
      return <HelpIcon />
    default:
      return <DnsIcon />
  }
}

export default function ServicesSectionCard({ service }: Props) {
  return (
    <StyledCard
      sx={{
        padding: { xs: "20px 0px 16px 0px" },
        background: "none",
        height: "100%",
        boxShadow: "none",
        borderRadius: "20px",
      }}
    >
      <CardContent
        sx={{
          height: "max-content",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          py: { xs: 0 },
          px: { xs: 1, sm: 18, md: 6, lg: 2, xl: 10 },
        }}
      >
        <Box
          sx={{
            paddingBottom: { xs: "24px" },
            width: { xs: "100%" },
            display: "flex",
            justifyContent: "flex-start",
          }}
        >
          <Avatar
            sx={{
              height: { xs: "56px", md: "48px" },
              width: { xs: "56px", md: "48px" },
              backgroundImage: "linear-gradient(45deg, #fc5c7d, #6a82fb)",
              borderRadius: "8px",
            }}
          >
            {setIcon(service.icon)}
          </Avatar>
        </Box>

        <Box
          sx={{
            paddingBottom: { xs: "8px" },
            width: { xs: "100%" },
          }}
        >
          <Typography
            variant="h6"
            component="h3"
            textAlign={{ xs: "left" }}
            sx={{
              fontFamily: "inherit",
              fontWeight: "bold",
              color: "#fdfcfc",
            }}
          >
            {service.title}
          </Typography>
        </Box>

        <Box
          component="ul"
          sx={{
            width: { xs: "100%" },
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            listStyleType: "none",
            gap: "8px",
          }}
        >
          {service.servicesGroup.map((service, idx) => (
            <Box
              key={idx}
              component="li"
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "8px",
              }}
            >
              <Box>
                <CheckCircleIcon fontSize="small" sx={{ color: "#c6ffdd" }} />
              </Box>
              <Typography
                variant="body1"
                component="p"
                sx={{
                  fontFamily: "inherit",
                  color: "#fdfcfc",
                }}
              >
                {service}
              </Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
    </StyledCard>
  )
}
