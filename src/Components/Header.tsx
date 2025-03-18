import React from "react"
import "../styles/header.scss"

const Header = () => {
  return (
    <view className="header-container">
      <view className="header-container__shadow" />
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
  )
}

export default Header
