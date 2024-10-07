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
  const [saringKeyword, setSaringKeyword] = useState("");
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
          <h1 className="display-4 tiada-pantun-teks my-3">Loading...</h1>
        </div>
      </main>
    );

  const handleChange = (e) => {
    setSaringKeyword(e.target.value);
  };

  const getFilteredPantunList = () => {
    // Process and return list of pantun for rendering

    if (pantun.length > 0) {
      
      if (saringKeyword.length > 0) {
        // Only perform filtering when saring "keyword" available
        return pantun.filter((p, index, array) => {
          const filterCheck =
            p.pantun_bayang1.toLowerCase().includes(saringKeyword) ||
            p.pantun_bayang2.toLowerCase().includes(saringKeyword) ||
            p.pantun_maksud1.toLowerCase().includes(saringKeyword) ||
            p.pantun_maksud2.toLowerCase().includes(saringKeyword);
          
          return filterCheck;
          } 
        );

      } else {
        // Return all pantun since saring "keyword" unavailable
        return pantun;
      }
      
    } else {
      // Return empty array since no pantun exist
      return [];
    }
  }

  // Call pantun filtering function before render
  const pantunListToRender = getFilteredPantunList();

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
      {saringKeyword.length > 0 ? (
        <span className="text-muted" style={{ fontSize: "smaller" }}>
          Kami jumpa {pantunListToRender.length} pantun untuk tema: {nama_tema}.
        </span>
      ) : (
        <span className="text-muted" style={{ fontSize: "smaller" }}>
          Kami jumpa {pantunListToRender.length} pantun untuk tema: {nama_tema}.
        </span>
      )}
      <span className="text-muted mb-3" style={{ fontSize: "smaller" }}>
        Tekan ikon untuk ketahui info lebih.
      </span>
   
      <div className="pantun-pantun">
        {pantunListToRender.map((p, index) => {
            return <Pantun kata={saringKeyword} key={index}>{p}</Pantun>;
          })
        }
      </div>
    </main>
  );
}

export default TerokaTema;
