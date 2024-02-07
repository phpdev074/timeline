import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Modal, Button } from "react-bootstrap";

const UserDetailsModal = ({ isOpen, onClose, user }) => {
  const currentDate = new Date(user?.dateOfBirth);
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1; 
  const year = currentDate.getFullYear();
  const formattedDate = `${day < 10 ? '0' + day : day}-${month < 10 ? '0' + month : month}-${year.toString().slice(-2)}`;
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
                    height:100,
                    width:100,
                    borderRadius: "100%",
                    display: "block",
                    overflow:"hidden",
                    objectFit:'cover',
                    margin:"auto" 
                  }}
                />
              )}
            </div>
            <p>Name: {user?.name}</p>
            <p>Email: {user?.email}</p>
            <p>Phone Number: {user?.phoneNumber}</p>
            <p>Gender: {user?.gender}</p>
            <p>Date of Birth: {formattedDate}</p>
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