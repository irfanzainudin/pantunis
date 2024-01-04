import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Pantun from "../components/Pantun";
import axios from "axios";

// const pantun = [
//   "Siakap senohong gelama ikan duri, Bercakap bohong lama-lama mencuri",
//   "Dua tiga kucing berlari, Mana nak sama si kucing belang, Dua tiga boleh ku cari, Mana nak sama si adik seorang.",
//   "Buah cempedak luar pagar, Ambil galah tolong jolokkan, Saya budak baru belajar, Kalau salah tolong tunjukkan",
//   "Siakap senohong gelama ikan duri, Bercakap bohong lama-lama mencuri",
//   "Dua tiga kucing berlari, Mana nak sama si kucing belang, Dua tiga boleh ku cari, Mana nak sama si adik seorang.",
//   "Ada beras taruh dalam padi, Ada ingat taruh dalam hati",
//   "Siakap senohong gelama ikan duri, Bercakap bohong lama-lama mencuri",
//   "Gaharu, cengal, giam, Tak tahu, tak kenal, diam",
//   "Buah cempedak luar pagar, Ambil galah tolong jolokkan, Saya budak baru belajar, Kalau salah tolong tunjukkan",
// ];

function TerokaKategori() {
  const { nama_kategori } = useParams();
  const [filteredPantun, setFilteredPantun] = useState("");
  const [pantun, setPantun] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPantun();
  }, []);

  const fetchPantun = async () => {
    // Send GET request to 'pantun/semua' endpoint
    axios
      .get("https://pantunis-api.vercel.app/api/semua")
      .then((response) => {
        // Update the pantun state
        setPantun(response.data);

        // Update loading state
        setLoading(false);
      })
      .catch((error) =>
        console.error(`There was an error retrieving the pantun list: ${error}`)
      );
  };

  const handleChange = (e) => {
    setFilteredPantun(e.target.value);
  };

  if (loading) return <p>Pantun table is loading...</p>;

  return (
    <main>
      {/* <h1>Teroka Kategori {nama_kategori}</h1> */}
      {/* <p>🚧 Under Construction 🚧</p> */}
      <div className="d-flex flex-column justify-content-between align-items-center my-3">
        <section className="mb-3 w-25">
          <label htmlFor="cari" className="form-label">
            Saring kategori {nama_kategori}
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
                p.bayang1.toLowerCase().includes(filteredPantun) ||
                p.bayang2.toLowerCase().includes(filteredPantun) ||
                p.maksud1.toLowerCase().includes(filteredPantun) ||
                p.maksud2.toLowerCase().includes(filteredPantun);
              if (filterCheck) {
                return <Pantun>{p}</Pantun>;
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

export default TerokaKategori;
