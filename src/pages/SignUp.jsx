import React from "react";
import { Form, Modal, Button } from "react-bootstrap";

export default function SignUp() {
    return(
        <div className="App">
        <Modal.Dialog>
          
            <Modal.Title>Sign Up</Modal.Title>
          
          <Form>
            <Form.Group >
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text >
               Enter a valid e-mail address
              </Form.Text>
            </Form.Group>
            <Form.Group  >
              <Form.Control type="password" placeholder="Password" />
              Choose a Password
            </Form.Group>
          </Form>
          <Modal.Footer>
            <Button >Create Login</Button>
          </Modal.Footer>
        </Modal.Dialog>
        </div>
    )
}

