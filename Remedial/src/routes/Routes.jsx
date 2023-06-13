import { BrowserRouter, Route, Routes as RoutesDOM } from "react-router-dom";
import { lazy } from "react";
const Navbar = lazy(() => import("../components/pages/Navbar"));

const Routes = () => {
  return (
    <BrowserRouter>
      <RoutesDOM>
        <Route path="/" element={<Navbar />} />
      </RoutesDOM>
    </BrowserRouter>
  );
};
