import React from "react"

interface ShadowProps {
  customStyles?: object
  position: "bottom" | "top"
}

const Shadow = ({ position, customStyles }: ShadowProps) => {
  const mainStyle = {
    background: `radial-gradient(ellipse at ${position}, rgba(21, 0, 124, 0.1) 0%, rgba(0, 0, 0, 0) 60%)`,
    width: "100%",
    height: "8px",
  }
  return <view style={{ ...mainStyle, ...customStyles }} />
}

export default Shadow
