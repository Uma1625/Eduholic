import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import App from "./App"
import "./styles/index.css"
import AOS from "aos"
import "aos/dist/aos.css"

// Initialize AOS after DOM is ready
AOS.init({
  duration: 800,
  easing: "ease-out-cubic",
  once: true,
  offset: 50,
  delay: 0,
  mirror: false,
  anchorPlacement: "top-bottom",
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

window.addEventListener("load", () => {
  AOS.refresh()
})
