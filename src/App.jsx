import React from "react";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { AuthProvider, AuthContext } from "/src/components/login/AuthContext";
import { AuthProvider as AuthProvider2 } from "/src/components/login/AuthContext2";
import SignUp from "./components/login/SignUp";
import SignIn from "./components/login/SignIn";
import Otp from "./components/login/Otp";
import Artikel from "/src/components/artikelFile/Artikel";
import AllArtikel from "/src/components/artikelFile/AllArtikel";
import { useEffect } from "react";
import KelasOffline from "/src/components/kelas/Kelasoffline";
import KelasOnline from "/src/components/kelas/KelasOnline";
import ViewProfile from "/src/components/kelas/ViewProfile";
import DetailPembayaran from "/src/components/pembayaran2/pembayaran/Detailpembayaran";
import Admin from "/src/components/pembayaran2/routes/Index";
import { EmailProvider } from "./components/login/EmailContext";

const ProtectedRoute = ({ element }) => {
  const { isLoggedIn } = React.useContext(AuthContext);

  if (!isLoggedIn) {
    return <Navigate to="/SignIn" />;
  }

  return element;
};

const PrivateRoute = ({ element }) => {
  const { isLoggedIn } = React.useContext(AuthContext);

  if (isLoggedIn) {
    return <Navigate to="/" />;
  }

  return element;
};

const App = () => {
  return (
    <AuthProvider>
      <AuthProvider2>
        <EmailProvider>

          <Router>
            <Navbar />
            <Routes>
              <Route exact path="/AllArtikel" element={<AllArtikel />} />
              <Route path="/Artikel/:id" element={<Artikel />} />
              <Route path="/" element={<LandingPage />} />
              <Route path="/KelasOffline" element={<KelasOffline />} />
              <Route path="/KelasOnline" element={<KelasOnline />} />
              <Route
                path="/SignUp"
                element={<PrivateRoute element={<SignUp />} />}
              />
              <Route
                path="/SignIn"
                element={<PrivateRoute element={<SignIn />} />}
              />
              <Route path="/Otp" element={<PrivateRoute element={<Otp />} />} />
              <Route path="/ViewProfile" element={<ProtectedRoute element={<ViewProfile />} />} />
              <Route path="/DetailPembayaran" element={<ProtectedRoute element={<DetailPembayaran />} />} />
              <Route
                path="/Admin "
                element={<ProtectedRoute element={<Admin />} />}
              />
            </Routes>
          </Router>

        </EmailProvider>
      </AuthProvider2>
    </AuthProvider>
  );
};

export default App;
