import Kategori from "../components/Kategori";
import "./Teroka.css";

const kategori = [
  "Nasihat",
  "Agama",
  "Cinta",
  "Nasihat",
  "Agama",
  "Cinta",
  "Nasihat",
  "Agama",
  "Cinta",
  "Nasihat",
  "Agama",
  "Cinta",
  "Nasihat",
  "Agama",
  "Cinta",
  "Nasihat",
  "Agama",
  "Cinta",
];

function Teroka() {
  return (
    <main className="App-main">
      <div className="kategori-kategori">
        {kategori.length > 0
          ? kategori.map((nama_kategori) => {
              return <Kategori nama_kategori={nama_kategori} />;
            })
          : ""}
      </div>
    </main>
  );
}

export default Teroka;
