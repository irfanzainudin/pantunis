import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function HalamanUtama() {
  const [kata, setKata] = useState("");
  const inputName = "kata";

  const handleChange = (e) => {
    setKata(e.target.value);
  };

  const navigate = useNavigate();
  return (
    <main className="App-main">
      <form
        method="GET"
        onSubmit={() => navigate("/carianTepat?" + inputName + "=" + kata)}
      >
        <div className="mb-3 animate__animated animate__fadeInDown">
          <h1>
            <i className="bi bi-bullseye"></i> Carian Kata Tepat
          </h1>
          <label htmlFor="kata" className="form-label">
            <span className="badge bg-secondary">Percubaan (Experimental)</span>
          </label>
          <input
            type="text"
            className="form-control"
            id="kata"
            name={inputName}
            aria-describedby="kata"
            autoFocus
            onChange={handleChange}
          />
          <div id="kata" className="form-text">
            Cari pantun guna perkataan.
          </div>
        </div>
        <button type="submit" className="btn btn-primary animate__animated animate__fadeInUp">
          Cari
        </button>
      </form>
    </main>
  );
}

export default HalamanUtama;
