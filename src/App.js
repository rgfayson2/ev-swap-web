import React from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <div className="Header">
        <Header />
      </div>
      <div className="App">
      <img className="mission-hero-img" 
      src="https://via.placeholder.com/513x341" alt="placeholder" />
        <Hero />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  )
}

export default App
