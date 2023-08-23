import { useParams } from "react-router-dom";

function TerokaKategori() {
  const { nama_kategori } = useParams();
  return (
    <main className="App-main">
      <div>
        <h1>Teroka Kategori {nama_kategori}</h1>
        <p>🚧 Under Construction 🚧</p>
      </div>
    </main>
  );
}

export default TerokaKategori;
