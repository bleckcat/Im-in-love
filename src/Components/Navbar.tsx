import React from "react"
import menu from "../assets/menu.png"
import friends from "../assets/friends.png"
import home from "../assets/home.png"
import searchList from "../assets/search-list.png"
import "../styles/navbar.scss"
import { useNavigate } from "react-router"
import Shadow from "./Shadow.jsx"
import Glow from "./Glow.jsx"

const Navbar = () => {
  const nav = useNavigate()
  return (
    <view className="navbar-container">
      <Glow position="bottom" />
      <view className="navbar">
        <Shadow
          customStyles={{ position: "absolute", top: 0 }}
          position="top"
        />
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
