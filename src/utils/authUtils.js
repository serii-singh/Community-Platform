// Mock users for validation
const mockUsers = [
  { email: 'admin@example.com', password: 'admin123', role: 'admin' },
  { email: 'tutor@example.com', password: 'tutor123', role: 'tutor' },
  { email: 'student@example.com', password: 'difone', role: 'student' },
];

// Mock login function
export const mockLogin = (email, password, requiredRole) => {
  // Find the user by email
  
  const user = mockUsers.find(user => user.email === email);

  // Check if user exists and if the password matches
  if (user) {
    if (user.password === password) {
      // If role matches, return the user data
      if (user.role === requiredRole) {
        const { password, ...userData } = user;  // Exclude the password from the user data
        return { user: userData };
      } else {
        return { error: 'The selected role does not match the user\'s role' }; // Role mismatch error
      }
    } else {
      return { error: 'Invalid email or password' }; // Invalid credentials
    }
  } else {
    return { error: 'User not found' }; // User not found
  }
};

// Get user data from localStorage (this simulates token validation)

export const getUserFromToken = () => {
  const storedUser = localStorage.getItem('user');
  console.log(storedUser , "stroed user on auth util")
  if (storedUser) {
    return JSON.parse(storedUser);  // Return parsed user object from localStorage
  }
  return null;  // If no user in localStorage, return null
};


// Logout function - clears user data from localStorage
export const logout = () => {
  localStorage.removeItem('user');
  
};
