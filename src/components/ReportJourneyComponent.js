import React, { useEffect, useState } from "react";
import axios from "axios";
const ReportJourneyComponents = () => {
  const [journeyList, setJourneyList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllJourneyList = async () => {
      try {
        const jwtToken = localStorage.getItem("jwtToken");
        const headers = { Authorization: jwtToken };
        const journeyListResponse = await axios.get(
          "http://ludhianahosierycentre.co.in:5005/api/journey/get-all-user-journey-details",
          { headers }
        );
        console.log(journeyListResponse?.data?.data)
        setJourneyList(journeyListResponse.data.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false); 
      }
    };
    getAllJourneyList(); 
  }, []); 
  return (
    <>
       <div className="report-container">
      <div className="report-header">
        <h1>Timline capsule List</h1>
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
           
            </tbody>
          </table>
        )}
      </div>
    </div>

    </>
  );
};

export default ReportJourneyComponents;
