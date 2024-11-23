import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegistrationForm from './components/Auth/register';
import LoginForm from './components/Auth/login';
import Profile from './components/pages/profile';
import { GoogleOAuthProvider } from '@react-oauth/google'; 
import StudentDashboard from './components/dashboard/student';
import TutorDashboard from './components/dashboard/tutor';  // Tutor Dashboard
import AdminDashboard from './components/dashboard/admin';  // Admin Dashboard
import { Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext'; // Import AuthProvider
import CommunityPage from './components/pages/community';
import Card from './components/pages/card';
import Error from './components/pages/error';
import HomePage from './components/pages/home';
import Events from './components/pages/events';
import TeachingResouces from './components/pages/teachingresouces';
import Messages from './components/pages/messages';
import Classroom from './components/pages/classroom';
import Calendar from './components/pages/calendar';
import Insights from './components/pages/Insights';
import ChatRoom from './components/pages/chatroom';
import GettingStarted from './components/pages/gettingstarted';
import AccountSettings from './components/pages/accountsettings';

function App() {
  // ProtectedRoute component that checks if the user is authenticated and has the right role
const ProtectedRoute = ({ element, requiredRole }) => {
  const user = JSON.parse(localStorage.getItem('user'));  // Retrieve the user data from localStorage
  // const { user } = useAuth();  // Use AuthContext hook to get user data
  console.log(user ,"user app page")
  if (!user) {
    // If there's no user in localStorage, redirect to login
    return <Navigate to="/login" />;
  }

  // If the user's role doesn't match the required role, redirect to profile or other page
  if (!requiredRole.includes(user.role)) {
    return <Navigate to="/error" />;
  }

  return element;  // Show the requested element if the user is authenticated and has the correct role
};

  return (
    <AuthProvider>
    <GoogleOAuthProvider clientId="GOOGLE_CLIENT_ID">
    <Router>
       
      <Routes>
      <Route index element={<LoginForm />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path='/error' element={<Error/>}/>
         {/* Protected Routes for Student, Tutor, and Admin dashboards */}
         <Route
            path="/student"
            element={<ProtectedRoute element={<StudentDashboard />} requiredRole="student" />}
          />
          <Route
            path="/tutor"
            element={<ProtectedRoute element={<TutorDashboard />} requiredRole="tutor" />}
          />
          <Route
            path="/admin"
            element={<ProtectedRoute element={<AdminDashboard />} requiredRole="admin" />}
          />
          <Route 
          path = "/community"
           element={<ProtectedRoute element ={<CommunityPage/>} requiredRole={['admin', 'tutor', 'student']}/>}/>
             
             <Route 
          path = "/events"
           element={<ProtectedRoute element ={<Events/>} requiredRole={['admin', 'tutor', 'student']}/>}/>

           <Route 
          path = "/teaching-resources"
           element={<ProtectedRoute element ={<TeachingResouces/>} requiredRole={['admin', 'tutor', 'student']}/>}/>

          <Route 
          path = "/chatroom"
           element={<ProtectedRoute element ={<ChatRoom/>} requiredRole={['admin', 'tutor', 'student']}/>}/>
          <Route 
          path = "/getting-started"
           element={<ProtectedRoute element ={<GettingStarted/>} requiredRole={['admin', 'tutor', 'student']}/>}/>
           
           
          <Route 
          path = "/account-settings"
          element={<ProtectedRoute element ={<AccountSettings/>} requiredRole={['admin', 'tutor', 'student']}/>}/>
                       
             <Route 
          path = "/messages"
           element={<ProtectedRoute element ={<Messages/>} requiredRole={['admin', 'tutor', 'student']}/>}/>
           
           <Route 
          path = "classroom"
           element={<ProtectedRoute element ={<Classroom/>} requiredRole={['admin', 'tutor', 'student']}/>}/>
           <Route 
          path = "/calendar"
           element={<ProtectedRoute element ={<Calendar/>} requiredRole={["tutor","admin"]}/>}/>
           <Route 
          path = "/insights"
           element={<ProtectedRoute element ={<Insights/>} requiredRole="admin"/>}/>
             
              <Route 
          path = "/home"
           element={<ProtectedRoute element ={<HomePage/>} requiredRole={['admin', 'tutor', 'student']}/>}/>
           
        
            <Route 
          path = "/card"
           element={<ProtectedRoute element ={<Card/>} requiredRole="admin"/>}/>
      </Routes>
     
      
    </Router>
    
    </GoogleOAuthProvider>
    </AuthProvider>
  );
}

export default App;
