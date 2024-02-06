import { Modal ,Button} from "react-bootstrap";
const ReportDetailsModal = ({ user, onHide }) => {
  return (
    <Modal show={true} onHide={onHide} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>User Details</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <table className="custom-table">
            <thead>
              <tr>
                <th>Serial No.</th>
                <th> Name</th>
                <th> Email</th>
                <th> Phone Number</th>
                <th>Message</th>
              </tr>
            </thead>
        {user.map((userData, index) => (
          <tr key={userData._id}>
            <td>{index+1}</td>
            <td>{userData?.reportedByUserId?.name}</td> 
            <td>{userData?.reportedByUserId?.email}</td>
            <td>{userData?.reportedByUserId?.phoneNumber}</td>
            <td>{userData?.message}</td>
          </tr>
        ))}
        </table>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ReportDetailsModal