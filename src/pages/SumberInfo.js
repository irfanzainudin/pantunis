import { useLocation, useParams } from "react-router-dom";

function SumberInfo() {
  const { tajuk_sumber } = useParams();
  const location = useLocation();
  const { tajuk, penulis, imej } = location.state;
  return (
    <main>
      <div>
        <h1>Sumber Info</h1>
        <p>🚧 Under Construction 🚧</p>
        <img src={imej} className="imej-sumber" alt={imej} />
        <h1>{tajuk}</h1>
        <small>Oleh {penulis}</small>
      </div>
    </main>
  );
}

export default SumberInfo;
