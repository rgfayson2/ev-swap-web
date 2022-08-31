import React from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import Form from "./components/Form"
import "./App.css"
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <div className="Header">
        <Header />
      </div>
      <div className="App">
        <Hero />
        <Form />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  )
}

export default App
