import { Link } from "react-router-dom";

function Tema({ tema_id, nama_tema }) {
  return (
    <Link
      to={"/teroka/" + nama_tema.toLowerCase().split(" ").join("-")}
      state={{ tema_id, nama_tema }}
    >
      <div className="kad">{nama_tema}</div>
    </Link>
  );
}

export default Tema;
