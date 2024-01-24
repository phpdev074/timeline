import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Modal, Button } from "react-bootstrap";

const UserDetailsModal = ({ isOpen, onClose, user }) => {
  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>User Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {user && (
          <>
            <div className="text-center">
              {user.image && (
                <img
                  src={user.image}
                  alt="User"
                  style={{
                    width: "30%", 
                    height: "30%",
                    borderRadius: "50%",
                    display: "block",
                    margin: "auto", 
                  }}
                />
              )}
            </div>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p>Status: {user.status}</p>
            <p>Phone Number: {user.phoneNumber}</p>
            <p>Subscription: {user?.subscription}</p>
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