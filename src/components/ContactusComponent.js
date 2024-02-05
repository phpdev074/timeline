import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
const ContactListComponent = () => {
  const [contactList, setContactList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(10);

  useEffect(() => {
    const fetchContactList = async () => {
      try {
        const jwtToken = localStorage.getItem('jwtToken');
        const headers = { Authorization: jwtToken };
        const response = await axios.get('http://ludhianahosierycentre.co.in:5005/api/contact/get-contactUs-details', { headers });
        setContactList(response?.data?.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching contact list:', error);
        setLoading(false);
      }
    };

    fetchContactList();
  }, []);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = contactList.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <div className="contact-list-component">
        <h1>Contact Us List</h1>
      </div>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Serial No.</th>
                  <th>User Name</th>
                  <th>User Email</th>
                  <th>User Phone Number</th>
                  <th>Title</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                {currentItems.map((contact, index) => (
                  <tr key={contact._id}>
                    <td>{index + 1}</td>
                    <td>{contact?.userId?.name}</td>
                    <td>{contact?.userId?.email}</td>
                    <td>{contact?.userId?.phoneNumber}</td>
                    <td>{contact.title}</td>
                    <td>{contact.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="pagination">
              <Button onClick={() => paginate(currentPage - 1)} variant="dark" disabled={currentPage === 1}>
                Previous
              </Button>
              <span>{currentPage}</span>
              <Button onClick={() => paginate(currentPage + 1)}  variant="dark" disabled={currentPage === Math.ceil(contactList.length / itemsPerPage)}>
                Next
              </Button>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ContactListComponent;
