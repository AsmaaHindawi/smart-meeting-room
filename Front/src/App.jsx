import React, { Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./Component/Login";
import Home from "./Component/Home";
import Layout from "./AdminDashboard/Layout";

//Admin
import AdminDashboard from "./AdminDashboard/AdminDashboard";
import ManageRooms from './AdminDashboard/ManageRooms';
import BookMeeting from './AdminDashboard/BookMeeting'; 
import MinutesPage from './AdminDashboard/MinutesPage';
import AdminSettings from "./AdminDashboard/AdminSetting";
import { MinutesEditor } from "./AdminDashboard/MinutesEditor";
// Employee
import EmployeeLayout from "./EmployeeDashboard/EmployeeLayout";
import EmployeeDashboard from "./EmployeeDashboard/EmployeeDashboard";
import BookMeetings from "./EmployeeDashboard/BookMeetings";
import MinutesReview from "./EmployeeDashboard/MinutesReview";
import EmployeeSettings from "./EmployeeDashboard/EmployeeSetting";
//User
import UserLayout from "./User/UserLayout";
import Dashboard from "./User/dashboard";
import {ActiveMeeting}  from "./User/ActiveMeeting";
// import  {MinutesEditor}  from "./User/MinutesEditor";
import  {PastMeetings}  from "./User/PastMeetings";
import {RoomAvailability}  from "./User/RoomAvailability";



function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<Login />} />
       

        {/* Admin Routes */}
        <Route element={<Layout />}>
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          <Route path="/admin/manageRooms" element={<ManageRooms />} />
          <Route path="/admin/bookMeeting" element={<BookMeeting />} />
          <Route path="/admin/minutesPage" element={<MinutesPage />} />
            <Route path="/admin/settingsPage" element={<AdminSettings />} />
              <Route path="/admin/minutes" element={<MinutesEditor />} />
        </Route>

        {/* Employee Routes */}
        <Route element={<EmployeeLayout />}>
          <Route path="/employee/dashboard" element={<EmployeeDashboard />} />
          <Route path="/employee/book" element={<BookMeetings />} />
          <Route path="/employee/minutes" element={<MinutesReview />} />
         <Route path="/employee/settings" element={<EmployeeSettings />} />

        </Route>

        {/* User Routes */}
        <Route element={<UserLayout />}>
          <Route path="/user/dashboard" element={<Dashboard />} />
          <Route path="/user/book" element={<RoomAvailability />} />
          <Route path="/user/join" element={<ActiveMeeting />} />
          {/* <Route path="/user/minutes" element={<MinutesEditor />} /> */}
          <Route path="/user/review" element={<PastMeetings />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
