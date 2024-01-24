import React, { useEffect, useState } from "react";
import axios from "axios";
import { Dropdown, Button, FormControl } from "react-bootstrap";
import UserDetailsModal from "../pages/UserModal";

const UserComponent = () => {
  const [userInfo, setUserInfo] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const getUserData = async (page) => {
    try {
      const jwtToken = localStorage.getItem("jwtToken");
      const headers = { Authorization: jwtToken };

      const response = await axios.get(
        `http://ludhianahosierycentre.co.in:5005/api/user-data?page=${page}`,
        { headers }
      );

      setUserInfo(response?.data?.data);
      setTotalPages(response?.data?.totalPages || 1);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    getUserData(currentPage);
  }, [currentPage]);

  const handlePagination = (direction) => {
    const newPage = direction === "prev" ? currentPage - 1 : currentPage + 1;
    setCurrentPage(newPage);
  };

  const handleStatusChange = async (userId, newStatus) => {
    try {
      const jwtToken = localStorage.getItem("jwtToken");
      const headers = { Authorization: jwtToken };

      await axios.put(
        `http://ludhianahosierycentre.co.in:5005/api/update-status/${userId}`,
        { status: newStatus },
        { headers }
      );

      getUserData(currentPage);
    } catch (error) {
      console.error("Error updating status:", error);
    }
  };

  const openModal = (user) => {
    setSelectedUser(user);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setIsModalOpen(false);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSort = (option) => {
    setSortOption(option);
  };

  const sortedUserInfo = () => {
    let sortedUsers = [...userInfo];
    if (sortOption === "active") {
      sortedUsers = sortedUsers.filter((user) => user.status === "active");
    } else if (sortOption === "inactive") {
      sortedUsers = sortedUsers.filter((user) => user.status === "inactive");
    }
    return sortedUsers;
  };

  const filteredUserInfo = sortedUserInfo().filter((user) => {
    const regex = new RegExp(searchQuery, "i");
    return regex.test(user.name);
  });

  return (
    <>
      <div className="user-component">
        <h1>User Details</h1>
      </div>
      <div className="search-component">
        <FormControl
          type="text"
          placeholder="Search by Name"
          onChange={handleSearchChange}
          value={searchQuery}
        />
      </div>
      <div className="sort-component">
        <label>Sort by user status: </label>
        <Button
          variant={sortOption === null ? "primary" : "outline-primary"}
          onClick={() => handleSort(null)}
          style={{ marginRight: "5px" }}
        >
          All
        </Button>
        <Button
          variant={sortOption === "active" ? "success" : "outline-success"}
          onClick={() => handleSort("active")}
          style={{ marginRight: "5px" }}
        >
          Active
        </Button>
        <Button
          variant={sortOption === "inactive" ? "danger" : "outline-danger"}
          onClick={() => handleSort("inactive")}
        >
          Inactive
        </Button>
      </div>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="custom-table">
            <thead>
              <tr>
                <th>Serial No.</th>
                <th>User Image</th>
                <th>Name</th>
                <th>Email</th>
                <th>Phone Number</th>
                <th>Status</th>
                <th>Action</th>
                <th>View Details</th>
              </tr>
            </thead>
            <tbody>
              {filteredUserInfo.map((user, index) => (
                <tr key={user._id} >
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={user.image}
                      alt="User"
                      style={{
                        width:"100%",
                        maxWidth:"35px",
                        borderRadius: "100%",
                        display: "block",
                        overflow:"hidden",
                        objectFit:"cover",
                      }}
                    />
                  </td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                  <td>
                    {user.status === "active" ? (
                      <Button variant="success">Activate</Button>
                    ) : (
                      <Button variant="danger">In-activate</Button>
                    )}
                  </td>
                  <td>
                    <Dropdown>
                      <Dropdown.Toggle variant="light" id="dropdown-basic">
                        {user.status === "active" ? "Active" : "Inactive"}
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item
                          onClick={() =>
                            handleStatusChange(user._id, "active")
                          }
                        >
                          Activate
                        </Dropdown.Item>
                        <Dropdown.Item
                          onClick={() =>
                            handleStatusChange(user._id, "inactive")
                          }
                        >
                          Inactivate
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </td>
                  <td>
                    <Button
                      variant="success"
                      onClick={() => openModal(user)}
                    >
                      View Details
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
      <div className="pagination">
        <Button
          variant="dark"
          disabled={currentPage === 1}
          onClick={() => handlePagination("prev")}
        >
          Previous
        </Button>
        <span className="heading">{`Page ${currentPage} of ${totalPages}`}</span>
        <Button
          variant="dark"
          disabled={currentPage === totalPages}
          onClick={() => handlePagination("next")}
        >
          Next
        </Button>
      </div>
      <UserDetailsModal
        isOpen={isModalOpen}
        onClose={closeModal}
        user={selectedUser}
      />
    </>
  );
};

export default UserComponent;
