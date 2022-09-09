import React from "react"
import Logo from "../assets/Logonobg.png"

export default function Header() {
  return (
    <header className="Header">
      <div>
      <nav>
        <a href="Home">Home</a>
      </nav>
      <nav>
        <a href="Login">Login</a>
      </nav>
      <nav>
        <a href="SignUp">Sign Up</a>
      </nav>
      <nav>
        <a href="AddCar">Add Car</a>
      </nav>
      </div>
      <div>
        <img src={Logo} alt="" width="100" height="100" />
      </div>
    </header>
  )
}
