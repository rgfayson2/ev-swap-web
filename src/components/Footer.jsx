import React from "react"
import Logo from "../assets/Logonobg.png"
import IGlogo from "../assets/ig.jpg"
import Facebook from "../assets/facebook.png"
import TikTok from "../assets/tiktok.jpg"
import Twitter from "../assets/twitter.png"

export default function Footer() {
  return (
    <footer className="Footer">
      <div>
        <h5>Follow Us</h5>
        <div >
        <img src={IGlogo} alt="" width="50" height="50" />
        <img src={Facebook} alt="" width="50" height="50" />
        <img src={TikTok} alt="" width="50" height="50" />
        <img src={Twitter} alt="" width="50" height="50" />
        </div>
      </div>

      <img src={Logo} alt="" width="100" height="100" />
      <h5>Created by Roderick Fayson &copy;</h5>
    </footer>
  )
}
