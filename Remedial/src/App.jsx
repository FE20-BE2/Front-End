import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";
import Detailpembayaran from "./components/pembayaran/Detailpembayaran";
import Dashboard from "./components/pages/Dashboard";
import { Routes } from "react-router-dom";
import Sidebar from "./components/dashboard/artikel/Sidebar";
import Index from "./components/routes/Index";

function App() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "./src/js/script.js";

    script.async = true;

    script.crossOrigin = "anonymous";

    document.body.appendChild(script);
    console.log("as");
    return () => {
      // clean up the script when the component in unmounted
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <Index />
    </>
  );
}

export default App;
