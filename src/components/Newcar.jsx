import { useState } from "react"
import { Button, InputGroup, Card, Form } from "react-bootstrap"
import Logo from "../assets/Logo.jpg"

export default function AddNewCar() {
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

  const createCar = ({ car }) => {
    fetch("http://localhost:4000/cars", {
      // fetch("https://https://ev-swap-api.web.app//cars", {
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
      })
      .then(console.log({ newCar }))
      .then()
      .catch(console.error)
  }

  // const updateForm = (event) => {
  //   //console.log(event.target.value)
  //   setForm({ ...form, [event.target.name]: event.target.value })
  // }

  return (
    <div className="App">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={Logo} />
        <Card.Body>
          <Card.Title>Car Info</Card.Title>
          <div>
            <InputGroup size="lg">
              <InputGroup.Text
                id="inputGroup-sizing-default"
                //     type='text'
                // name='make'
                // // required
                // value={form.make}
                //onChange={updateForm}
              >
                Make
              </InputGroup.Text>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={e => setMake(e.target.value)}
              />
            </InputGroup>
          </div>
          <div>
            <InputGroup size="lg">
              <InputGroup.Text
                id="inputGroup-sizing-default"
                //     type='text'
                // name='model'
                // // required
                // value={form.model}
                //onChange={updateForm}
              >
                Model
              </InputGroup.Text>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={e => setModel(e.target.value)}
              />
            </InputGroup>
          </div>
          <div>
            <InputGroup size="lg">
              <InputGroup.Text
                // type='text'
                // name='year'
                // // required
                // value={form.year}
                //onChange={updateForm}
                id="inputGroup-sizing-default"
              >
                Year
              </InputGroup.Text>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={e => setYear(e.target.value)}
              />
            </InputGroup>
          </div>
          <div>
            <InputGroup size="lg">
              <InputGroup.Text
                // type='text'
                // name='color'
                // // required
                // value={form.color}
                //onChange={updateForm}
                id="inputGroup-sizing-default"
              >
                Color
              </InputGroup.Text>
              <Form.Control
                aria-label="Default"
                aria-describedby="inputGroup-sizing-default"
                onChange={e => setColor(e.target.value)}
              />
            </InputGroup>
          </div>
          <div>
            <Button variant="primary" id="submit" onClick={createCar}>
              Add Car
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  )
}
