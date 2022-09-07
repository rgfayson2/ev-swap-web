import { useEffect } from "react"

export default function Search({ carlist, setCarlist }) {
  useEffect(() => {
    fetch("http://localhost:6013/cars")
    // fetch("https://ev-swap-api.web.app/cars")
      .then((results) => results.json())
      .then((data) => {
        setCarlist(data)
      })
      .catch(console.error)
  }, [setCarlist])

  if (!carlist) {
    return <h2>No cars added!</h2>
  }
  ;<div>
    <ul>
        
      {carlist.map((car) => (
        <li key={car.id}>{car.car}</li>
      ))}
    </ul>
  </div>
}
