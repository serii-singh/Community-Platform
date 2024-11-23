
import React from 'react';
import { Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';

const Layout = ({ children, title, footerText, footerLinkText, footerLinkUrl,showGoogleAuth, handleGoogleLogin,role,
  setRole}) => {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        {/* <img
          alt="Your Company"
          src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
          className="mx-auto h-10 w-auto"
        /> */}
        <h2 className="mt-10 text-center text-2xl font-bold tracking-tight text-gray-900">
          {title}
        </h2>
      </div>

      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        {/* Render child components (Login/Register forms) */}
        {children}


       {/* Role Selection */}
       <div className="mt-6">
          <label htmlFor="role" className="block text-sm font-medium text-gray-900">
            Select Role
          </label>
          <div className="mt-2">
            <select
              id="role"
              name="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="block w-full rounded-md border-0 py-1.5 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-300 sm:text-sm"
            >
              <option value="student">Student</option>
              <option value="tutor">Tutor</option>
              <option value="admin">Admin</option>
            </select>
            {role === '' && <p className="text-sm text-red-600">Role is required</p>}
          </div>
        </div>

        {/* Google Authentication (only if showGoogleAuth is true) */}
        {showGoogleAuth && (
          <div className="mt-6 space-y-4">
            <GoogleLogin 
              onSuccess={handleGoogleLogin} 
              onError={() => console.log("Google Login Failed")}
              useOneTap={true} 
              theme="filled_black" 
            />
          </div>
        )}

        <div className="mt-10 text-center text-sm text-gray-500">
          {footerText}{' '}
          <Link to={footerLinkUrl} className="font-semibold text-pink-300 hover:text-pink-500">
            {footerLinkText}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Layout;
