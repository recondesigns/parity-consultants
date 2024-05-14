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
        padding: "20px 0px",
        background: "none",
        height: "100%",
        boxShadow: "none",
      }}
    >
      <CardContent
        sx={{
          height: "max-content",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            paddingBottom: { xs: "16px" },
            display: "flex",
            justifyContent: "center",
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

        <Box sx={{ paddingBottom: { xs: "20px" } }}>
          <Typography
            variant="h5"
            component="div"
            textAlign="center"
            sx={{
              width: "100%",
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
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
            listStyleType: "none",
          }}
        >
          {service.servicesGroup.map((service, idx) => (
            <Box
              key={idx}
              component="li"
              sx={{
                paddingBottom: "8px",
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
