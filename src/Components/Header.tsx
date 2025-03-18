import React from "react"
import "../styles/header.scss"
import Shadow from "./Shadow.jsx"
import Glow from "./Glow.jsx"

const Header = () => {
  return (
    <view className="header-container">
      <view className="header">
        <Shadow
          customStyles={{ position: "absolute", bottom: 0 }}
          position="bottom"
        />
        <view className="left">
          <text>left</text>
        </view>
        <view className="profile">
          <view className="profile__gap">
            <view className="profile__picture" />
          </view>
        </view>
        <view className="right">
          <text>right</text>
        </view>
      </view>
      <Glow customStyles={{ position: "absolute", bottom: "-32px" }} position="top" />
    </view>
  )
}

export default Header
