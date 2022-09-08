import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from "./components/Header"
// import Hero from "./components/Hero"
import Footer from "./components/Footer"
import Newcar from "./components/Newcar"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
   <BrowserRouter>
   <Header />
   <Routes>
    

   </Routes>
   <Footer />
   </BrowserRouter>
  )
}

export default App
