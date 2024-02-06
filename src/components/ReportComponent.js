import React, { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import axios from "axios";
import ReportDetailsModal from "../pages/ReportsDetailsModals";
const ReportComponent = () => {
  const [reportList, setReportList] = useState([]);
  const [detailsOfTheUser,setDetailsOfTheUser] = useState([])
  const [loading, setLoading] = useState(true);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jwtToken = localStorage.getItem("jwtToken");
        const headers = { Authorization: jwtToken };
        const response = await axios.get(
          "http://ludhianahosierycentre.co.in:5005/api/get-list-of-reports",
          { headers }
        );
        console.log(response?.data?.data)
        setReportList(response?.data?.data?.emailCounts);
        setDetailsOfTheUser(response?.data?.data?.getReportUsersLists)
        setLoading(false);
      } catch (error) {
        console.error("Error fetching report list:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleViewDetails = (email) => {
    const userDetails = detailsOfTheUser.filter((user)=>{
      return user?.userId?.email === email
    })
    if (userDetails) {
      setSelectedUser(userDetails);
    } else {
      console.error("User details not found for email:", email);
    }
  };
  const handleCloseModal = () => {
    setSelectedUser(null);
  };

  return (
    <div className="report-container">
      <div className="report-header">
        <h1>Reported User List</h1>
      </div>
      <div className="report-table-container">
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="custom-table">
            <thead>
              <tr>
                <th>Serial No.</th>
                <th>Reported User Name</th>
                <th>Number of Reports counts</th>
                <th>View</th>
              </tr>
            </thead>
            <tbody>
              {reportList.map((user, index) => (
                <tr key={user?._id}>
                  <td>{index + 1}</td>
                  <td>{user.name.toUpperCase()}</td>
                  <td>{user.count}</td>
                  <td>
                  <Button variant="primary" onClick={() => handleViewDetails(user.email)}>View Details</Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      {selectedUser && (
        <ReportDetailsModal user={selectedUser} onHide={handleCloseModal} />
      )}
    </div>
  );
};

export default ReportComponent;
