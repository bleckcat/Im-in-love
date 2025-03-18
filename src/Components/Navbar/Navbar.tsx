import React from "react"
import menu from "../../assets/menu.png"
import friends from "../../assets/friends.png"
import home from "../../assets/home.png"
import searchList from "../../assets/search-list.png"
import "./navbar.scss"
import { useNavigate } from "react-router"

const Navbar = () => {
  const nav = useNavigate()
  return (
    <view className="navbar-container">
      <view className="navbar-glow" />
      <view className="navbar">
        <view className="navbar-shadow"></view>
        <image
          bindtap={() => nav("/menu")}
          src={home}
          style={{ width: "32px", height: "32px" }}
        />
        <image
          bindtap={() => nav("/menu")}
          src={friends}
          style={{ width: "32px", height: "32px" }}
        />
        <image
          bindtap={() => nav("/menu")}
          src={searchList}
          style={{ width: "32px", height: "32px" }}
        />
        <image
          bindtap={() => nav("/menu")}
          src={menu}
          style={{ width: "32px", height: "32px" }}
        />
      </view>
    </view>
  )
}

export default Navbar
