import React from "react"

interface GlowProps {
  customStyles?: object
  position: "bottom" | "top"
}

const Glow = ({ customStyles, position }: GlowProps) => {
  const mainStyle = {
    background: `radial-gradient(ellipse at ${position}, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 60%)`,
    width: "100%",
    height: "32px",
  }
  return <view className="glow" style={{ ...mainStyle, ...customStyles }} />
}

export default Glow
