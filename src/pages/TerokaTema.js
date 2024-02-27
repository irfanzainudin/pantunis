import React, { useState, useEffect } from "react";
import Pantun from "../components/Pantun";
import axios from "axios";
import { useLocation } from "react-router-dom";

// TODO: I don't think we need this
let headers = {
  "Access-Control-Allow-Credentials": true,
  "Access-Control-Allow-Origin": "https://pantunis-api.vercel.app/",
  Vary: "Origin",
  "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
  "Access-Control-Allow-Headers":
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
};

function TerokaTema() {
  const { tema_id, nama_tema } = useLocation().state;
  const [filteredPantun, setFilteredPantun] = useState("");
  const [pantun, setPantun] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    handleSubmit();
    // NOTE: the line below is for my annoying linter (I don't like warnings)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmit = () => {
    axios
      .get(
        "https://pantunis-api.vercel.app/api/cariGunaTema?tema=" + tema_id,
        headers
      )
      .then((response) => {
        console.log(response.data);
        // Populate the pantun state with the right themed pantuns
        setPantun(response.data);

        // Update loading state
        setLoading(false);
      })
      .catch((error) => {
        console.log(
          `There was an error searching pantun using '${tema_id}': ${error}`
        );
      });
  };

  // Show loading while fetching data
  if (loading)
    return (
      <main className="tiada-pantun-kontena">
        <div className="pantun-pantun">
          <h1 className="display-4 tiada-pantun-teks">Loading ...</h1>
        </div>
      </main>
    );

  const handleChange = (e) => {
    setFilteredPantun(e.target.value);
  };

  return (
    <main>
      <div className="d-flex flex-column justify-content-between align-items-center my-3">
        <section className="mb-3 w-25">
          <label htmlFor="cari" className="form-label">
            Saring tema "{nama_tema}"
          </label>
          <input
            type="text"
            className="form-control"
            id="cari"
            aria-describedby="cari"
            autoFocus
            onChange={handleChange}
          />
          <div id="cari" className="form-text">
            Saring pantun guna perkataan.
          </div>
        </section>
      </div>
      <div className="pantun-pantun">
        {pantun.length > 0
          ? pantun.map((p) => {
              const filterCheck =
                p.pantun_bayang1.toLowerCase().includes(filteredPantun) ||
                p.pantun_bayang2.toLowerCase().includes(filteredPantun) ||
                p.pantun_maksud1.toLowerCase().includes(filteredPantun) ||
                p.pantun_maksud2.toLowerCase().includes(filteredPantun);
              if (filterCheck) {
                return <Pantun kata={""}>{p}</Pantun>;
              } else {
                return <></>;
              }
            })
          : ""}
      </div>
      {/* <ul className="list-group list-group-horizontal">
        {pantun.length > 0
          ? pantun.map((p) => {
              return <li className="list-group-item">{p}</li>;
            })
          : ""}
      </ul>
      <ul className="list-group list-group-horizontal">
        <li className="list-group-item">
          <Pantun>
            Siakap senohong gelama ikan duri, Bercakap bohong lama-lama mencuri
          </Pantun>
        </li>
        <li className="list-group-item">
          Dua tiga kucing berlari, Mana nak sama si kucing belang, Dua tiga
          boleh ku cari, Mana nak sama si adik seorang
        </li>
        <li className="list-group-item">
          Buah cempedak luar pagar, Ambil galah tolong jolokkan, Saya budak baru
          belajar, Kalau salah tolong tunjukkan
        </li>
        <li className="list-group-item">A fourth item</li>
        <li className="list-group-item">And a fifth one</li>
      </ul> */}
    </main>
  );
}

export default TerokaTema;
