import React from "react"
import Link from "next/link"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"

type Props = {
  service: {
    title: string | React.ReactNode
    servicesGroup: string[]
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

export default function ServicesSectionCard({ service }: Props) {
  return (
    <StyledCard
      sx={{
        background: "#FDFCFC",
        height: "100%",
      }}
    >
      <CardContent sx={{ height: "max-content" }}>
        <Typography
          sx={{ fontSize: 14 }}
          color="rgba(51, 51, 51, 0.7)"
          gutterBottom
        >
          Services
        </Typography>
        <Typography
          variant="h5"
          component="div"
          color="#333333"
          sx={{ mb: 1.5, height: "calc(2rem * 2)" }}
        >
          {service.title}
        </Typography>
        <Box
          component="ul"
          sx={{
            paddingLeft: "16px",
            listStyleType: "circle",
          }}
        >
          {service.servicesGroup.map((service) => (
            <Box component="li">
              <Typography variant="body1">{service}</Typography>
            </Box>
          ))}
        </Box>
      </CardContent>
      <CardActions sx={{ paddingLeft: "16px" }}>
        <Button
          size="small"
          href={"/services"}
          component={Link}
          sx={{ color: "#3634C6" }}
        >
          Learn more
        </Button>
      </CardActions>
    </StyledCard>
  )
}
