
import React from 'react';
import { useForm } from 'react-hook-form';
import Layout from './layout';
import { useNavigate } from 'react-router';
import { useState } from 'react';

const RegistrationForm = () => {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const navigate = useNavigate();
  const [role, setRole] = useState('student'); // Default to student

  const onSubmit = (data) => {
    console.log(data);
    // Handle registration logic (e.g., send data to your server)

    // After successful registration, navigate to the profile page
      navigate('/login', { state: data }); // Pass data to the profile page
    };
  

  // Watch the password field to compare with confirmPassword
  const password = watch('password'); // watch the password field

  const handleGoogleLogin = (response) => {
    console.log("Google login response: ", response);
    // Handle authentication with Google response
    navigate('/profile');
  };

  return (
    <Layout
      title="Create an account"
      footerText="Already have an account?"
      footerLinkText="Log in"
      footerLinkUrl="/login"
      showGoogleAuth={true}
      handleGoogleLogin={handleGoogleLogin}
      role={role}
      setRole={setRole} // Passing the role state and setRole function to Layout
    >
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Full Name Input */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-900">
            Full Name
          </label>
          <div className="mt-2">
            <input
              id="name"
              name="name"
              type="text"
              required
              {...register('name', {
                required: 'Full name is required',
                minLength: { value: 3, message: 'Name must be at least 3 characters' }
              })}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            />
          </div>
          {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
        </div>

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
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
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
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            />
          </div>
          {errors.password && <p className="text-sm text-red-600">{errors.password.message}</p>}
        </div>

        {/* Confirm Password Input */}
        <div>
          <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-900">
            Confirm Password
          </label>
          <div className="mt-2">
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              required
              {...register('confirmPassword', {
                required: 'Confirm Password is required',
                validate: (value) => value === password || 'Passwords must match'
              })}
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
            />
          </div>
          {errors.confirmPassword && <p className="text-sm text-red-600">{errors.confirmPassword.message}</p>}
        </div>

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            // className="w-full rounded-md bg-indigo-600 px-4 py-2 text-white font-semibold hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          disabled={role === ''}
          className={`w-full rounded-md ${role === '' ? 'bg-gray-400' : 'bg-pink-600'} px-4 py-2 text-white font-semibold hover:bg-pink-800 focus:outline-none focus:ring-2 focus:ring-pink-600`}
        >
            Register
          </button>
        </div>
      </form>
    </Layout>
  );
};

export default RegistrationForm;
