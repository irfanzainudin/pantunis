import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import HalamanUtama from "./pages/HalamanUtama";
import Cari from "./pages/Cari";
import Teroka from "./pages/Teroka";
import TerokaKategori from "./pages/TerokaKategori";
import Sumber from "./pages/Sumber";
import SumberInfo from "./pages/SumberInfo";
import PasukanKami from "./pages/PasukanKami";
// import HubungiKami from "./pages/HubungiKami";
import Sasaran from "./pages/Sasaran";
import CurrentProgress from "./pages/CurrentProgress";
import HalamanHilang from "./pages/HalamanHilang";

function App() {
  return (
    <div className="App">
      <header>
        <Navbar />
      </header>
      <Routes>
        <Route exact path="/" element={<HalamanUtama />} />
        <Route path="/halaman-utama" element={<HalamanUtama />} />
        <Route path="/cari" element={<Cari />} />
        <Route path="/teroka" element={<Teroka />} />
        <Route path="/teroka/:nama_kategori" element={<TerokaKategori />} />
        <Route path="/sumber" element={<Sumber />} />
        <Route path="/sumber/:tajuk_sumber" element={<SumberInfo />} />
        <Route path="/pasukan-kami" element={<PasukanKami />} />
        {/* <Route path="/hubungi-kami" element={<HubungiKami />} /> */}
        <Route path="/sasaran" element={<Sasaran />} />
        <Route path="/current-progress" element={<CurrentProgress />} />
        <Route path="/*" element={<HalamanHilang />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
