import Kategori from "../components/Kategori";
import "./Teroka.css";

const kategori = ["Nasihat", "Agama", "Cinta", "Jenaka"];

function Teroka() {
  return (
    <main>
      {/* <h1>Teroka</h1> */}
      {/* <p>🚧 Under Construction 🚧</p> */}
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
