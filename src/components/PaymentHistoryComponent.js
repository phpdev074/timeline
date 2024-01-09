import React from "react";
import { Table } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
const PaymentHistoryTable = () => {
  const paymentHistoryData = [
    {
      id: 1,
      userName: "John Doe    ",
      amount: "Yearly",
      startDate: "2022-01-15",
      endDate: "2022-01-15",
      status: "in-active",
    },
    {
      id: 2,
      userName: "Jane Doe    ",
      amount: "Monthly",
      startDate: "2022-02-20",
      endDate: "2022-01-15",
      status: "Active",
    },
    {
      id: 3,
      userName: "Alice Smith ",
      amount: "Yearly",
      startDate: "2022-03-05",
      endDate: "2022-01-15",
      status: "Active",
    },
    {
      id: 4,
      userName: "Alice Smith ",
      amount: "Yearly",
      startDate: "2022-03-05",
      endDate: "2022-01-15",
      status: "Active",
    },
    {
      id: 5,
      userName: "Alice Smith ",
      amount: "Yearly",
      startDate: "2022-03-05",
      endDate: "2022-01-15",
      status: "Active",
    },
    {
      id: 6,
      userName: "Alice Smith ",
      amount: "Yearly",
      startDate: "2022-03-05",
      endDate: "2022-01-15",
      status: "Active",
    },
    {
      id: 7,
      userName: "Alice Smith ",
      amount: "Yearly",
      startDate: "2022-03-05",
      endDate: "2022-01-15",
      status: "Active",
    },
    {
      id: 8,
      userName: "Alice Smith ",
      amount: "Yearly",
      startDate: "2022-03-05",
      endDate: "2022-01-15",
      status: "in-active",
    },
    {
      id: 9,
      userName: "Alice Smith ",
      amount: "Monthly",
      startDate: "2022-03-05",
      endDate: "2022-01-15",
      status: "in-active",
    },
    {
      id: 10,
      userName: "Alice Smith",
      amount: "Monthly",
      startDate: "2022-03-05",
      endDate: "2022-01-15",
      status: "in-active",
    },
    {
      id: 11,
      userName: "Alice Smith",
      amount: "Monthly",
      startDate: "2022-03-05",
      endDate: "2022-01-15",
      status: "in-active",
    },
    {
      id: 12,
      userName: "Alice Smith",
      amount: "Monthly",
      startDate: "2022-03-05",
      endDate: "2022-01-15",
      status: "in-active",
    },
    {
      id: 13,
      userName: "Alice Smith",
      amount: "Monthly",
      startDate: "2022-03-05",
      endDate: "2022-01-15",
      status: "in-active",
    },
    {
      id: 14,
      userName: "Alice Smith",
      amount: "Monthly",
      startDate: "2022-03-05",
      endDate: "2022-01-15",
      status: "in-active",
    },
    {
      id: 15,
      userName: "Alice Smith",
      amount: "Monthly",
      startDate: "2022-03-05",
      endDate: "2022-01-15",
      status: "in-active",
    },
    {
      id: 16,
      userName: "Alice Smith",
      amount: "Monthly",
      startDate: "2022-03-05",
      endDate: "2022-01-15",
      status: "in-active",
    },
  ];

  return (
    <div>
      <div className="search-component">
        <FormControl
          type="text"
          placeholder="Search by Name"
          style={{ marginBottom: "2%" }}
        />
      </div>
      <Table striped bordered hover>
  <thead>
    <tr>
      <th>ID</th>
      <th>User Name</th>
      <th>Plan (Yearly/Monthly)</th>
      <th>Subscription Date</th>
      <th>Status</th>
    </tr>
  </thead>
  <tbody>
    {paymentHistoryData.map((payment) => (
      <tr key={payment.id}>
        <td>{payment.id}</td>
        <td>{payment.userName}</td>
        <td>{payment.amount}</td>
        <td>
          {payment.date}
          <div>
            <strong>Start Date:</strong> {payment?.startDate}
          </div>
          <div>
            <strong>End Date:</strong> {payment?.endDate}
          </div>
        </td>
        <td>{payment.status}</td>
      </tr>
    ))}
  </tbody>
</Table>

    </div>
  );
};

export default PaymentHistoryTable;
