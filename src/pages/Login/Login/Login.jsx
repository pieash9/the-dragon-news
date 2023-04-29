import React, { useContext } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Login = () => {
  const {singIn} = useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  console.log('login page location', location)
  const from = location.state?.from?.pathname || '/category/0'

  const handleLogin = e=>{
    e.preventDefault()
    const form = e.target
    const email = form.email.value
    const password = form.password.value 
    console.log(email,password)

    singIn(email,password)
    .then(result =>{
      const loggedUser = result.user
      console.log(loggedUser)
      navigate(from,{replace:true})
    }).catch(error=>console.log(error))
  }

  
  return (
    <Container>
      <Form onSubmit={handleLogin} className="w-25 mx-auto mt-4">
        <h2>Please login</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control name="password" type="password" placeholder="Password" />
        </Form.Group>
        {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group> */}
        <Button className='w-100' variant="primary" type="submit">
          Login
        </Button>
        <Form.Group className="text-secondary mt-2">Don&apos;t have an account?
            <Link to='/register'>Register</Link>
        </Form.Group>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
    </Container>
  );
};

export default Login;
