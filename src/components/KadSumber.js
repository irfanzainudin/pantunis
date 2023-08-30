import { Link } from "react-router-dom";

function KadSumber({ tajuk, penulis, pautan, imej }) {
  const sumber_info = {
    tajuk: tajuk,
    penulis: penulis,
    imej: imej,
  };
  return (
    <div className="card mb-3 sumber">
      <div className="row g-0">
        <div className="col-md-4">
          <img src={imej} className="img-fluid rounded-start" alt={imej} />
        </div>
        <div className="col-md-8">
          <div className="card-body">
            <h5 className="card-title">{tajuk}</h5>
            <p className="card-text">{penulis}</p>
            <p className="card-text">
              <small className="text-body-secondary">
                Pautan utama: <a src={pautan}>{pautan}</a>
              </small>
            </p>
            <Link
              to={"/sumber/" + tajuk.toLowerCase().replaceAll(" ", "-")}
              className="btn btn-primary"
              state={sumber_info}
            >
              Ketahui lebih
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default KadSumber;
