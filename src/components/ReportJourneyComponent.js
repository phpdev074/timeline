import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import axios from "axios";
const ReportJourneyComponents = () => {
  const [journeyList, setJourneyList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedTimeline,setSelectedTimeline] = useState([]);
  const [detailsTimeline,setDetailsTimeline] = useState([]);

  useEffect(() => {
    const getAllJourneyList = async () => {
      try {
        const jwtToken = localStorage.getItem("jwtToken");
        const headers = { Authorization: jwtToken };
        const journeyListResponse = await axios.get(
          "http://ludhianahosierycentre.co.in:5005/api/journey/get-all-user-journey-details",
          { headers }
        );
        setJourneyList(journeyListResponse.data.data?.allJourneys);
        setDetailsTimeline(journeyListResponse.data.data?.timelineData)
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getAllJourneyList();
  }, []);
  const handleViewDetails=(id)=>{
    const getSelectedTimelineDetails = detailsTimeline.filter((timeline)=>{
        return timeline?.journeyId ===id
    })
    setSelectedTimeline(getSelectedTimelineDetails)
  }
  const handleCloseModal = () => {
    setSelectedTimeline(null);
  };
  return (
    <>
      <div className="report-container">
        <div className="report-header">
          <h1>Timline capsule</h1>
        </div>
        <div className="report-table-container">
          {loading ? (
            <p>Loading...</p>
          ) : (
            <table className="custom-table">
              <thead>
                <tr>
                  <th>Serial No.</th>
                  <th>Image</th>
                  <th>Title</th>
                  <th>Status</th>
                  <th>View Details</th>
                </tr>
              </thead>
              <tbody>
                {journeyList.map((journey, index) => (
                  <tr key={journey?._id}>
                    <td>{index + 1}</td>
                    <td>
                      {" "}
                      <img
                        src={
                          journey.image ||
                          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU06Uvui0W3-h5P35NrF39tBMIsm6ZGQSbYA"
                        }
                        alt="journey"
                        style={{
                          height: 60,
                          width: 60,
                          borderRadius: "100%",
                          display: "block",
                          overflow: "hidden",
                          objectFit: "cover",
                        }}
                      />
                    </td>
                    <td>{journey?.title}</td>
                    <td>{journey?.types}</td>
                    <td>
                      <Button variant="primary" onClick={() => handleViewDetails(journey?._id)}>View Details</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </>
  );
};

export default ReportJourneyComponents;
