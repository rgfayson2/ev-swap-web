import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import Form from "react-bootstrap/Form"
// import { useState } from "react"

export default function Login() {
  return (
    <div className="App">
      <Modal.Dialog>
        <Modal.Title>User Login</Modal.Title>
        <Form>
          <Form.Group>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group>
            <Form.Check type="checkbox" label="Remember Me" />
          </Form.Group>
        </Form>
        <Modal.Footer>
          <Button variant="primary" id="submit">
            Login
          </Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  )
}
