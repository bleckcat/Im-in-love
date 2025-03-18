import { root } from "@lynx-js/react"

import { App } from "./App.js"

import "./styles/index.css"
import { MemoryRouter, Route, Routes } from "react-router"
import Menu from "./Components/Menu/Menu.jsx"

root.render(
  <MemoryRouter>
    <view className="main-container">
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/Menu" element={<Menu />} />
      </Routes>
    </view>
  </MemoryRouter>
)

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
}
