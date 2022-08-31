import { Button } from "react-bootstrap"
import { useState } from "react"

export default function (Hero) {
  const [addCar, setAddCar] = useState()
  const handleAddCar = () => setAddCar(addCar)

  return (
    <div>
      <h2>Swap Cars</h2>
      <h5>I want a carousel here</h5>
      <img
        className="mission-hero-img"
        src="https://via.placeholder.com/513x341"
        alt="placeholder"
      />
      <br></br>
      {/* <div className="mb-2">
        <Button
          onClick={handleAddCar}
          onSubmit={console.log("info submitted")}
          variant="primary"
          size="lg"
        >
          {" "}
          Add Car Info
        </Button>{" "}
        {""}
      </div> */}
    </div>
  )
}
