import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HalamanUtama from "./pages/HalamanUtama";
import Teroka from "./pages/Teroka";
import Sumber from "./pages/Sumber";
import PasukanKami from "./pages/PasukanKami";
import HubungiKami from "./pages/HubungiKami";
import Sasaran from "./pages/Sasaran";
import HalamanHilang from "./pages/HalamanHilang";
import TerokaKategori from "./pages/TerokaKategori";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route path="/" element={<HalamanUtama />} />
        <Route path="/halaman-utama" element={<HalamanUtama />} />
        <Route path="/teroka" element={<Teroka />} />
        <Route path="/teroka/:nama_kategori" element={<TerokaKategori />} />
        <Route path="/sumber" element={<Sumber />} />
        <Route path="/pasukan-kami" element={<PasukanKami />} />
        <Route path="/hubungi-kami" element={<HubungiKami />} />
        <Route path="/sasaran" element={<Sasaran />} />
        <Route path="/*" element={<HalamanHilang />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
