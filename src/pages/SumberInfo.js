import { useLocation, useParams } from "react-router-dom";

function SumberInfo() {
  // const { tajuk_sumber } = useParams();
  const location = useLocation();
  const { tajuk, penulis, pautan, imej } = location.state;
  return (
    <main>
      <img src={imej} className="imej-sumber" alt={imej} />
      {/* reference: https://www.google.com/url?sa=i&url=https%3A%2F%2Fbitsofco.de%2Fsectioning-content-in-html5%2F&psig=AOvVaw0hu4fEB7eL_ww97Rsiq--K&ust=1693663517746000&source=images&cd=vfe&opi=89978449&ved=0CA8QjRxqFwoTCND72bTKiYEDFQAAAAAdAAAAABAE */}
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
