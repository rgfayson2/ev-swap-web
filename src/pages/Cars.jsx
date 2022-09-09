import React from "react"
import { useEffect } from "react"
import { useState } from "react"

export default function Cars() {
  const [carList, setCarList] = useState()
  useEffect(() => {
    fetch("http://localhost:4000/cars")
     // fetch("https://https://ev-swap-api.web.app/cars")
     .then(response => response.json())
     .then(cars => setCarList(cars))
     .catch(console.error)
  },[carList])
  return (
    <div>
      
     </div> 
  )
}
