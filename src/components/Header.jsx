import React from "react"
import Logo from "../assets/Logonobg.png"

export default function Header() {
  return (
    <header className="Header">
      <nav>
        <a href="Sign Up">Sign Up</a>
      </nav>
      <div>
        <img src={Logo} alt="" width="100" height="100" />
      </div>
      <nav>
        <a href="Login">Login</a>
      </nav>

    </header>
  )
}
