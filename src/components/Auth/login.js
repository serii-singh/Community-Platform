
import React from 'react';
import { useForm } from 'react-hook-form';
import Layout from './layout';
import {  useNavigate } from 'react-router';
// import { GoogleLogin } from '@react-oauth/google'; // Import GoogleLogin component
import { useState } from 'react';
import { useAuth } from '../../context/AuthContext';


const LoginForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const { handleLogin, error, user } = useAuth();  // Destructure from AuthContext
    // State to handle role selection
    const [role, setRole] = useState('student'); // Default to student

    const onSubmit = async (data) => {
      const { email, password } = data;
      console.log("Form data submitted: ", data);
      
      // Call handleLogin from context to authenticate
      // const loginResult = await handleLogin(email, password, role);  // await for login response
      // console.log("Login result: ", loginResult);
  
        // Check if the login was successful and navigate accordingly
    // if (loginResult && !loginResult.error) {
    //   if (user && user.role === 'admin') {
    //     navigate('/admin');  // Admin dashboard
    //   } else if (user && user.role === 'tutor') {
    //     navigate('/tutor');  // Tutor dashboard
    //   } else {
    //     navigate('/student');  // Student dashboard
    //   }
    // }
    await handleLogin(email, password, role);

    // Redirect based on the role after login
    if (user ) {
      if (user.role === 'admin') {
        navigate('/admin');
      } else if (user.role === 'tutor') {
        navigate('/tutor');
      } else {
        navigate('/student');
      }
    }
  };

  // Google login success handler
  const handleGoogleLogin = (response) => {
    console.log("Google login response: ", response);
    // Handle authentication with Google response
    navigate('/profile');  // Redirect user to their profile
  };
  

  return (
    <Layout
      title="Sign in to your account"
      footerText="Don't have an account?"
      footerLinkText="Create an account"
      footerLinkUrl="/register"
      showGoogleAuth={true} // Show Google login on this page
      handleGoogleLogin={handleGoogleLogin} // Pass the Google login handler
      role={role}
      setRole={setRole} // Passing the role state and setRole function to Layout
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Email Input */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-900">
            Email address
          </label>
          <div className="mt-2">
            <input
              id="email"
              name="email"
              type="email"
              required
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                  message: 'Invalid email address'
                }
              })}
              className="block w-full rounded-md border-0 py-1.5 text-gray-400 shadow-sm ring-1 ring-inset ring-gray-400 placeholder:text-black-400 focus:ring-2 focus:ring-inset focus:ring-pink-300 sm:text-sm"
            />
          </div>
          {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
        </div>

        {/* Password Input */}
        <div>
          <label htmlFor="password" className="block text-sm font-medium text-gray-900">
            Password
          </label>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              required
              {...register('password', {
                required: 'Password is required',
                minLength: { value: 6, message: 'Password must be at least 6 characters' }
              })}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-200 sm:text-sm"
            />
          </div>
          {errors.password && <p className="text-sm text-red-600">{errors.password.message}</p>}
        </div>
        {/* Role Selection */}
        {/* <div>
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
          </div>
        </div> */}

 {/* Error Handling */}
 {error && <p className="text-sm text-red-600">{error}</p>}
        {/* Submit Button */}
        <div>
          <button
            type="submit"
            className="w-full rounded-md bg-pink-600 px-4 py-2 text-white font-semibold hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-pink-600"
          >
            Sign in
          </button>
          
        </div>
      </form>
      {/* <div className="mt-6 space-y-4">
        <div>
          <GoogleLogin 
            onSuccess={handleGoogleLogin} 
            onError={() => console.log("Google Login Failed")}
            useOneTap={true} 
            theme="filled_black" 
          />
        </div></div> */}
    </Layout>
  );
};

export default LoginForm;
