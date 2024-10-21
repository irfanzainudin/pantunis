import React, { useState, useEffect } from "react";
import Pantun from "../components/Pantun";
import axios from "axios";
import { useLocation } from "react-router-dom";

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
        "https://api.pantunis.com/cariGunaTema?tema=" + tema_id
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
          <h1 className="display-4 tiada-pantun-teks my-3">Loading...</h1>
        </div>
      </main>
    );

  const handleChange = (e) => {
    setFilteredPantun(e.target.value);
  };

  return (
    <main className="d-flex flex-column justify-content-between align-items-center my-3">
      <section className="mb-3">
        <h1 className="fs-3 my-3">Tema: {nama_tema}</h1>
        <input
          type="text"
          className="form-control"
          id="saring"
          aria-describedby="saringPantunHelp"
          autoFocus
          onChange={handleChange}
        />
        <div id="saringPantunHelp" className="form-text">
          Saring pantun guna perkataan.
        </div>
      </section>
      {filteredPantun.length > 0 ? (
        <span className="text-muted" style={{ fontSize: "smaller" }}>
          Kami jumpa {filteredPantun.length} pantun untuk tema: {nama_tema}.
        </span>
      ) : (
        <span className="text-muted" style={{ fontSize: "smaller" }}>
          Kami jumpa {pantun.length} pantun untuk tema: {nama_tema}.
        </span>
      )}
      <span className="text-muted mb-3" style={{ fontSize: "smaller" }}>
        Tekan ikon untuk ketahui info lebih.
      </span>
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
    </main>
  );
}

export default TerokaTema;
