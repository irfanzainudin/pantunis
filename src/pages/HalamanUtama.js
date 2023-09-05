import React, { useState } from "react";
import axios from "axios";
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
        onSubmit={() => navigate("/cari?" + inputName + "=" + kata)}
      >
        <div className="mb-3">
          <label htmlFor="kata" className="form-label">
            Terokai pangkalan data pantun terbesar di Internet
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
        <button type="submit" className="btn btn-primary">
          Cari
        </button>
      </form>
    </main>
  );
}

export default HalamanUtama;
