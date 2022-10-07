import { useState } from "react"
import { Button, InputGroup, Card, Form } from "react-bootstrap"
import Logo from "../assets/Logo.jpg"

export default function AddCar() {
  const [make, setMake] = useState()
  const [model, setModel] = useState()
  const [year, setYear] = useState()
  const [color, setColor] = useState()

  const newCar = {
    make: make,
    model: model,
    year: year,
    color: color,
  }


  const createCar = event => {
   event.preventDefault()

    fetch("http://localhost:4000/cars", {
      // fetch("https://ev-swap-api.web.app/cars", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCar),
    })
      .then((results) => results.json())
      .then((data) => {
        console.log(data)
        setMake("")
        setModel("")
        setYear("")
        setColor("")

      })
      .then(console.log({ newCar }))
      .then()
      .catch(console.error)
  }

  return (
    <div className="App">
      <Card style={{ width: "18rem" }} >
        <Card.Img variant="top" src={Logo} />
        <Card.Body>
          <Card.Title>Car Info</Card.Title>
          <div>
            <InputGroup size="lg">
              <InputGroup.Text id="inputGroup-sizing-lg">
                Make
              </InputGroup.Text>
              <Form.Control
              onSubmit={(e) => e.preventDefault()}
              aria-label="Default"
              aria-describedby="inputGroup-sizing-default"
                onChange={(e) => setMake(e.target.value)}
                value={make}
              />
            </InputGroup>
          </div>
          <div>
            <InputGroup size="lg">
              <InputGroup.Text id="inputGroup-sizing-lg">
                Model
              </InputGroup.Text>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={(e) => setModel(e.target.value)}
                value={model}
              />
            </InputGroup>
          </div>
          <div>
            <InputGroup size="lg">
              <InputGroup.Text id="inputGroup-sizing-default">
                Year
              </InputGroup.Text>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={(e) => setYear(e.target.value)}
                value={year}
              />
            </InputGroup>
          </div>
          <div>
            <InputGroup size="lg">
              <InputGroup.Text id="inputGroup-sizing-default">
                Color
              </InputGroup.Text>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={(e) => setColor(e.target.value)}
                value={color}
              />
            </InputGroup>
          </div>
          <div>
            <Button variant="primary" id="submit" onClick={event => createCar(event)}>
              Add Car
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}
