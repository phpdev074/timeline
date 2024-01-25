import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ContactListComponent = () => {
  const [contactList, setContactList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContactList = async () => {
      try {
        const jwtToken = localStorage.getItem("jwtToken");
        const headers = { Authorization: jwtToken };
        // Fetch contact list details from the API endpoint
        const response = await axios.get('http://ludhianahosierycentre.co.in:5005/api/contact/get-contactUs-details',{ headers });
        setContactList(response?.data?.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching contact list:', error);
        setLoading(false);
      }
    };

    fetchContactList();
  }, []);

  return (
    <>
      <div className="contact-list-component">
        <h1>Contact Us List</h1>
      </div>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
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
              {contactList.map((contact, index) => (
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
        )}
      </div>
    </>
  );
};

export default ContactListComponent;
