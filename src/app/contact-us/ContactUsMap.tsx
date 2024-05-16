"use client"
import React from "react"
import Box from "@mui/material/Box"
import Typography from "@mui/material/Typography"
// import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps"

type Props = {}

export default function ContactUsMap({}: Props) {
  return (
    <Box sx={{ width: "100", height: "100%" }}>
      <Box
        sx={{
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "lightgray",
        }}
      >
        <Typography
          variant="h6"
          component="p"
          sx={{ fontFamily: "inherit", color: "#333333" }}
        >
          Map placeholder
        </Typography>
      </Box>
      {/* <APIProvider apiKey={"AIzaSyAK8dx5WhYcW_qxppgG_2h_t27K1tZlPZk"}>
        <Map
          style={{ width: "100%", height: "100%" }}
          defaultCenter={{ lat: 33.011573791503906, lng: -96.96389770507812 }}
          defaultZoom={16}
          gestureHandling={"greedy"}
          disableDefaultUI={true}
        >
          <Marker
            position={{ lat: 33.011573791503906, lng: -96.96389770507812 }}
          />
        </Map>
      </APIProvider> */}
    </Box>
  )
}
