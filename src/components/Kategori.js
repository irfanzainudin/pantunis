import { Link } from "react-router-dom";

function Kategori({ nama_kategori }) {
  return (
    <Link to={"/teroka/" + nama_kategori.toLowerCase()}>
      <div className="kad">{nama_kategori}</div>
    </Link>
  );
}

export default Kategori;
