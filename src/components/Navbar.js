import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import RDI from "./RandomDermaIcon";

function Navbar() {
  const [darkMode, setDarkMode] = useState(false);
  const route = useLocation().pathname;
  const excludedRoutes = [
    "/derma"
  ]

  useEffect(() => {
    const bodyTheme = document.documentElement.attributes.getNamedItem("data-bs-theme");
    if (darkMode) {
      bodyTheme.value = "dark";
    } else {
      bodyTheme.value = "light";
    }
  }, [darkMode])
  
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="d-flex align-items-center">
          <Link
            to="/"
            className="navbar-brand mb-3 me-2 mb-md-0 text-decoration-none lh-1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-p-square-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8.27 8.074c.893 0 1.419-.545 1.419-1.488s-.526-1.482-1.42-1.482H6.778v2.97H8.27Z" />
              <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2Zm3.5 4.002h2.962C10.045 4.002 11 5.104 11 6.586c0 1.494-.967 2.578-2.55 2.578H6.784V12H5.5V4.002Z" />
            </svg>
          </Link>
          {/* <span className="mb-3 mb-md-0">Pantunis</span> */}
        </div>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">
                <i className="bi bi-house"></i> Halaman Utama
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" to="/ckt">
                <i className="bi bi-bullseye"></i> CKT <span className="badge bg-secondary">Percubaan</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/teroka">
                <i className="bi bi-compass"></i> Teroka
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/sumber">
                <i className="bi bi-book"></i> Sumber
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link disabled" to="/teka">
                <i className="bi bi-patch-question"></i> Teka
              </Link>
            </li> */}
            {/* <li>
              <Link className="nav-link disabled" to="/derma">
                <RSI />
                {' '}
                Derma Pantun <span className="badge bg-secondary">Akan Datang</span>
              </Link>
            </li> */}
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-info-square"></i> Pantunis
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/sasaran">
                    <i className="bi bi-bullseye"></i> Sasaran
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/perkembangan">
                    <i className="bi bi-graph-up-arrow"></i> Perkembangan
                    Terkini
                  </Link>
                </li>
                {/* <li>
                  <Link className="dropdown-item" to="/skd">
                    <i className="bi bi-patch-question"></i> SKD
                  </Link>
                </li> */}
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <Link className="dropdown-item" to="/perihal">
                    <i className="bi bi-code-square"></i> Perihal Pembangunan
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/lesen">
                    <i className="bi bi-info-circle"></i> Lesen
                  </Link>
                </li>
                {/* TODO: get an workspace (email, domain etc.) first, then setup a "Contact Us" page */}
                {/* <li>
                  <Link className="dropdown-item" to="/hubungi-kami">
                    Hubungi Kami
                  </Link>
                </li> */}
              </ul>
            </li>
            {/* <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-translate"></i> Bahasa
              </Link>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/sasaran">
                    🇲🇾 Bahasa Malaysia
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/sasaran">
                    🇬🇧 Bahasa Inggeris
                  </Link>
                </li>
              </ul>
            </li> */}
          </ul>
          {/* <div className="call-to-actions"> */}
            { !excludedRoutes.includes(route)
            ?
            <Link to="/derma" className="btn btn-primary me-3 disabled">
              <RDI /> Derma Pantun <span className="badge bg-secondary">Masih Testing...</span>
              <br/>
            </Link>
            :
            <></>}
            <div className="form-check form-switch form-check-reverse">
              <input
              className="form-check-input"
              type="checkbox"
              id="flexSwitchCheckReverse"
              value={darkMode}
              onChange={() => {
                if (darkMode) {
                  setDarkMode(false);
                } else {
                  setDarkMode(true);
                }
              }}
              />
              <label className="form-check-label" htmlFor="flexSwitchCheckReverse">
                {
                darkMode
                ?
                <i className="bi bi-moon-stars"></i>
                :
                <i className="bi bi-sun"></i>
                }
              </label>
            </div>
          {/* </div> */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
