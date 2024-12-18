import React, { useState, useEffect } from "react";
import axios from "axios";
import Pantun from "../components/Pantun";
import { useSearchParams } from "react-router-dom";
import "./Cari.css";

function CarianTepat() {
  const sp = useSearchParams();
  const kata = sp[0].get("kata");
  const [pantun, setPantun] = useState("");
  const [loading, setLoading] = useState(true);

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
      .get(
        "https://api.pantunis.com/cariGunaKataTepat?kata=" + kata
      )
      .then((response) => {
        // Update the pantun state
        setPantun(response.data);

        // Update loading state
        setLoading(false);
      })
      .catch((error) => {
        console.log(
          `There was an error exactly searching pantun using '${kata}': ${error}`
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

  return pantun.length > 0 ? (
    <main className="cari-kontena">
      <h1 className="fs-3 my-3">{kata}</h1>
      <form method="GET">
        <div className="row g-3 align-items-center mb-3">
          <div className="col-auto">
            <label
              htmlFor="kata"
              id="cari-pantun"
              className="col-form-label teks-hasil-carian"
            >
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
            <span id="cariPantunHelp" className="form-text teks-hasil-carian">
              Tekan <kbd>Enter <i className="bi bi-arrow-return-left"></i></kbd> untuk cari.
            </span>
          </div>
        </div>
      </form>
      <span className="text-muted teks-hasil-carian">
        Kami jumpa {pantun.length} pantun untuk kata "{kata}".
      </span>
      <span className="text-muted teks-hasil-carian mb-3">
        Tekan ikon untuk ketahui info lebih.
      </span>
      <span id="mobileCariPantunHelp" className="form-text teks-hasil-carian mb-3">
        Tekan <kbd>Enter <i className="bi bi-arrow-return-left"></i></kbd> untuk cari.
      </span>
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
      <h1 className="fs-3 my-3">{kata}</h1>
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
              Tekan <kbd>Enter <i className="bi bi-arrow-return-left"></i></kbd> untuk cari.
            </span>
          </div>
        </div>
      </form>
      <div className="pantun-pantun">
        <h2 className="display-4 tiada-pantun-teks">
          Maaf, tiada pantun untuk perkataan "{kata}" <br /> dalam pangkalan
          data.
        </h2>
      </div>
    </main>
  );
}

export default CarianTepat;
