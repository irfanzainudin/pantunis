import React, { useState, useEffect } from "react";
import axios from "axios";
import Pantun from "../components/Pantun";
import { useSearchParams } from "react-router-dom";
import "./Cari.css";

function Cari() {
  const sp = useSearchParams();
  const kata = sp[0].get("kata");
  const [pantun, setPantun] = useState("");
  // TODO: do some loading
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleSubmit();
    // NOTE: the line below is for my annoying linter (I don't like warnings)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    console.log(e.target.value);
  };

  const handleSubmit = () => {
    axios
      .get("http://localhost:4001/pantun/cariGunaKata?kata=" + kata)
      .then((response) => {
        // Update the pantun state
        setPantun(response.data);

        // TODO: do some loading
        // Update loading state
        // setLoading(false);
      })
      .catch((error) => {
        console.log(
          `There was an error searching pantun using '${kata}': ${error}`
        );
      });
  };

  // TODO: do some loading
  // if (loading) return <p>Pantun table is loading...</p>;

  return pantun.length > 0 ? (
    <main className="cari-kontena">
      <h1 className="my-3">{kata}</h1>
      <form method="GET">
        <div className="row g-3 align-items-center mb-3">
          <div className="col-auto">
            <label htmlFor="kata" className="col-form-label">
              Cari pantun:
            </label>
          </div>
          <div className="col-auto">
            <input
              type="text"
              id="kata"
              name="kata"
              className="form-control"
              aria-describedby="cariPantunHelp"
              autoFocus
              onChange={handleChange}
            />
          </div>
          <div className="col-auto">
            <span id="cariPantunHelp" className="form-text">
              Tekan 'Enter' untuk cari.
            </span>
          </div>
        </div>
      </form>
      <div className="pantun-pantun">
        {pantun.length > 0
          ? pantun.map((p) => {
              return <Pantun kata={kata}>{p}</Pantun>;
            })
          : ""}
      </div>
    </main>
  ) : (
    <main className="tiada-pantun-kontena">
      <h1 className="my-3">{kata}</h1>
      <form method="GET">
        <div className="row g-3 align-items-center mb-3">
          <div className="col-auto">
            <label htmlFor="kata" className="col-form-label">
              Cari pantun:
            </label>
          </div>
          <div className="col-auto">
            <input
              type="text"
              id="kata"
              name="kata"
              className="form-control"
              aria-describedby="cariPantunHelp"
              autoFocus
              onChange={handleChange}
            />
          </div>
          <div className="col-auto">
            <span id="cariPantunHelp" className="form-text">
              Tekan 'Enter' untuk cari.
            </span>
          </div>
        </div>
      </form>
      <div className="pantun-pantun">
        <h1 className="display-4 tiada-pantun-teks">
          Maaf, tiada pantun untuk perkataan "{kata}" <br /> dalam pangkalan
          data.
        </h1>
      </div>
    </main>
  );
}

export default Cari;
