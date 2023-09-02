import { useParams } from "react-router-dom";
import Pantun from "../components/Pantun";

const pantun = [
  "Siakap senohong gelama ikan duri, Bercakap bohong lama-lama mencuri",
  "Dua tiga kucing berlari, Mana nak sama si kucing belang, Dua tiga boleh ku cari, Mana nak sama si adik seorang.",
  "Buah cempedak luar pagar, Ambil galah tolong jolokkan, Saya budak baru belajar, Kalau salah tolong tunjukkan",
  "Siakap senohong gelama ikan duri, Bercakap bohong lama-lama mencuri",
  "Dua tiga kucing berlari, Mana nak sama si kucing belang, Dua tiga boleh ku cari, Mana nak sama si adik seorang.",
  "Ada beras taruh dalam padi, Ada ingat taruh dalam hati",
  "Siakap senohong gelama ikan duri, Bercakap bohong lama-lama mencuri",
  "Gaharu, cengal, giam, Tak tahu, tak kenal, diam",
  "Buah cempedak luar pagar, Ambil galah tolong jolokkan, Saya budak baru belajar, Kalau salah tolong tunjukkan",
];

function TerokaKategori() {
  const { nama_kategori } = useParams();
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
          />
          <div id="cari" className="form-text">
            Saring pantun guna perkataan.
          </div>
        </section>
      </div>
      <div className="pantun-pantun">
        {pantun.length > 0
          ? pantun.map((p) => {
              return <Pantun>{p}</Pantun>;
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
