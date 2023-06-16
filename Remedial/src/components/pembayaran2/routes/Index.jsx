import { BrowserRouter, Routes, Route } from "react-router-dom";
import Sidebar from "/src/components/admin/artikel/Sidebar";
import Artikel from "../pages/artikel/Artikel";
import Mentor from "../pages/mentor/Mentor";
import Createartikel from "../pages/artikel/Createartikel";
import Detailpembayaran from "../pembayaran/Detailpembayaran";

export default function Index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="pembayaran" element={<Detailpembayaran />}></Route>

        <Route path="/" element={<Sidebar />}>
          <Route index element={<Artikel />} />
          <Route path="mentor" element={<Mentor />} />
          <Route path="create-artikel" element={<Createartikel />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
