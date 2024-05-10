"use client"
import { cn } from "../../../utils/cn"
import React, { useEffect, useState } from "react"
import Box from "@mui/material/Box"
import Card from "@mui/material/Card"
import CardContent from "@mui/material/CardContent"
import Typography from "@mui/material/Typography"
import Avatar from "@mui/material/Avatar"
import tempAvatarImage from "../../../../../public/images/temp-avatar-image.png"

const MovingCardsSection = ({
  items,
  direction = "left",
  speed = "fast",
  pauseOnHover = true,
  className,
}: {
  items: {
    quote: string
    name: string
    company: string
    testimonialImage: string
  }[]
  direction?: "left" | "right"
  speed?: "fast" | "normal" | "slow"
  pauseOnHover?: boolean
  className?: string
}) => {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const scrollerRef = React.useRef<HTMLUListElement>(null)

  useEffect(() => {
    addAnimation()
  }, [addAnimation])
  const [start, setStart] = useState(false)
  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children)

      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true)
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem)
        }
      })

      getDirection()
      getSpeed()
      setStart(true)
    }
  }
  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        )
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        )
      }
    }
  }
  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s")
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s")
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s")
      }
    }
  }

  return (
    <div
      ref={containerRef}
      className={cn("scroller relative z-20  max-w-7xl", className)}
    >
      <Box
        component={"ul"}
        ref={scrollerRef}
        className={cn(
          start && "animate-scroll ",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        sx={{ width: "100%", display: "flex", gap: "12px" }}
      >
        {items.map((item, idx) => (
          <Box
            component={"li"}
            sx={{
              minWidth: { xs: "340px", sm: "440px" },
              maxWidth: "300px",
              background: "#FDFCFC",
            }}
            key={item.name}
          >
            <Card>
              <CardContent>
                <Box
                  component={"blockquote"}
                  sx={{
                    height: "100%",
                  }}
                >
                  <div
                    aria-hidden="true"
                    className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
                  ></div>
                  <Box>
                    <Box sx={{ padding: "8px 0px" }}>
                      <Typography variant="body1" color="#333333">
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
                          color="rgba(51, 51, 51, 1)"
                        >{`${item.name}`}</Typography>
                        <Typography
                          variant="body2"
                          color="rgba(51, 51, 51, 0.6)"
                        >{`${item.company}`}</Typography>
                      </Box>
                      <Avatar
                        alt="testimonial avatar"
                        src={tempAvatarImage.src}
                      >
                        R
                      </Avatar>
                    </Box>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </div>
  )
}

export default MovingCardsSection
