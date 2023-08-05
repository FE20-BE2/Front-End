import React, { createContext, useContext, useState } from 'react';

export const EmailContext = createContext();

export const EmailProvider = ({ children }) => {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [username, setUsername] = useState(''); // Add the username state here
  const [password, setPassword] = useState('');
  const [isSignedUp, setIsSignedUp] = useState(false);

  return (
    <EmailContext.Provider value={{ email, setEmail, otp, setOtp, username, setUsername, password, setPassword, isSignedUp, setIsSignedUp }}>
      {children}
    </EmailContext.Provider>
  );
};

export const useEmailContext = () => useContext(EmailContext);
