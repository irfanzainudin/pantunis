import { Link } from "react-router-dom";

function Tema({ tema_id, nama_tema }) {
  return (
    <div className="card m-3">
      <Link
        to={"/teroka/" + nama_tema.toLowerCase().split(" ").join("-")}
        state={{ tema_id, nama_tema }}
      >
        <div className="kad">{nama_tema}</div>
      </Link>
    </div>
  );
}

export default Tema;
