import kamusTema from "../utils/kamusTema";
import Tema from "../components/Tema";
import React from "react";
import "./Teroka.css";

function Teroka() {
  return (
    <main className="mt-3">
      <h1>
        <i className="bi bi-compass"></i> Teroka
      </h1>
      <h2 className="fs-6">Terokai Pantunis mengikut tema</h2>
      <div className="tema-tema">
        {Object.keys(kamusTema).map((key, i) => {
          var val = kamusTema[key];
          return (
            <Tema
              key={i}
              tema_id={key}
              nama_tema={val.charAt(0).toUpperCase() + val.slice(1)}
            />
          );
        })}
      </div>
    </main>
  );
}

export default Teroka;
