"use client"
import React from "react"
import Grid from "@mui/material/Grid"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Avatar from "@mui/material/Avatar"

function getInitials(name: string) {
  const splitName = name.split(" ")

  const initals = splitName.map((theName) => theName.charAt(0).toUpperCase())

  return initals.join("")
}

const MovingCardsSection = ({
  items,
}: {
  items: {
    quote: string
    name: string
    company: string
    testimonialImage: string
  }[]
}) => {
  return (
    <Box>
      <Grid component={"ul"} container spacing={"20px"}>
        {items.map((item, idx) => (
          <Grid
            item
            component={"li"}
            xs={12}
            md={6}
            lg={4}
            sx={{
              borderRadius: "20px",
            }}
            key={item.name}
          >
            <Card
              sx={{
                background: "#FDFCFC",
                borderRadius: "20px",
                boxShadow: "none",
              }}
            >
              <CardContent>
                <Box
                  component={"blockquote"}
                  sx={{
                    height: "100%",
                  }}
                >
                  <Box>
                    <Box sx={{ padding: "8px 0px" }}>
                      <Typography
                        variant="body1"
                        component="p"
                        fontFamily="inherit"
                        color="#333333"
                      >
                        {item.quote}
                      </Typography>
                    </Box>

                    <Box
                      sx={{
                        padding: "8px 0px",
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                      }}
                    >
                      <Box sx={{ display: "flex", flexDirection: "column" }}>
                        <Typography
                          variant="body2"
                          fontFamily="inherit"
                          color="#333333"
                        >{`${item.name}`}</Typography>
                        <Typography
                          variant="body2"
                          fontFamily="inherit"
                          color="#333333"
                        >{`${item.company}`}</Typography>
                      </Box>
                      <Avatar
                        alt="testimonial avatar"
                        sx={{ background: "#D95C5C" }}
                      >
                        {getInitials(`${item.name}`)}
                      </Avatar>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default React.memo(MovingCardsSection)
