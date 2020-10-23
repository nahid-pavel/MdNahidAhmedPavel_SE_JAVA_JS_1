import React, { useState } from "react";
import { Form, Button, Container, Row, Col, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <Container>
      <Row className="justify-content-md-center py-3">
        <Col xs={12} md={4}>
          <Form>
            <Form.Group controlId="email">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group
              className="d-flex justify-content-between"
              controlId="submit"
            >
              <Button variant="primary" type="submit">
                Login
              </Button>
              <Nav.Link as={Link} to="/register" className="text-success">
                New Custome ? Register Here.
              </Nav.Link>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
