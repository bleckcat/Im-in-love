import React from "react"
import { useNavigate } from "react-router"

const Menu = () => {
  const nav = useNavigate()
  return (
    <view>
      <text bindtap={() => nav("/")}>Go back</text>
      <text>Menu</text>
    </view>
  )
}

export default Menu
