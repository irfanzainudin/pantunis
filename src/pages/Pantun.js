import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

// TODO: I don't think we need this
let headers = {
  "Access-Control-Allow-Credentials": true,
  "Access-Control-Allow-Origin": "https://pantunis-api.vercel.app/",
  Vary: "Origin",
  "Access-Control-Allow-Methods": "GET,OPTIONS,PATCH,DELETE,POST,PUT",
  "Access-Control-Allow-Headers":
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
};

function PantunPage() {
  const splitted = window.location.href.split('/');
  const pid = splitted[splitted.length - 1];
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
        "https://pantunis-api.vercel.app/api/cariGunaID?id=" + pid,
        headers
      )
      .then((response) => {
        // Update the pantun state
        setPantun(response.data[0]);

        // Update loading state
        setLoading(false);
      })
      .catch((error) => {
        console.log(
          `There was an error fetching pantun #${pid}: ${error}`
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
  
  return (
    <main className="mt-3 animate__animated animate__fadeIn">
      <h1 className="fs-4">Pantun #{pantun.pantun_id}</h1>
      {
      pantun.pantun_jenis === 4
      ?
      <section className="fs-1">
        <p>{pantun.pantun_bayang1}</p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;
          {pantun.pantun_bayang2}
        </p>
        <p>{pantun.pantun_maksud1}</p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;
          {pantun.pantun_maksud2}
        </p>
      </section>
      :
      <section className="fs-1">
        <p>{pantun.pantun_bayang1}</p>
        <p>
          &nbsp;&nbsp;&nbsp;&nbsp;
          {pantun.pantun_maksud1}
        </p>
      </section>
      }
      <div>
        <p>Dari {pantun.sumber_tajuk}</p>
        <p>Oleh {pantun.sumber_pengkarya}</p>
        <Link to="/anon" className="btn btn-lg btn-primary me-3 disabled">
          <i class="bi bi-person-fill-check"></i> Tafsiran Pakar<br/><span className="badge bg-secondary">Akan Datang</span>
        </Link>
        <Link to="/login" className="btn btn-lg btn-primary disabled">
          <i className="bi bi-person-circle"></i> Tafsiran Komuniti<br/><span className="badge bg-secondary">Akan Datang</span>
        </Link>
      </div>
    </main>
  );
}

export default PantunPage;