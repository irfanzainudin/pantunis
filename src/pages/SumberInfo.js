import { useLocation, useParams } from "react-router-dom";

function SumberInfo() {
  const { tajuk_sumber } = useParams();
  const location = useLocation();
  const { tajuk, penulis, pautan, imej } = location.state;
  return (
    <main>
      {/* <h1>Sumber Info</h1>
      <p>🚧 Under Construction 🚧</p> */}
      <img src={imej} className="imej-sumber" alt={imej} />
      <section className="tajuk-penulis">
        <h1>{tajuk}</h1>
        <small>Oleh {penulis}</small>
      </section>
      <section className="lsgr-container">
        <ul className="list-group">
          <li className="list-group-item">
            <b>Pautan untuk sumber primer</b>
          </li>
          <li className="list-group-item">
            <a href={pautan}>{pautan}</a>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default SumberInfo;
