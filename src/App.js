import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider, Routes, Route, Navigate } from "react-router-dom";
import LoginComponent from "./components/LoginComponent";
import Dashboard from "./components/DashboardComponent";
import UserComponent from "./components/UserComponent";
const isAuthenticated = () => {
  return localStorage.getItem('jwtToken') !== null;
};

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <LoginComponent />,
    },
    {
      path:"/dashboard",
      element: <Dashboard />
    },
    {
      path:"/user-data",
      element:<UserComponent/>
    }
  ]);

  useEffect(() => {
    // Check authentication and redirect to the appropriate route
    if (!isAuthenticated()) {
      appRouter.navigate("/");
    }
  }, [appRouter]);

  return (
    <div>
      <RouterProvider router={appRouter}>
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </RouterProvider>
    </div>
  );
}

export default App;
