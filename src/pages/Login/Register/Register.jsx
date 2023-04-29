import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { error } from "daisyui/src/colors";
import { useState } from "react";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [accepted,setAccepted] = useState(false)

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    createUser(email, password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.log(error));
  };

  const handleAccepted = e =>{
    const checked = e.target.checked
    setAccepted(checked)
    
  }
  return (
    <Container>
      <h2>Please Register</h2>
      <Form onSubmit={handleRegister} className="w-25 mx-auto mt-4">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control name="name" type="text" placeholder="Enter Name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your photo URL</Form.Label>
          <Form.Control
            name="photo"
            type="text"
            placeholder="Enter photo URL"
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check
          onClick={handleAccepted}
            type="checkbox"
            name="accept"
            label={<>Accept <Link to='/terms'>terms and condition</Link></>}
          />
        </Form.Group>
        <Button disabled={!accepted} className="w-100" variant="primary" type="submit">
          Register
        </Button>
        <Form.Group className="text-secondary mt-2">
          Already have an account?
          <Link to="/login">login</Link>
        </Form.Group>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
