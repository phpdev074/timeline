import React, { useEffect, useState } from "react";
import axios from "axios";
const ReportComponent = () => {
  const [reportList, setReportList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const jwtToken = localStorage.getItem("jwtToken");
        const headers = { Authorization: jwtToken };
        const response = await axios.get(
          "http://localhost:5005/api/report-list",
          { headers }
        );
        console.log(response?.data?.data);
        setReportList(response?.data?.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching contact list:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <>
      <div className="report-list-component">
        <h1>Report List</h1>
      </div>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            <table className="report-table">
              <thead>
                <tr>
                  <th>Serial No.</th>
                  <th>Reported By UserName</th>
                  <th>Reported To UserName</th>
                  <th>Message</th>
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
          </>
        )}
      </div>
    </>
  );
};
export default ReportComponent;
