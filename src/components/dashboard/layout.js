import React from 'react';
import NavBar from '../layout/navbar'
import Sidebar from '../layout/sidebar';

const DashboardLayout = ({content}) => {
  return (
    <div>
      <NavBar/>
      <Sidebar content={content}  />
      {/* <h1>Welcome to the Student Dashboard</h1> */}
      {/* <p>This is where the student can view their profile, courses, etc.</p> */}
    </div>
  );
};

export default DashboardLayout;
