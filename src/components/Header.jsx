import React from "react"
import Logo from "../assets/Logonobg.png"

export default function Header() {
  return (
    <header>
      <div className="Header">
        <nav>
          <a style={{color: "white"}} href="Home">Home</a>
        </nav>
        <nav>
          <a style={{color: "white"}} href="Login">Login</a>
        </nav>
        <nav>
          <a style={{color: "white"}} href="SignUp">Sign Up</a>
        </nav>
        <nav>
          <a style={{color: "white"}} href="AddCar">Add Car</a>
        </nav>
        <img src={Logo} alt="" width="100" height="100" />
      </div>
    </header>
  )
}
