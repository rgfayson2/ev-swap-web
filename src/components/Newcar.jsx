import { useState } from "react"
import { Button, InputGroup, Card, Form } from "react-bootstrap"

export default function AddNewCar({ setCarlist }) {
  const [car, setCar] = useState("")
  const createCar = () => {
    fetch("http://localhost:6013/cars", {
    // fetch("https://https://ev-swap-api.web.app//cars", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ car, done: false }),
    })
      .then((results) => results.json())
      .then((data) => {
        setCarlist(data)
        setCar("")
      })
      .catch(console.error)
  }
  return (
    <div className="App">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Car Info</Card.Title>
          <div>
            <InputGroup size="lg">
              <InputGroup.Text id="inputGroup-sizing-default">
                Make
              </InputGroup.Text>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
              />
            </InputGroup>
          </div>
          <div>
            <InputGroup size="lg">
              <InputGroup.Text id="inputGroup-sizing-default">
                Model
              </InputGroup.Text>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
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
              />
            </InputGroup>
          </div>
          <div>
          <Button variant="primary" id="submit"onSubmit={createCar}>Add Car</Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}
