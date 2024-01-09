import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const UserDetailsModal = ({ isOpen, onClose, user }) => {
  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>User Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {user && (
          <>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Status: {user.status}</p>
            <p>Phone Number: {user.phoneNumber}</p>
            <p>Subscription : {user?.subscription}</p>
            {/* Add other user details as needed */}
          </>
        )}
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onClose}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default UserDetailsModal;
