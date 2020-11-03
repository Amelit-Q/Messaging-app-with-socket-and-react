import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { v4 as uuidv4, v4 } from 'uuid';

export const Login = ({ onIdSubmit }) => {
  const idRef = React.useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    onIdSubmit(idRef.current.value);
  };

  const createNewId = (e) => {
    onIdSubmit(v4());
  };

  return (
    <Container className="align-items-center d-flex" style={{ height: '100vh' }}>
      <Form onSubmit={handleSubmit} className="w-100">
        <Form.Group>
          <Form.Label>Enter your ID</Form.Label>
          <Form.Control type="text" ref={idRef} required />
        </Form.Group>
        <Button type="submit" className="mr-2">
          Login
        </Button>
        <Button variant="secondary" onClick={createNewId}>
          Create A New Id
        </Button>
      </Form>
    </Container>
  );
};
