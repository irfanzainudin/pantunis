import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HalamanUtama from "./pages/HalamanUtama";
import Cari from "./pages/Cari";
import Teroka from "./pages/Teroka";
import TerokaTema from "./pages/TerokaTema";
import Sumber from "./pages/Sumber";
import SumberInfo from "./pages/SumberInfo";
import SumberInternet from "./pages/SumberInternet";
import Teka from "./pages/Teka";
import Perihal from "./pages/Perihal";
import Lesen from "./pages/Lesen";
import SKD from "./pages/SKD";
import Sasaran from "./pages/Sasaran";
import PerkembanganTerkini from "./pages/PerkembanganTerkini";
import HalamanHilang from "./pages/HalamanHilang";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route exact path="/" element={<HalamanUtama />} />
        {/* <Route path="/halaman-utama" element={<HalamanUtama />} /> */}
        <Route path="/cari" element={<Cari />} />
        <Route path="/teroka" element={<Teroka />} />
        <Route path="/teroka/:nama_tema" element={<TerokaTema />} />
        <Route path="/sumber" element={<Sumber />} />
        <Route path="/sumber/:tajuk_sumber" element={<SumberInfo />} />
        {/* <Route path="/teka" element={<Teka />} /> */}
        <Route path="/sumber-internet" element={<SumberInternet />} />
        <Route path="/lesen" element={<Lesen />} />
        <Route path="/perihal" element={<Perihal />} />
        <Route path="/sasaran" element={<Sasaran />} />
        <Route path="/perkembangan" element={<PerkembanganTerkini />} />
        <Route path="/skd" element={<SKD />} />
        <Route path="/*" element={<HalamanHilang />} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
