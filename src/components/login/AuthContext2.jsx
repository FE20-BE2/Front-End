import React, { createContext, useState } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const signup = async ({ email, username, password }) => {
    try {
      const response = await fetch('https://userpass.tineijercamp.my.id/signUp.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, username, password }),
      });

      if (!response.ok) {
        throw new Error('Failed to create account');
      } else {
        const data = await response.json();
        setUser(data);
      }
    } catch (error) {
      throw error;
    }
  };

  const authContextValue = {
    user,
    signup,
  };

  return <AuthContext.Provider value={authContextValue}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };