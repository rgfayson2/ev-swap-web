import React from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <Hero />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default App
