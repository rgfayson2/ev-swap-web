import { useState } from "react"
import { Form, Modal, Button } from "react-bootstrap"

export default function SignUp() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const newUser = {
    email: email,
    password: password,
  }

  const createUser = (event) => {
    event.preventDefault()

    fetch("http://localhost:4000/users", {
      // fetch("https://ev-swap-api.web.app/users",{
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((results) => results.json())
      .then((data) => {
        console.log(data)
        setEmail("")
        setPassword("")
      })
      .then(console.log({ newUser }))
      .then()
      .catch(console.error)
  }
  return (
    <div className="App">
      <Modal.Dialog>
        <h1>Sign Up</h1>
        <Form onSubmit={(e) => e.preventDefault()}>
          <Form.Group>
            <Form.Control
              type="email"
              placeholder="Enter email"
              onChange={(event) => setEmail(event.target.value)}
              value={email}
            />
            <Form.Text>Enter a valid e-mail address</Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Control
              type="password"
              placeholder="Password"
              onChange={(event) => setPassword(event.target.value)}
              value={password}
            />
            Choose a Password
          </Form.Group>
        </Form>
        <Modal.Footer>
          <Button onClick={(event) => createUser(event)}>Create Login</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  )
}
