import { createContext, useContext, useState } from 'react';

const OtpContext = createContext();

export const EmailProvider = ({ children }) => {
  const [otp, setOtp] = useState('');

  return (
    <OtpContext.Provider value={{ otp, setOtp }}>
      {children}
    </OtpContext.Provider>
  );
};

export const useOtpContext = () => useContext(OtpContext);