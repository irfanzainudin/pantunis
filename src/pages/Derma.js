import { Link } from "react-router-dom";
import "./Derma.css";
import RandomDermaIcon from "../components/RandomDermaIcon";

function Derma() {
  return (
    <main className="donation-mode">
        <h1><RandomDermaIcon/> Derma Pantun</h1>
        <p>Tolong pilih jenis sumbangan anda.</p>
        <div className="donation-options">
          <div>
            <Link to="/tetamu" className="btn btn-lg btn-primary " id="tetamu-link">
                <i className="bi bi-person"></i> Tetamu
            </Link>
            <hr/>
            <small>
              <label htmlFor="tetamu-link">Sumbangan tanpa nama<br/>(anonymous)</label>
            </small>
          </div>
          <div>
            <Link to="/logmasuk" className="btn btn-lg btn-primary disabled" id="komuniti-link">
                <i className="bi bi-person-circle"></i> Ahli Komuniti <span className="badge bg-secondary">Akan Datang</span>
            </Link>
            <hr/>
            <small>
              <label htmlFor="komuniti-link">Sumbangan berdaftar {/* (nama anda akan<br/>dimasukkan ke dalam papan juara) */}</label>
            </small>
          </div>
        </div>
        <hr/>
        {/* <div className="anugerah-pj">
          <h2>Anugerah & Papan Juara</h2>
          <p>Senarai anugerah yang anda terima dan tangga kedudukan dalam papan juara Pantunis.</p>
          <div>
            <Link to="/tetamu" className="btn btn-lg btn-primary " id="tetamu-link">
                <i className="bi bi-person"></i> Tetamu
            </Link>
            <hr/>
            <small>
              <label htmlFor="tetamu-link">Sumbangan tanpa nama<br/>(anonymous)</label>
            </small>
          </div>
          <div>
            <Link to="/logmasuk" className="btn btn-lg btn-primary disabled" id="komuniti-link">
                <i className="bi bi-person-circle"></i> Ahli Komuniti <span className="badge bg-secondary">Akan Datang</span>
            </Link>
            <hr/>
            <small>
              <label htmlFor="komuniti-link">Sumbangan berdaftar (nama anda akan<br/>dimasukkan ke dalam papan juara)</label>
            </small>
          </div>
        </div> */}
    </main>
  );
}

export default Derma;
