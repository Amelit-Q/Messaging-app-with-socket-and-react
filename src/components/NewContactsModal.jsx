import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

export const NewContactsModal = ({ closeModal }) => {
  const idRef = React.useRef();
  const nameRef = React.useRef();
  const handleSubmit = (e) => {
    e.preventDefault();

    //createContact(idRef.current.value, nameRef.current.value);
    closeModal();
  };

  return (
    <>
      <Modal.Header closeButton>Create Contact</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Id</Form.Label>
            <Form.Control type="text" ref={idRef} required />
          </Form.Group>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" ref={nameRef} required />
          </Form.Group>
          <Button type="submit">Create</Button>
        </Form>
      </Modal.Body>
    </>
  );
};
