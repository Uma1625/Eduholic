"use client"
import { BrowserRouter as Router } from "react-router-dom"
import App from "../src/App"
import "../src/styles/index.css"
import "../src/components/Header.css"
import "../src/pages/Home.css"

export default function Page() {
  return (
    <Router>
      <App />
    </Router>
  )
}
