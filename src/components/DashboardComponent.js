// Dashboard.js

import React, { useState } from 'react';
import HeaderComponent from './HeaderComponent';
import SidebarComponent from './SidebarComponent';
import { Outlet } from 'react-router-dom';
const Dashboard = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(true);
  const toggleSidebar = () => {
    setSidebarVisible(!isSidebarVisible);
  };
  return (
    <div>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <SidebarComponent isSidebarVisible={isSidebarVisible} />
        <div style={{ marginTop: '80px', width: '90%', paddingLeft:'16%' }}>
          <Outlet />
        </div>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        marginLeft: isSidebarVisible ? '200px' : '0',
        transition: 'margin 0.3s ease',
        backgroundColor: 'red',
      }}>
        <HeaderComponent onToggleSidebar={toggleSidebar} />
      </div>
   
    </div>
  );
};

export default Dashboard;
