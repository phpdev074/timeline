// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginComponent from "./components/LoginComponent";
import Dashboard from "./components/DashboardComponent";
import UserComponent from "./components/UserComponent";
import MainComponent from "./components/MainComponent";
import ContactUsComponent from "./components/ContactusComponent";
import PaymentHistoryComponent from "./components/PaymentHistoryComponent";
import ReportComponent from "./components/ReportComponent";
import ReportJourneyComponents from "./components/ReportJourneyComponent";

const isAuthenticated = () => {
  return localStorage.getItem('jwtToken') !== null;
};

const PrivateRoute = ({ element, ...props }) => {
  return isAuthenticated() ? (
    element
  ) : (
    <Navigate to="/" />
  );
};

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route
            path="/dashboard/*"
            element={
              <PrivateRoute
                element={<Dashboard />}
              />
            }
          >
            {/* The index route for /dashboard will render MainComponent */}
            <Route index element={<MainComponent />} />
            {/* /dashboard/main will render MainComponent */}
            <Route path="main" element={<MainComponent />} />
            {/* /dashboard/user-data will render UserComponent */}
            <Route path="user-data" element={<UserComponent />} />
            <Route path="contact-us" element = {<ContactUsComponent/>} />
            <Route path="payment-history" element = {<PaymentHistoryComponent/>}/>
            <Route path="report-list" element ={<ReportComponent/>} />
            <Route path="journey-list" element ={<ReportJourneyComponents/>} />
           </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
