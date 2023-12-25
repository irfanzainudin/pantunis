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
        onSubmit={() => navigate("/cari?" + inputName + "=" + kata)}
      >
        <div className="mb-3">
          <h1>
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
            </svg>{" "}
            Pantunis
          </h1>
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
