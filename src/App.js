import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HalamanUtama from "./pages/HalamanUtama";
import CKT from "./pages/CKT";
import Cari from "./pages/Cari";
import CarianTepat from "./pages/CarianTepat";
import Pantun from "./pages/Pantun";
import Teroka from "./pages/Teroka";
import TerokaTema from "./pages/TerokaTema";
import Sumber from "./pages/Sumber";
import SumberInfo from "./pages/SumberInfo";
import SumberTeroka from "./pages/SumberTeroka";
import SumberInternet from "./pages/SumberInternet";
import Teka from "./pages/Teka";
import TekaKata from "./pages/TekaKata";
import Perihal from "./pages/Perihal";
import Lesen from "./pages/Lesen";
// import SKD from "./pages/SKD";
import Sasaran from "./pages/Sasaran";
import PerkembanganTerkini from "./pages/PerkembanganTerkini";
import HalamanHilang from "./pages/HalamanHilang";
// SUMBANGAN
// import Sumbang from "./pages/Sumbang";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route exact path="/" element={<HalamanUtama />} />
        <Route path="/ckt" element={<CKT />} />
        {/* <Route path="/halaman-utama" element={<HalamanUtama />} /> */}
        <Route path="/cari" element={<Cari />} />
        <Route path="/carianTepat" element={<CarianTepat />} />
        {/* PANTUN */}
        <Route path="/pantun/:id" element={<Pantun />} />
        <Route path="/teroka" element={<Teroka />} />
        {/* TODO: TerokaTema needs to fetch data from somewhere else
                  ... otherwise, if people go directly to the page, it'll be blank */}
        <Route path="/teroka/:nama_tema" element={<TerokaTema />} />
        <Route path="/sumber" element={<Sumber />} />
        {/* TODO: SumberInfo needs to fetch data from somewhere else
                  ... otherwise, if people go directly to the page, it'll be blank */}
        <Route path="/sumber/:tajuk_sumber" element={<SumberInfo />} />
        {/* TODO: SumberTeroka needs to fetch data from somewhere else
                  ... otherwise, if people go directly to the page, it'll be blank */}
        <Route path="/sumber/teroka/:tajuk_sumber" element={<SumberTeroka />} />
        <Route path="/sumber-internet" element={<SumberInternet />} />
        <Route path="/lesen" element={<Lesen />} />
        <Route path="/perihal" element={<Perihal />} />
        <Route path="/sasaran" element={<Sasaran />} />
        <Route path="/perkembangan" element={<PerkembanganTerkini />} />
        {/* <Route path="/skd" element={<SKD />} /> */}
        {/* TEKA */}
        <Route path="/teka" element={<Teka />} />
        <Route path="/teka/kata" element={<TekaKata />} />
        {/* SUMBANGAN */}
        {/* <Route path="/sumbang" element={<Sumbang />} /> */}
        {/* 404 */}
        <Route path="/*" element={<HalamanHilang />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
